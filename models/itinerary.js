// var user = localStorage.currentUser;
// var trip = localStore.currentTrip;

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
        console.log(response);
        // window.location.href = "/itinerary";
    });

    // app.post("/api/schedule", schedItem, function(data) {
    //     console.log(schedItem);
    // })
})