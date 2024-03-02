const yesButton = document.getElementById("yes");
const container = document.querySelector(".container");
let isShooting = true;
document.documentElement.scrollTop
generateStars()

yesButton.addEventListener("click", function() {
    container.classList.add("hidden");
    shootStars()

    setTimeout(function() {
        container.classList.remove("hidden");
        isShooting = false;
    }, 7000);
});


function generateStars() {
    const numOfStars = 420;
    for(let i = 0; i < numOfStars; i++) {
        const stars = document.createElement("i");
        
        let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * (window.innerHeight))
        let size = Math.floor(Math.random() * 3.3)
        let duration = Math.floor(Math.random() * 5 + 2)
        stars.style.left = x + "px"
        stars.style.top = y + "px"
        stars.style.height = size + "px"
        stars.style.width = size + "px"
        stars.style.animationDuration = duration + "s"

        document.body.appendChild(stars)
    }
};

function shootStars() {
    const numOfShootingStars = 10;
    const shootingStarsContainer = document.createElement("div");
    const col = ["#5d6de5", "#fff","#4dc6ff", "#ff430f"]
    shootingStarsContainer.id = "shootingStarsContainer";
    
    
    for(let i = 0; i < numOfShootingStars; i++) {
        const shootingStar = document.createElement("s");
        shootingStar.classList.add("shootingStar");
        
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = -100;
        let duration = Math.floor(Math.random() * 1 + 2);
        let delay = Math.random() * 3;
        let width = Math.floor(Math.random() * 150)
        if(width < 30) {
            let width = 50
        }
        let randomCol = col[Math.floor(Math.random() * col.length)];
        
        shootingStar.style.animationDuration = duration + "s";
        shootingStar.style.animationDelay = delay + "s";
        shootingStar.style.visibility = "visible";
        shootingStar.style.left = x + 100 + "px";
        shootingStar.style.top = y + "px";
        shootingStar.style.width = width + "px";
        shootingStar.style.backgroundColor = randomCol;

        shootingStarsContainer.appendChild(shootingStar);
    }

    document.body.appendChild(shootingStarsContainer);

    setTimeout(function() {
        document.body.removeChild(shootingStarsContainer);
    }, 5000); 
}