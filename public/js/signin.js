$(document).ready(function(){
  $('#signIn').on('click', function(event){
    event.preventDefault();

    var user = {
        username: $("#inputEmail").val().trim(),
        password: $("#inputPassword").val().trim()
    };
  // console.log(user);
    $.post('/api/login', user).then(function(response){
      console.log(response);
      if(response.id){
        sessionStorage.setItem("currentUser", response.id);
      }

    }).then(function(){
      window.location.href = "/vacation";
    });
  });
});
