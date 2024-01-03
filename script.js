// script.js

function submitFeedback() {
    // Get the feedback from the textarea
    alert("feedback is submit")
    var feedbackText = document.getElementById("feedback").value;

    // You can perform further validation or processing here

    // For now, let's just log the feedback to the console
    console.log("Feedback submitted:", feedbackText);

    // Optionally, you can reset the form
    document.getElementById("feedbackForm").reset();

}