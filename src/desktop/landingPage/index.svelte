<script>
    import { onMount } from "svelte";
    import { title } from "../../utils";
    import LandingPageSection1 from "./sections/landingPageSection1.svelte";
    import LandingPageSection2 from "./sections/landingPageSection2.svelte";
    title.set("Home");
    let animation;
    onMount(() => {
        setTimeout(() => {
            animation = true;
        }, 4500);
    });
    /* Increase z-index when navbar is open to make presale behind it */
    let showNavbar = false;
</script>

<div class="main-div">
    <div><LandingPageSection1 /></div>
    <div><LandingPageSection2 /></div>
</div>

<style>
    .main-div {
        display: flex;
    }
    ::-webkit-scrollbar {
        display: none;
    }
</style>
