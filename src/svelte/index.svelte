<script>
    export let info;
    export let links;
    import profileimg from "../img/profile.png";
</script>

<svelte:head>
    <link rel="shortcut icon" href="{profileimg}" type="image/x-icon">
    <title>{info.name}</title>
</svelte:head>

<div id="container">
    <div id="profile" />
    <span id="con">{info.name} @ {info.con}</span>
    {#each links as link}
        <a href={link.url} class="link">
            {link.name}
        </a>
    {/each}
</div>
