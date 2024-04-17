<script>
    import horizontalPages from "./horizontalPages";
    import { getContext } from "svelte";
    import HorizontalIndex from "./horizontalIndex.svelte";
    import Navbar from "../components/navbar.svelte";

    const { url } = getContext("APP");
</script>

<section>
    <div class="main-div">
        <Navbar/>
        {#if horizontalPages[$url.pathname]}
            <HorizontalIndex />
        {/if}
    </div>
</section>

<style>
    .main-div {
        z-index: 1;
        width: 100%;
        height: 100%;
    }
</style>
