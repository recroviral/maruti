// JavaScript to handle form submission
document.getElementById("inquiry-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const requirements = document.getElementById("requirements").value;

    // Create a data object to send via AJAX
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("requirements", requirements);

    // Send the data to the PHP script
    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Handle the response (e.g., show a thank you message)
        alert(data);
        // You can redirect to a thank you page or clear the form as needed
    })
    .catch(error => {
        // Handle errors, e.g., show an error message
        alert("An error occurred while submitting the form.");
    });
});
