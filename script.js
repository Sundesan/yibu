// script.js

// Log a message to the browser console
console.log("JavaScript is working!");

// Add an event listener to the button
document.getElementById("testButton").addEventListener("click", function () {
    alert("Button clicked!");
});

// Optional: Add interactivity to the header
document.querySelector('.header-text').addEventListener('click', function () {
    alert('Header clicked: Welcome to YIBU!');
});
