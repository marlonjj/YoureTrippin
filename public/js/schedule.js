$("#submitBtn").on("click", function(event) {

    event.preventDefault();

    var list=[];

    getList();

    function initializeList() {
        $(".todo-list").empty();
        var rowsToAdd=[];
        for (var i=0; i < list.length; i++) {
            rowsToAdd.push(createNewRow(list[i]));
        }
        $(".todo-list").prepend(rowsToAdd);
    }

    function getList() {
        $.get("/api/schedule", function(data) {
            list = data;
            initializeList();
        });
    }

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
        // console.log(response);
        var newLine = $(`<li class="list-group-item new-item form-color appendBtn">${response.title}</li>`)
        var deleteBtn = $("<button>");
        deleteBtn.text("X");
        deleteBtn.addClass("delete btn btn-danger");
        deleteBtn.attr("data-id", response.id)
        var editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-info");
        deleteBtn.attr("data-id", response.id)
        $(".todo-list").append(newLine);
        $(newLine).append(deleteBtn);
        $(newLine).append(editBtn);
    });

    $("body").on("click", ".delete", function(event){
        event.stopPropagation();
        console.log($(this).data)
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/schedule/" +id 
    }).then(getList());
    });
 
    $("body").on("click", ".edit", function(event){
        event.stopPropagation();
        console.log($(this).data)
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/schedule/" +id 
    }).then(getList());
    });
 
    
     
});

