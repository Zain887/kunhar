<script>
    import pages from './horizontalPages';
    import {getContext} from 'svelte';
    const {url} = getContext('APP');

    /**
     *@param {Object} node - html node
     */
    function dragMe(node) {
        let moving = false;
        node.style.position = 'absolute';
        node.style.userSelect = 'none';
        node.addEventListener('wheel', (event) => {
            node.scrollBy(event.wheelDeltaY*-1, 0);
        });

        node.addEventListener('mousedown', () => {
            moving = true;
        });
        addEventListener('mousemove', (e) => {
            if (moving) {
                node.scrollBy(-e.movementX, 0);
            }
        });
        addEventListener('mouseup', () => {
            moving = false;
        });
    }
</script>

<section>
    <div class="main-div">
        <div class="child-div" use:dragMe>
            <svelte:component this={pages[$url.pathname]} />
        </div>
    </div>
</section>

<style>
    .main-div {
        z-index: 1;
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .child-div {
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        height: 100%;
        background-color: white;
    }
    .child-div::-webkit-scrollbar {
        display: none;
    }
</style>
