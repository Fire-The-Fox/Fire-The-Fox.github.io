const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const names = [".fa-code", ".fa-terminal", ".fa-firefox-browser", ".fa-music", ".fa-paint-brush", ".fa-fire-alt", ".fa-discord"];
const texts = ["jani@arch:~$ Py, C, Crystal",
"jani@arch:~$ IDK",
"jani@arch:~$ FireFoks",
"jani@arch:~$ FireTheFox#1081"];

function updateTime() {

    let serverTime = new Date();
    $('#time').html(`${weekday[serverTime.getDay()]} ${serverTime.getHours()}:${serverTime.getMinutes()}`);
}

$(function() {
    updateTime();
    setInterval(updateTime, 1000);
});
$(window).ready(() => {
    names.forEach((btn, i) => {
        $(btn).click(() => {
            const tmp_names = names.filter(function (button) {
                return button != names[i];
            })
            tmp_names.forEach((tmp) => {
                $(tmp).css("background-color", "rgba(0, 0, 0, 0.88)")
                $(tmp).css("margin-top", "2px");
                $(tmp).css("padding-top", "0");
            })
            $(btn).css("background-color", "rgba(38, 45, 55, 0.88)");
            $(btn).css("margin-top", "0");
            $(btn).css("padding-top", "2px");
            if (btn == ".fa-code") {
                $(".terminal").text(texts[0]);
                $(".terminal").css("visibility", "visible");
            }
            else if (btn == ".fa-terminal") {
                $(".terminal").text(texts[1]);
                $(".terminal").css("visibility", "visible");
            }
            else if (btn == ".fa-firefox-browser") {
                $(".terminal").text(texts[2]);
                $(".terminal").css("visibility", "visible");
            }
            else if (btn == ".fa-discord") {
                $(".terminal").text(texts[3]);
                $(".terminal").css("visibility", "visible");
            }
            else {
                $(".terminal").text("");
                $(".terminal").css("visibility", "hidden");
            }
        })
    })
})