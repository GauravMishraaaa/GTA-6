var bt = document.getElementById("b");

bt.addEventListener("click", function() {
    window.location.href='checkout.html';
    bt.style.backgroundColor = "green";
    bt.disabled= true;
});

