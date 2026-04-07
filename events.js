let btn = document.getElementById('btn');
let head = document.getElementById('heading');
let mode = 'light';
let body = document.querySelector('body');

btn.addEventListener('click', () => {
    if (mode === 'light') {
        body.classList.remove('light');
        body.classList.add('dark');
        mode = 'dark';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        mode = 'light';
    }
    console.log('Current mode:', mode);
});

head.addEventListener('mouseover', () => {
    head.classList.add('heading');
});

head.addEventListener('mouseout', () => {
    head.classList.remove('heading');
});