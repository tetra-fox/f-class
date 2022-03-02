import VanillaTilt from "vanilla-tilt";

window.addEventListener("load", function () {
    VanillaTilt.init(
        Array.prototype.slice.call(document.querySelectorAll(".link")),
        {
            max: 15,
            reverse: true,
            scale: 1.1,
            speed: 500,
            transition: false,
            glare: true,
            "max-glare": 0.5
        }
    );
});
