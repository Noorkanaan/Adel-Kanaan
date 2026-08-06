// ================= فتح الظرف =================
const cover = document.getElementById("cover");
const envScreen = document.getElementById("envScreen");
const letter = document.getElementById("letter");
const sealBtn = document.getElementById("sealBtn");

sealBtn.addEventListener("click", () => {

    sealBtn.classList.add("hide");

    setTimeout(() => {
        cover.classList.add("open");
    }, 250);

    setTimeout(() => {
        envScreen.classList.add("hide");
        letter.classList.add("show");
    }, 1700);

});

// ================= العداد التنازلي =================


// تاريخ الطلبة
const targetDate = new Date("2026-08-21T17:00:00").getTime();



function updateCountdown(){


    const now = new Date().getTime();


    let distance = targetDate - now;



    if(distance < 0){

        distance = 0;

    }



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );



    document.getElementById("cd-days").innerHTML = days;


    document.getElementById("cd-hours").innerHTML =
    String(hours).padStart(2,"0");


    document.getElementById("cd-mins").innerHTML =
    String(minutes).padStart(2,"0");


    document.getElementById("cd-secs").innerHTML =
    String(seconds).padStart(2,"0");



}



updateCountdown();


setInterval(updateCountdown,1000);