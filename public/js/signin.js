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
        localStorage.setItem("currentUser", response.id);
        // window.location.href = "/vacation"
      }
      
    }).then(function(){
      window.location.href = "/vacation";
    })
  });
});
