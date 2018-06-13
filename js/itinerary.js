var user = localStorage.currentUser;
var trip = localStore.currentTrip;

$(".create_schedule_card").on("submit", function(event){
    event.preventDefault;

    var schedItem = {
        tripID: trip,
        title: $("#title").val().trim(),
        body: $("#body").val().trim(),
        startTime: $("#start").val().trim(),
        endTime: $("#end").val().trim()
    }

    app.post("/api/trips", schedItem, function(){

    })
})