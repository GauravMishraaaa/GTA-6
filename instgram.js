function storeUserInput (){
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   
   localStorage.setItem('username', username);
   localStorage.setItem('password', password);
}

function loginButton() {
    var button = document.getElementById("login_button");

    button.addEventListener("click", function() {
        alert("Thanks For The Vote!");
    
        button.style.backgroundColor="green";
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loginButton);
