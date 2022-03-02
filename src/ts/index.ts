import "../scss/style.scss";
import "./tilt.ts";
import Index from "../svelte/index.svelte";

const info = {
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

const index = new Index({
    target: document.body,
    props: {
        info,
        links
    }
});

export default index;
