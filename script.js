// script.js

document.getElementById('compensationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Collect responses
  const q1 = document.querySelector('input[name="q1"]:checked').value;
  const q2 = document.querySelector('input[name="q2"]:checked').value;
  const q3 = document.querySelector('input[name="q3"]:checked').value;
  const q4 = document.querySelector('input[name="q4"]:checked').value;
  const q5 = document.querySelector('input[name="q5"]:checked').value;
  const q6 = document.querySelector('input[name="q6"]:checked').value;
  const q7 = document.querySelector('input[name="q7"]:checked').value;
  const q8 = document.querySelector('input[name="q8"]:checked').value;

  let message = '';

  // Logic Flow
  if (q1 === 'yes') {
    message = 'The customer is not eligible for compensation.';
  } else if (q2 === 'no') {
    message = 'You need to escalate the case to the correct department before asking for compensation.';
  } else if (q3 === 'no') {
    message = 'Please allow at least 72 hours after escalation before considering compensation.';
  } else if (q4 === 'no') {
    message = 'Ensure that internal processes are fully utilized before considering compensation.';
  } else if (q5 === 'no') {
    message = 'Consider further troubleshooting before offering compensation.';
  } else if (q6 === 'no') {
    message = 'Advise the customer to check their setup or provide evidence before proceeding.';
  } else if (q7 === 'no') {
    message = 'Monitor the situation; compensation may not be necessary at this time.';
  } else if (q8 === 'yes') {
    message = 'The customer is not eligible for additional compensation at this time.';
  } else {
    message = 'The customer is eligible for compensation.';
  }

  // Display the message
  document.getElementById('message').innerText = message;
});
