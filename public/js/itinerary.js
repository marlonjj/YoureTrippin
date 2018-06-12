$(document).ready(function() {
    // Getting a reference to the input field where user adds a new todo
    var $newItemInput = $("input.new-item");
    // Our new todos will go inside the todoContainer
    var $todoContainer = $(".todo-container");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deleteTodo);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".todo-item", editTodo);
    $(document).on("keyup", ".todo-item", finishEdit);
    $(document).on("blur", ".todo-item", cancelEdit);
    $(document).on("submit", "#todo-form", insertTodo);

    // Our initial todos array
    var todos = [];

    // Getting todos from database when page loads
    getTodos();

    // This function resets the todos displayed with new todos from the database
    function initializeRows() {
        $todoContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < todos.length; i++) {
            rowsToAdd.push(createNewRow(todos[i]));
        }
        $todoContainer.prepend(rowsToAdd);
    }

    // This function grabs todos from the database and updates the view
    function getTodos() {
        $.get("/api/todos", function(data) {
            todos = data;
            initializeRows();
        });
    }

    // This function deletes a todo when the user clicks the delete button
    function deleteTodo(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/todos/" + id
        }).then(getTodos);
    }

    // This function handles showing the input box for a user to edit a todo
    function editTodo() {
        var currentTodo = $(this).data("todo");
        $(this).children().hide();
        $(this).children("input.edit").val(currentTodo.text);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
    }

    // Toggles complete status
    function toggleComplete(event) {
        event.stopPropagation();
        var todo = $(this).parent().data("todo");
        todo.complete = !todo.complete;
        updateTodo(todo);
    }

    // This function starts updating a todo in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit(event) {
        var updatedTodo = $(this).data("todo");
        if (event.which === 13) {
            updatedTodo.text = $(this).children("input").val().trim();
            $(this).blur();
            updateTodo(updatedTodo);
        }
    }

    // This function updates a todo in our database
    function updateTodo(todo) {
        $.ajax({
            method: "PUT",
            url: "/api/todos",
            data: todo
        }).then(getTodos);
    }

    // This function is called whenever a todo item is in edit mode and loses focus
    // This cancels any edits being made
    function cancelEdit() {
        var currentTodo = $(this).data("todo");
        if (currentTodo) {
            $(this).children().hide();
            $(this).children("input.edit").val(currentTodo.text);
            $(this).children("span").show();
            $(this).children("button").show();
        }
    }

    // This function constructs a todo-item row
    function createNewRow(todo) {
        var $newInputRow = $(
            [
                "<li class='list-group-item todo-item'>",
                "<span>",
                todo.text,
                "</span>",
                "<input type='text' class='edit' style='display: none;'>",
                "<button class='delete btn btn-danger'>x</button>",
                "<button class='complete btn btn-primary'>✓</button>",
                "</li>"
            ].join("")
        );

        $newInputRow.find("button.delete").data("id", todo.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("todo", todo);
        if (todo.complete) {
            $newInputRow.find("span").css("text-decoration", "line-through");
        }
        return $newInputRow;
    }

    // This function inserts a new todo into our database and then updates the view
    function insertTodo(event) {
        event.preventDefault();
        var todo = {
            text: $newItemInput.val().trim(),
            complete: false
        };

        $.post("/api/todos", todo, getTodos);
        $newItemInput.val("");
    }
});




/////////// Weather API?/////////////////////////////////////////
// When I click the search icon or hit enter after
// typing a city in the search field, call the 
// getWeather and getForecast functions.
$('#submitWeather').click(getWeather);
//document.querySelector('#submitWeather').addEventlistener('click', getWeather);
$('#submitWeather').click(getForecast);
$("#city").keyup(function(hitKey) {
    if (hitKey.keyCode == 13) {
        $("#submitWeather").click();
    }
});

// function to resize the #weather-box div once
// search button or enter is clicked

$("#submitWeather").click(function() {
    if ($(window).width() < 415) {
        $(".weather-box").animate({
            height: "590px"
        }, 400);
    } else {
        $(".weather-box").animate({
            height: "375px"
        }, 400);
        //$("#current-weather-box").animate({
        //	height: "435px"
        //}, 500);
        $("#showTemp").animate(500);
        $(".deg").animate(500);
        $(".f").animate(500);
        $("#showMain").animate(500);
        //$("#showHumidity").animate(900);
        $("#forecast-section").animate({
            height: "435px"
        }, 500);
        if ("#city" == undefined) {
            $("#error").html("You Must Type in a City!");
        }
    }
});

//function to hide the weather data if "X" is clicked

