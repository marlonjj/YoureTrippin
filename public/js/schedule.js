$(document).ready(function(){
    // var user = localStorage.currentUser;
    // var trip = localStorage.currentTrip;

    $("#submitBtn").on("click", function(event) {
        event.preventDefault();

        var schedItem = {
            // tripID: trip,
            title: $("#title").val().trim(),
            body: $("#body").val().trim(),
            startTime: $("#start").val().trim(),
            endTime: $("#end").val().trim()
        }


        $.post("/api/schedule", schedItem).then(function(response) {
            // console.log(response);
            var newLine = $(`<li class="list-group-item new-item form-color">${response.body}</li>`)
            $(".todo-list").append(newLine);
        });

     
    });
});
