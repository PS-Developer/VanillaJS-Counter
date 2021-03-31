//set intial count
let count = 0;

// select values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        var decSound = new Audio("sounds/decSound.wav");
        var incSound = new Audio("sounds/incSound.wav");
        var resSound = new Audio("sounds/resSound.wav");
        //console.log(styles)
        if (styles[1].includes('decrease')) {
            decSound.play();
            count--;
        } else if (styles[1].includes('increase')) {
            incSound.play();
            count++
        } else {
            resSound.play();
            count = 0;
        };
        (count > 0) ? value.style.color = 'green' : value.style.color = 'red';
        value.textContent = count;
        if (count === 0) {
            value.style.color = 'black'
        }
    });
});