<script lang="ts">
    export let info: Info;
    export let links: Link[];
</script>

<svelte:head>
    <link rel="shortcut icon" href="../img/profile.png" type="image/x-icon" />
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
