document.querySelector("#next").addEventListener("click", function () {
    window.location.href = "./atributes.html";
})
document.querySelector("#next-controll").addEventListener("click", function () {
    window.location.href = "./atributes.html";
})

var counter = 0;
document.querySelector("#burger").addEventListener("click", function () {
    if (counter == 0) {
        document.querySelector(".navbar").style.animation = "0.5s ease-in-out 1 show";
        document.querySelector(".navbar").style.transform = "translate(0)";
        counter = 1;
    } else if (counter == 1) {
        document.querySelector(".navbar").style.animation = "0.5s ease-in-out hide";
        document.querySelector(".navbar").style.transform = "translate(-100%)";
        counter = 0;
    }
})