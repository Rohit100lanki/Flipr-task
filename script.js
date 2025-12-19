const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // page reload hone se rokta hai

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        statusText.style.color = "red";
        statusText.innerText = "Please fill all fields!";
    } else {
        statusText.style.color = "green";
        statusText.innerText = "Form submitted successfully!";

        // form clear kar do
        form.reset();
    }
});
