// Go back to home page when logo is clicked
$( "#logo" ).click(function() {
  window.location.href = 'index.html';
});

document.getElementById("submitform").addEventListener("click", function(e){
    sendEmail();
    e.preventDefault();
});
