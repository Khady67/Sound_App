window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual")
    const colors = [
        "rgba(96, 207, 198, 0.795)",
        "rgba(236, 144, 90, 0.795)",
        "rgba(245, 83, 231, 0.795)",
        "rgba(82, 105, 206, 0.795)",
        "rgba(250, 248, 108, 0.795)",
        "rgba(191, 85, 212, 0.795)"
    ]

    //play sounds
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0
            sounds[index].play()

            createBubbles(index)
        })
    })

    //function for bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this)
        })
    }

})

