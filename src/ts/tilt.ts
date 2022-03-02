import VanillaTilt from "vanilla-tilt";

export default class Tilt {
    public static init = (querySelector: string) => {
        VanillaTilt.init(
            Array.prototype.slice.call(
                document.querySelectorAll(querySelector)
            ),
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
    };
}
