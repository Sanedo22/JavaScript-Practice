let btn = document.getElementById('btn');
let mode = 'light';
let body = document.querySelector('body');

btn.addEventListener('click', () =>{
    if(mode === 'light'){
        body.classList.add('dark');
        mode = 'dark';
    } else {
        body.classList.add('light');
        mode = 'light';
    }
});
console.log(mode);