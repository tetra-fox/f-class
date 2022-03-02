import "../scss/style.scss";
import "./tilt.ts";
import App from "../svelte/App.svelte";

const info: Info = {
    name: "tetra",
    con: "FWA"
};

const links: Link[] = [
    {
        name: "Twitter",
        url: "https://twitter.com/etra_t"
    },
    {
        name: "Telegram",
        url: "https://t.me/realign"
    },
    {
        name: "Soundcloud",
        url: "https://soundcloud.com/tetramsic"
    },
    {
        name: "Mixcloud",
        url: "https://www.mixcloud.com/tetrafox/"
    },
    {
        name: "Spotify",
        url: "https://open.spotify.com/artist/3BCEPJ0GHgaZzCD5cSTEjv?si=dJ1j7bvHQUuhwQbj9nd61Q"
    }
];

const app = new App({
    target: document.body,
    props: {
        info,
        links
    }
});

export default app;
