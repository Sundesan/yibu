// script.js

// Form validation and navigation
document.getElementById('event-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const eventName = document.getElementById('event-name').value.trim();
    const eventDescription = document.getElementById('event-description').value.trim();
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const registrationOpens = document.getElementById('registration-opens').value;
    const registrationCloses = document.getElementById('registration-closes').value;
    const location = document.getElementById('location').value.trim();
  
    if (eventName && eventDescription && startTime && endTime && registrationOpens && registrationCloses && location) {
      alert('Event details saved. Proceeding to the next step!');
    } else {
      alert('Please fill in all fields.');
    }
  });
  
  // Google Maps Integration
  const locationInput = document.getElementById('location');
  let autocomplete;
  
  function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(locationInput, {
      types: ['geocode'],
      componentRestrictions: { country: "us" },
    });
  
    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace();
      locationInput.value = place.formatted_address;
    });
  }
  
  document.addEventListener('DOMContentLoaded', initAutocomplete);
  