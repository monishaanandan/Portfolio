document.getElementById("queryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("responseMessage").textContent = "Thank you, " + name + "! Your query has been submitted.";
        document.getElementById("queryForm").reset();
    } else {
        document.getElementById("responseMessage").textContent = "Please fill all fields.";
    }
});