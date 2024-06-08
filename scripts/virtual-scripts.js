document.getElementById('join-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var joinCodeInput = document.getElementById('join-code');
    var joinCodeError = document.getElementById('join-code-error');
    var joinCode = joinCodeInput.value.trim(); // Trim to remove whitespace
    
    if (joinCode === '') {
        joinCodeError.style.display = 'block'; // Display error message
    } else {
        // Hide the form and show the appointment info
        document.getElementById('join-form').classList.add('d-none');
        document.getElementById('appointment-info').classList.remove('d-none');
    }
});
