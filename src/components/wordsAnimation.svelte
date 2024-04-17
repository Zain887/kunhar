<script>
    import Letter from "./letterAnimation.svelte";
    const wordsList = [
        ["","","","","","","","K","U","N","H","A","R","","","","","","","",""],
        ["","","","","E","N","T","E","R","T","A","I","N","M","E","N","T","","","",""],
        ["","","","D","I","G","I","T","A","L","M","A","R","K","E","T","I","N","G","",""],
        ["","","W","E","B","D","E","V","E","L","O","P","M","E","N","T","","","","",""],    
        ["","","","","","G","O","O","G","L","E","A","D","S","","","","","","","",],
        ["","","","","","","V","I","D","E","O","E","D","I","T","I","N","G","","","",],
        ["","","","","","","","A","N","I","M","A","T","I","O","N","S","","","","","",],
        ["","","","","G","R","A","P","H","I","C","D","E","S","I","G","N","I","N","G","",],
        ["","","","","","A","U","D","I","O","S","T","U","D","I","O","","","","",""],
        ["","","","","","F","I","L","M","V","I","D","E","O","","","","","","",""],
        ["","","","D","A","N","C","E","A","C","A","D","E","M","Y","","","","","",""],
        ["C","A","M","E","R","A","S","","","","L","I","G","H","T","S","","","","",""],
        ["","","","","","L","O","C","A","T","I","O","N","S","E","T","S","","",""],
        ["P","O","S","T","P","R","O","D","U","C","T","I","O","N","E","D","I","T","I","N","G"],
        ["","","I","N","F","I","N","I","T","Y","","","","S","T","U","D","I","O","",""],
        ["","","","","","C","H","R","O","M","A","","R","O","O","M","","","","",""],
        ["","C","R","E","A","T","I","V","E","&","P","R","O","D","U","C","T","I","O","N",""],
        ["","","B","R","A","N","D","","","A","C","T","I","V","A","T","I","O","N","",""],
        ["","","","","","","","P","H","O","T","O","G","R","A","P","H","Y","","",""],
        ["","D","A","N","C","E","C","H","O","R","E","G","R","A","P","H","Y","","","",""],
    ];
    let i = 0;
    let currentWord = wordsList[i];
    let wordColor;
    
    function changeWord() {
        if (i < 19) {
            i++;
        } else {
            i = 0;
        }
        currentWord = wordsList[i];
        setTimeout(changeWord, 3000);
        
        const colors = [
            "rgba(255, 80, 118, 1)",
            "#DA22FF",
            "rgba(28, 123, 255, 1)",
            "rgba(50, 171, 171, 1)",
            "rgba(255, 153, 7, 1)"
        ];

        wordColor = colors[i % colors.length];
    }

    changeWord();
</script>

<div class="container">
    {#each currentWord as _, index}
        <div class="letter">
            <Letter letter={currentWord[index]} letterColor={wordColor} />
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        width: fit-content;
        height: inherit;
        transition: 1s;
        margin: auto;
    }
    .letter {
        position: relative;
        width: fit-content;
        height: inherit;
    }
</style>