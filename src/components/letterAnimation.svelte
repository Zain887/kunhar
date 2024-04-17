<script>
    import {onMount} from 'svelte';
    export let letterColor = 'aqua';
    export let letter = '';
    let currentAlphabet = '';
    let alphabetsContainer;
    let fontSize;
    let viewPort;
    let OriginalTopOffset;
    let topOffset;
    let leftOffset;
    let offsetHeight;
    const alphabetDivs = new Array(26).fill(false);
    let mounted = false;
    let alphabetSize;
    let containerWidth = '0px';
    let alphabetWidth;
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    onMount(()=>{
        offsetHeight = viewPort.offsetHeight;
        fontSize = offsetHeight * 1.3;
        OriginalTopOffset = offsetHeight * -0.36;
        topOffset = OriginalTopOffset;
        leftOffset = offsetHeight * 0.0;
        setTimeout(()=>mounted=true, 1000);
    },
    );
    /**
     *
     * @param {string} letter - letter whose position to be calculated
     *
    **/
    function calculateNewPosition(letter) {
        currentAlphabet = letter;
        let indexOfAlphabet = alphabets.indexOf(currentAlphabet);
        if (indexOfAlphabet<0) {
            indexOfAlphabet = Math.floor(Math.random() * 26);
        }
        const currentAlphabetDiv = alphabetDivs[indexOfAlphabet];
        topOffset = -1 * currentAlphabetDiv.offsetTop + OriginalTopOffset;

        setTimeout(calculateWidth, 100);
    }
    /** updates the width of the container */
    function calculateWidth() {
        containerWidth = getComputedStyle(alphabetWidth).width;
    }
    $: if (mounted) calculateNewPosition(letter);
</script>

<div class="container" style = "
            --font-size: {fontSize}px; 
            --top-offset: {topOffset}px; 
            --left-offset: {leftOffset}px;
            --container-width: {containerWidth};
            --font-color: {letterColor};
        ">
    <div 
        class="window" 
        bind:this={viewPort} 
        
    >
        <div class="alphabets-container" bind:this={alphabetsContainer}>
            {#each alphabets as alphabet, i (i)}
            
            <div class="letter" bind:this={alphabetDivs[i]} >
                {alphabet}
            </div>
                
            {/each}
        </div>
        <div class="alphabet-size" bind:this={alphabetSize}>
            {currentAlphabet}
        </div>
    </div>
        <div class="alphabet-width" bind:this={alphabetWidth}>
            {currentAlphabet}
        </div>
</div>


<style>
    .letter {
        font-weight: 900;
        font-size: var(--font-size);
        background-color: transparent;
        height: inherit;
        color: var(--font-color);
        transition: color 1s;
    }

    .alphabet-size {
        z-index: 0;
        font-size: var(--font-size);
        height: inherit;
        position: relative;
        top: var(--top-offset);
        left: var(--left-offset);
        opacity: 0;
    }

    .alphabets-container {
        z-index: 2;
        position: absolute;
        top: var(--top-offset);
        left: var(--left-offset);
        transition-duration: 1.7s;
        transition-timing-function: cubic-bezier(.16,.7,0,1);
    }
    .window {
        overflow: hidden;
        height: inherit;
        width: var(--container-width);
        position: absolute;
        color: white;
    }
    .container {
        height: inherit;
        width: var(--container-width);
        font-family: "Orbitron";
        position: relative;
        background-color: transparent;
        transition: all 1s; /* controls width */
    }
    .alphabet-width {
        opacity: 0;
        position: fixed;
        z-index: 100;
        font-size: var(--font-size);
    }
</style>