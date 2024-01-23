
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const move = 500; //px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xmove = Math.round((x / width * move) - (move /2));
    const ymove = Math.round((y / width * move) - (move /2));

    text.style.textShadow = `${xmove}px ${ymove}px 0 #00008b`;
}

hero.addEventListener('mousemove', shadow);