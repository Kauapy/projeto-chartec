window.addEventListener('scroll', () => {
    const btn = document.getElementById('setaTopo');
    btn.classList.toggle('visivel', window.scrollY > 300);
});

document.getElementById('setaTopo').addEventListener('click', (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    const btn = document.getElementById('setaTopo2');
    btn.classList.toggle('visivel', window.scrollY > 300);
});

document.getElementById('setaTopo2').addEventListener('click', (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    const btn = document.getElementById('setaTopo3');
    btn.classList.toggle('visivel', window.scrollY > 300);
});

document.getElementById('setaTopo3').addEventListener('click', (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    const btn = document.getElementById('setaTopo4');
    btn.classList.toggle('visivel', window.scrollY > 300);
});

document.getElementById('setaTopo4').addEventListener('click', (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});