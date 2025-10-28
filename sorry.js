$(document).ready(function () {
    alert("I suggest you please turn up the volume 🎵 and start the song before you open the message ❤️......trying to make it more romantic 🙂❤️....thank youuuuuu....i loveee youuuuu 💋❤️🌸 ");


    $("#reveal-button").click(function () {
        $(this).fadeOut(400, function () {
            $(".subtitle").fadeOut(0.1);

            $("#apology-msg").fadeIn(3000);
            $("#playSound").fadeOut(0.1);
        })
    });
    $("#playSound").click(function () {
        document.getElementById("myAudio").play();
    });
});

