document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = [
        { id: 'act-button-1', newText: 'We offer all major vaccinations!' },
        { id: 'act-button-2', newText: 'Pet boarding with the higest level of care!' },
        { id: 'act-button-3', newText: 'Detailed nutrition and health guide!' },
        { id: 'act-button-4', newText: 'View all our offered services!' }
    ];

    buttons.forEach(button => {
        const btnElement = document.getElementById(button.id);
        const originalText = btnElement.innerText;
        const originalFontSize = window.getComputedStyle(btnElement).fontSize;

        btnElement.addEventListener('mouseover', function() {
            btnElement.innerText = button.newText;
            btnElement.style.fontSize = '0.9em';
        });

        btnElement.addEventListener('mouseout', function() {
            btnElement.innerText = originalText;
            btnElement.style.fontSize = originalFontSize;
        });
    });
});
