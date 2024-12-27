function signup(){
    alert("Signup successfull");
}

function login(event){
    event.preventDefault();
    alert("Logged in Successfully");
    window.location.href="homepage.html";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
function explore(){
    window.location.href="explore.html";
}
function back(){
    window.location.href="homepage.html";
}

function buy(){
  window.location.href="payment.html";
}

function logout(){
  alert("Logged Out Successfully");
  window.location.href="login.html";
}

