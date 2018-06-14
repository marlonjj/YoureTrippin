$(document).ready(function() {
    displayList();

$("#submitBtn").on("click", function(event) {

    event.preventDefault();

   var schedItem = {
        title: $("#title").val().trim(),
        body: $("#body").val().trim(),
        startTime: $("#start").val().trim(),
        endTime: $("#end").val().trim()
    }

    $('#title').val('')
    $('#body').val('')
    $("#start").val('')
    $("#end").val('')

    $.post("/api/schedule", schedItem).then(function(response) {
        displayList();
    });
 
    // $("body").on("click", ".edit", function(event){
    //     $.ajax({
    //         method: "PUT",
    //         url: "/api/schedule" ,
    //         data: list
    // }).then(getList());
    // });
     
});

$("body").on("click", ".delete", function(event){
    event.preventDefault();
    event.stopPropagation();
    console.log($(this).data)
    var id = $(this).data("id");
    $.ajax({
        method: "DELETE",
        url: "/api/schedule/" +id 
    }).then(function(){
        displayList();
    });
});

function displayList(){

var list=[];

getList();

function initializeList() {
    $(".todo-list").empty();
    var rowsToAdd=[];
    for (var i=0; i < list.length; i++) {
        rowsToAdd.push(createNewRow(list[i]));
    }
    // $(".todo-list").prepend(rowsToAdd);
    for (var n=0; n<rowsToAdd.length; n++) {
        $(".todo-list").prepend(rowsToAdd[n])
    }
}

function getList() {
    $.get("/api/schedule", function(data) {
        list = data;
        initializeList();
    });
}

function createNewRow(list) {
    var $newInputRow = $(
        [
            "<li class='list-group-item new-item form-color appendBtn'>",
            "<span>",
            list.title,
            "</span>",
            "<input type='text' class='edit' style='display: none;'>",
            "<button class='delete btn btn-danger'>x</button>",
            "<button class='complete btn btn-info'>✓</button>",
            "</li>"
        ].join("")
    );

    $newInputRow.find("button.delete").data("id", list.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("todo", list);
    if (list.complete) {
        $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
}
}
});