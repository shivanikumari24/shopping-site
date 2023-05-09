const input = document.getElementById("email");
let message = document.querySelector(".submission");

function sign(){
    
    if (input.value !== "") {
		message.style.display = "block";
		message.textContent = `Thank you for your interest in Newsletter.`
	}
    else{
        alert("please provide email for newsletter")
    }
    input.value = "" ;

    
}


// window.onscroll = function() {myFunction()};

// var header = document.getElementById("header");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
