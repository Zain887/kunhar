<script>
    import WordsAnimation from "../../../components/wordsAnimation.svelte";
</script>

<div class="main-div">
    <p class="heading"><span>Our</span>Services</p>
    <div class="animated-word">
        <WordsAnimation />
    </div>
    <p class="tagline">
        360 Degrees of Entertainment Excellence <br> Kunhar Entertainments
    </p>
    <div class="image-holder">
        <div class="image-box">
            <img
                src="/images/landingPageImages/1.jpg"
                alt="cameraLights"
                width="100%"
                height="100%"
            />
        </div>
        <div class="image-box">
            <img
                src="/images/landingPageImages/2.jpg"
                alt="cameraLights"
                width="100%"
                height="100%"
            />
        </div>
        <div class="image-box">
            <img
                src="/images/landingPageImages/3.jpg"
                alt="cameraLights"
                width="100%"
                height="100%"
            />
        </div>
        <div class="image-box">
            <img
                src="/images/landingPageImages/4.jpg"
                alt="cameraLights"
                width="100%"
                height="100%"
            />
        </div>
        <div class="image-box">
            <img
                src="/images/landingPageImages/5.png"
                alt="cameraLights"
                width="100%"
                height="100%"
            />
        </div>
    </div>
</div>

<style>
    .main-div {
        width: 65vw;
        height: 100vh;
        font-family: "Orbitron";
        background-color: black;
        overflow: hidden;
        position: relative;
        padding: 0 5vw;
        padding-top: 5vw;
    }
    .animated-word {
        display: flex;
        justify-content: center;
        height: 7.037vh;
    }
    .heading {
        color: #19bcbd;
        font-weight: bold;
        font-size: 5vh;
    }
    span {
        color: white;
    }
    .tagline {
        color: white;
        font-size: 5vh;
        text-align: center;
        font-weight: bolder;
    }
    .image-holder {
        display: flex;
        margin: 5vw 0;
    }
    .image-box {
        width: 15vw;
        overflow: hidden;
        height: auto;
        border-radius: 0.5vh;
        box-shadow: 0px 0px 1.5vh #19bcbd;
        cursor: pointer;
        position: relative;
    }
    .image-box:hover {
        transform: scale(1.6);
        transition-duration: 0.5s;
        position: relative;
        z-index: 1;
    }
    .image-box:nth-child(odd) {
        transform: translateY(8vh);
    }
    .image-box:nth-child(odd):hover {
        transform: scale(1.6);
        transition-duration: 0.5s;
        position: relative;
        z-index: 1;
    }
    .image-box:nth-child(1)::after {
        content: "Camera's Light";
        color: #19bcbd;
        font-weight: bold;
        position: absolute;
        width: 100%;
        text-align: center;
        left: 0;
        font-size: 1.5vh;
        backdrop-filter: blur(15px);
        bottom: 50vh;
        transition-duration: .5s;
        padding:1vh;
        box-sizing:border-box;
    }
    .image-box:nth-child(1):hover::after {
        bottom: 0;
    }
    .image-box:nth-child(2)::after {
        content: "Choroma Room";
        color: #19bcbd;
        font-weight: bold;
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 50vh;
        left: 0;
        font-size: 1.5vh;
        backdrop-filter: blur(15px);
        transition-duration: .5s;
        padding:1vh;
        box-sizing:border-box;
    }
    .image-box:nth-child(2):hover::after {
        bottom: 0;
    }
    .image-box:nth-child(3)::after {
        content: "Infinity Studio";
        color: #19bcbd;
        font-weight: bold;
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 50vh;
        left: 0;
        font-size: 1.5vh;
        backdrop-filter: blur(15px);
        transition-duration: .5s;
        padding:1vh;
        box-sizing:border-box;
    }
    .image-box:nth-child(3):hover::after {
        bottom: 0;
    }
    .image-box:nth-child(4)::after {
        content: "Location Sets";
        color: #19bcbd;
        font-weight: bold;
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 50vh;
        left: 0;
        font-size: 1.5vh;
        backdrop-filter: blur(15px);
        transition-duration: .5s;
        padding:1vh;
        box-sizing:border-box;
    }
    .image-box:nth-child(4):hover::after {
        bottom: 0;
    }
    .image-box:nth-child(5)::after {
        content: "3D Animations";
        color: #19bcbd;
        font-weight: bold;
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 50vh;
        left: 0;
        font-size: 1.5vh;
        backdrop-filter: blur(15px);
        transition-duration: .5s;
        padding:1vh;
        box-sizing:border-box;
    }
    .image-box:nth-child(5):hover::after {
        bottom: 0;
    }
</style>
