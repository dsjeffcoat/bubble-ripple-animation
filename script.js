const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const xCoord = e.clientX
        const yCoord = e.clientY

        // console.log(xCoord, yCoord)

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // console.log(buttonTop, buttonLeft)

        const xInside = xCoord - buttonLeft
        const yInside = yCoord - buttonTop

        // console.log(xInside, yInside)

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})