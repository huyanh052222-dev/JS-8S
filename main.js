const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container-wrap')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))


const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle-step');
const contents = document.querySelectorAll('.step-content');

let currentActive = 1;

function reloadDone(){
    if (currentActive === 4) {
            location.reload(); 
        return; 
    }
}

function update() {
    // reloadDone();
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.circle-step.active');
    
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    contents.forEach((content, idx) => {
        if (idx === currentActive - 1) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.innerText = "Done";
        next.disabled = false; 
        prev.disabled = false;
    } else {
        prev.disabled = false;
        next.disabled = false;
        next.innerText = "Next";
    }
}

next.addEventListener('click', () => {
    if (currentActive === 4) {
            location.reload(); 
        return; 
    }
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
});