window.onload = function () {

    // Loader
    const loader = document.getElementById("loader");
    const hero = document.getElementById("hero");

    setTimeout(() => {
        loader.style.display = "none";
        hero.style.display = "flex";
        document.body.style.overflow = "auto";
    }, 3000);

    // Begin button
    const beginBtn = document.getElementById("beginBtn");
    if (beginBtn) {
        beginBtn.addEventListener("click", () => {
            document.getElementById("intro").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Next chapter buttons
    document.querySelectorAll(".nextBtn").forEach(button => {

        button.addEventListener("click", () => {

            const next = document.getElementById(button.dataset.next);

            if (next) {
                next.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

    // Final surprise

 const endingBtn = document.getElementById("endingBtn");

if (endingBtn) {

    endingBtn.addEventListener("click", () => {

        document.getElementById("finalScene").scrollIntoView({
            behavior: "smooth"
        });

        // Play music
        const music = document.getElementById("bgMusic");

        if (music) {
            music.currentTime = 0;
            music.play();
        }
        // Get all message lines
        const lines = document.querySelectorAll(".finalLine");

        lines.forEach(line => line.classList.remove("show"));

        // Show one line every 2 seconds
        lines.forEach((line, index) => {

            setTimeout(() => {

                line.classList.add("show");

            }, index * 2000);

        });

        // Fireworks after all lines appear
        setTimeout(() => {

            // Grand Finale
            for(let i = 0; i < 12; i++){

                setTimeout(() => {

                    launchFirework();

                }, i * 250);

            }

            // Keep fireworks going
            setInterval(launchFirework,1500);

            // Hearts
            setInterval(createHeart,500);

        }, lines.length * 2000);
        
        const restartBtn = document.getElementById("restartBtn");

restartBtn.style.display = "inline-block";

    });
}

    // Fade-in stories
    const stories = document.querySelectorAll(".story");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, { threshold: 0.2 });

    stories.forEach(story => observer.observe(story));

};
// ===============================
// FIREWORKS
// ===============================

function launchFirework(){

    const container=document.getElementById("fireworks");

    const colors=[
        "#FFD700",
        "#FF69B4",
        "#87CEEB",
        "#FFFFFF",
        "#FF4D6D",
        "#C77DFF"
    ];

    const x=Math.random()*window.innerWidth;
    const y=Math.random()*window.innerHeight*0.6;

    for(let i=0;i<50;i++){

        const spark=document.createElement("div");

        spark.className="firework";

        spark.style.left=x+"px";
        spark.style.top=y+"px";

        spark.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        const angle=Math.random()*Math.PI*2;

        const distance=80+Math.random()*120;

        spark.style.setProperty("--x",
        Math.cos(angle)*distance+"px");

        spark.style.setProperty("--y",
        Math.sin(angle)*distance+"px");

        container.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },1500);

    }

}

// ===============================
// HEARTS
// ===============================

function createHeart(){

    const hearts=document.getElementById("hearts");

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

// ===============================
// FINAL BUTTON
// ===============================

const endingBtn = document.getElementById("endingBtn");

if (endingBtn) {

    endingBtn.addEventListener("click", () => {

        document.getElementById("finalScene").scrollIntoView({
            behavior: "smooth"
        });

        const music = document.getElementById("bgMusic");

        if (music) {
            music.currentTime = 0;
            music.play();
        }

        // Your fireworks and hearts code...

    });

}

// ===============================
// RESTART BUTTON
// ===============================

const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {

    // Go back to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Hide final section
    document.getElementById("finalSurprise").style.display = "none";

    // Hide restart button again
    restartBtn.style.display = "none";

    // Reset chapter index
    currentChapter = 0;

    // Show first chapter again
    document.getElementById("chapter1").style.display = "block";
});
