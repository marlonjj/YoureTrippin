$(document).ready(function() {
    $("#register").on("click", function (event){
        event.preventDefault();
        console.log("here we go");
        //if any form input is empty, don't submit
        if (!$("#firstName").val().trim() || !$("#lastName").val().trim() || !$("#exampleInputEmail").val().trim() || !$("#exampleInputPassword1").val().trim()) {
            return;
        }
        
        var prefArr = [
            $("#inlineCheckbox1"),
            $("#inlineCheckbox2"),
            $("#inlineCheckbox3"),
            $("#inlineCheckbox4"),
            $("#inlineCheckbox5"),              
            $("#inlineCheckbox6")
        ];
        var preferences = "";
        for (i=0; i<prefArr.length; i++){
          if (prefArr[i].is(":checked")){
              if(preferences != ""){
                  preferences += ',';
              }
              preferences += prefArr[i].val();
          }
        }

        console.log($("#inlineCheckbox1").val())
        // Creating an object to be pushed up to user table
        var newUser = {
            firstName: $("#firstName").val().trim(),
            lastName: $("#lastName").val().trim(),
            username: $("#exampleInputEmail").val().trim(),
            password: $("#exampleInputPassword1").val().trim(),
            preferences: preferences
        };
        registerUser(newUser);
    })
    
    function registerUser(user){
        $.post("/api/register", user).then(function(data) {
            console.log(data);
            window.location.href = "/signin";
        })
    }
})
