let currentStep = 1;

// Validation for each step
function validateStep(step) {
  switch (step) {
    case 1:
      const eventName = document.getElementById('event-name').value.trim();
      const eventDescription = document.getElementById('event-description').value.trim();
      return eventName && eventDescription;

    case 2:
      const sessionName = document.getElementById('session-name').value.trim();
      return sessionName;

    case 3:
      const invitees = document.getElementById('invitees').files.length > 0;
      return invitees;

    default:
      return true; // Step 4 doesn't need validation
  }
}

// Move to the next step
function goToStep(nextStep) {
  // Update current step container and progress
  document.getElementById(`step-${currentStep}`).classList.remove('active');
  document.getElementById(`step-${currentStep}-indicator`).classList.add('completed');
  document.getElementById(`circle-${currentStep}`).innerText = '✔';

  // Update to next step
  currentStep = nextStep;
  document.getElementById(`step-${currentStep}`).classList.add('active');
  document.getElementById(`step-${currentStep}-indicator`).classList.add('active');
}

// Event listeners for all buttons
document.getElementById('next-1').addEventListener('click', () => {
  if (validateStep(1)) goToStep(2);
  else alert('Please fill in all fields for Step 1.');
});

document.getElementById('next-2').addEventListener('click', () => {
  if (validateStep(2)) goToStep(3);
  else alert('Please fill in all fields for Step 2.');
});

document.getElementById('next-3').addEventListener('click', () => {
  if (validateStep(3)) goToStep(4);
  else alert('Please upload a CSV file for Step 3.');
});

document.getElementById('publish').addEventListener('click', () => {
  alert('Event successfully published! 🎉');
});
