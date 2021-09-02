const hor = document.querySelector('.horozontal');
const ver = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x} ${y}`);

    ver.style.left = `${x}px`;
    hor.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px, ${y}px`;
})
