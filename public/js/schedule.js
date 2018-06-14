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
        var editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-info");
        $(".todo-list").append(newLine);
        $(newLine).append(deleteBtn);
        $(newLine).append(editBtn);
    });

    $(".delete").on("click", function(event){
        event.stopPropagation();
        console.log($(this).data)
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/schedule/:id" 
    }).then(getList());
    });
          // $(document).on("click", "button.delete", deleteTodo);
    // $(document).on("click", "button.complete", toggleComplete);
    // $(document).on("click", ".todo-item", editTodo);
    // $(document).on("keyup", ".todo-item", finishEdit);
    // $(document).on("blur", ".todo-item", cancelEdit);
    // $(document).on("submit", "#todo-form", insertTodo);

    // var list=[];

    // getList();

    // function initializeList() {
    //     $(".todo-list").empty();
    //     var rowsToAdd=[];
    //     for (var i=0; i < list.length; i++) {
    //         rowsToAdd.push(createNewRow(list[i]));
    //     }
    //     $(".todo-list").prepend(rowsToAdd);
    // }

    // function getList() {
    //     $.get("/api/schedule", function(data) {
    //         list = data;
    //         initializeList();
    //     });
    // }

        // function updateSchedule() {
        //     $.ajax({
        //         method: "PUT",
        //         url: "/api/schedule",
        //         data: todo
        //     }).then(getSchedule);
        // }
        // $.get()

        // $.put("/api/schedule", schedItem).then(function)

        // $.delete()

     
});

