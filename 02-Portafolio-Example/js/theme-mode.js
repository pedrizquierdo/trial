const selectedTheme = document.querySelector('#theme');
const body = document.querySelector('body');

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    selectedTheme.value = savedTheme;
}

const initialTheme = () => {
    if (selectedTheme.value === 'dark') {
        body.classList.add('dark-theme');
    }
    if (selectedTheme.value === 'light') {
        body.classList.remove('dark-theme');
    }
};

initialTheme();

selectedTheme.addEventListener('change', (event) => {
    const theme = event.target.value;
    console.log(theme);
    
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }

    if (theme === 'light') {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }

});