$("#cancel").click(function() {
    $("#columnOne").hide(300);
    $("#columnTwo").hide(300);
    $("#columnThree").hide(300);
    $("#forecast-section").hide(300);
    $("#columnOne").empty(300);
    $("#columnTwo").empty(300);
    $("#columnThree").empty(300);
    $("#forecast-section").empty(300);
});

//function to shrink the #weather-box back to original size 
//if the "X" button is clicked.

$("#cancel").click(function() {
    $(".weather-box").animate({
        height: "61px"
    }, 500);
    $("#current-weather-box").animate({
        height: "150px"
    }, 500);
});

// function to clear the input text in the search box
// when the "X" button is clicked

$('#cancel').click(function() {
    $('#city').val('');
});

// function to use the string typed the input to when
// calling the API

function getWeather() {
    var inputString = document.getElementById('city').value;
    loadWeather(inputString);
}

// function to call the API with the city in the input field

function loadWeather(searchString) {
    var requestString = 'https://api.openweathermap.org/data/2.5/weather?q=' +
        searchString +
        "&units=imperial&APPID=36e67cbc7819b260cde6008d38c27bdf";
    //console.log(requestString);
    $.getJSON(requestString, processAPIResults);
}
// function to post current weather info

function processAPIResults(data) {
    if (data.name !== undefined) {
        // to round the temp to a whole number and show the rest of
        // of the weather info in the current weather section
        var roundedTemp = Math.round(data.main.temp);
        $('#showTemp').html(roundedTemp);
        $('.deg').html("&deg");
        $('.f').html("F");
        $('#showMain').html(data.weather[0].main);
        $('#showHumidity').html(data.main.humidity + "% Humidity");
        console.log(data.weather.main);
    } else if (data.name == undefined) {
        console.log(data.name);
        $("#error").html('City Could Not Be Located');
    }
}

// function to call the API with the city in the input field

function getForecast() {
    var inputString = document.getElementById('city').value;
    loadForecast(inputString);
}

// function to call the forecast API with the city in the
// input field

function loadForecast(searchString) {
    var requestString = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' +
        searchString +
        "&units=imperial&APPID=36e67cbc7819b260cde6008d38c27bdf";
    console.log(requestString);
    $.getJSON(requestString, processForecastResults);
}

var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = new Date().getDay();

// function to post all the forecast info
function processForecastResults(data) {
    if (data.city.name !== undefined) {

        $('.day-name').text(function(i) {
            return dayNames[(day + ++i) % dayNames.length];
        });

    }
    //day 1 weather icon

    var iconCodeOne = data.list[1].weather[0].icon;
    var iconUrlOne = "http://openweathermap.org/img/w/" + iconCodeOne + ".png";
    $("#iconOne").html("<img src='" + iconUrlOne + "'>");
    //day 2 weather icon
    var iconCodeTwo = data.list[2].weather[0].icon;
    var iconUrlTwo = "http://openweathermap.org/img/w/" + iconCodeTwo + ".png";
    $("#iconTwo").html("<img src='" + iconUrlTwo + "'>");
    //day 3 weather icon
    var iconCodeThree = data.list[3].weather[0].icon;
    var iconUrlThree = "http://openweathermap.org/img/w/" + iconCodeThree + ".png";
    $("#iconThree").html("<img src='" + iconUrlThree + "'>");
    //day 4 weather icon
    var iconCodeFour = data.list[4].weather[0].icon;
    var iconUrlFour = "http://openweathermap.org/img/w/" + iconCodeFour + ".png";
    $("#iconFour").html("<img src='" + iconUrlFour + "'>");
    //day 5 weather icon
    var iconCodeFive = data.list[5].weather[0].icon;
    var iconUrlFive = "http://openweathermap.org/img/w/" + iconCodeFive + ".png";
    $("#iconFive").html("<img src='" + iconUrlFive + "'>");
    //forecast temp highs
    $('#dayOneMax').html(Math.round(data.list[1].temp.max));
    $('#dayTwoMax').html(Math.round(data.list[2].temp.max));
    $('#dayThreeMax').html(Math.round(data.list[3].temp.max));
    $('#dayFourMax').html(Math.round(data.list[4].temp.max));
    $('#dayFiveMax').html(Math.round(data.list[5].temp.max));
    // forecast temp lows
    $('#dayOneMin').html(Math.round(data.list[1].temp.min));
    $('#dayTwoMin').html(Math.round(data.list[2].temp.min));
    $('#dayThreeMin').html(Math.round(data.list[3].temp.min));
    $('#dayFourMin').html(Math.round(data.list[4].temp.min));
    $('#dayFiveMin').html(Math.round(data.list[5].temp.min));
}