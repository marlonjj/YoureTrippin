$(document).ready(function(){
  $('#signIn').on('click', function(){

    var user = {
        username: $("#inputEmail").val().trim(),
        password: $("#inputPassword1").val().trim()
    };

    $.post('/api/login', user).then(function(response){
      console.log(response);
    });

  });
});
