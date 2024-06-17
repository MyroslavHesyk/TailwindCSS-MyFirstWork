document.getElementById('toggle-theme').addEventListener('click', function() {
    const htmlElement = document.documentElement;
    const toggleButton = document.getElementById('toggle-theme');
    const sunIcon = toggleButton.querySelector('.fa-sun');
    const moonIcon = toggleButton.querySelector('.fa-moon');
    const buttonText = toggleButton.querySelector('span');

    if (htmlElement.classList.contains('light')) {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        buttonText.textContent = 'Light mode'; // Text for dark theme
    } else {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        buttonText.textContent = 'Dark mode'; // Text for light theme
    }
});
