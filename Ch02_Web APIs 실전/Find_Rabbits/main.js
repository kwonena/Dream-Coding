const btn = document.querySelector('.btn');
const rabbit = document.querySelector('.rabbit');

btn.addEventListener('click', () => {
    rabbit.scrollIntoView({behavior : "smooth", block : "center"});
});
