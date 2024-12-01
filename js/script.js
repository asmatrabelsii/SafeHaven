document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('report-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        alert('Thank you for reporting! Your form has been submitted.');

        form.reset();
    });
});
