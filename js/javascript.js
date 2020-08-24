setTimeout(() => {
    let overlay = document.querySelector('.overlay');
    for (let top = 0; top <= 120; top++) {
        setTimeout(() => {
            overlay.style.top = `-${top}%`
        }, top * 10)
    }
}, 5000)