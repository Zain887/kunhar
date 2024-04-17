<script>
    import {handleGoogleTag} from '../../../utils.js';


    const info = [
        {
            image: '/images/landingPageImages/5.png',
            number: '01',
            name: '2D & 3D Animation',
        },
        {
            image: '/images/landingPageSection2images/6.jpg',
            number: '02',
            name: 'Audio Studio',
        },
        {
            image: 'images/landingPageImages/1.jpg',
            number: '03',
            name: `Camera's & Light's`,
        },
        {
            image: 'images/landingPageSection2images/2.jpeg',
            number: '04',
            name: 'Chroma Room',
        },
        {
            image: '/images/landingPageSection2images/1.jpg',
            number: '05',
            name: 'Dance Academy',
        },
        {
            image: '/images/landingPageSection2images/3.jpg',
            number: '06',
            name: 'Digital Marketing',
        },
        {
            image: '/images/landingPageSection2images/5.png',
            number: '07',
            name: 'Google Ads',
        },
        {
            image: '/images/landingPageSection2images/4.jpg',
            number: '08',
            name: 'Graphic Design',
        },
        {
            image: '/images/landingPageImages/3.jpg',
            number: '09',
            name: 'Infinity Studio',
        },
        {
            image: '/images/landingPageImages/4.jpg',
            number: '10',
            name: `Location Set's`,
        },
        {
            image: 'images/landingPageSection2images/7.jpg',
            number: '11',
            name: 'Video Editing',
        },
        {
            image: 'images/landingPageSection2images/8.jpg',
            number: '12',
            name: 'Web Development',
        },
    ];
    // const animate = [
    //     {
    //         gif: 'images/landingPage/videos/video1.mp4',
    //     },
    //     {
    //         gif: 'images/landingPage/videos/video2.mp4',
    //     },
    //     {
    //         gif: 'images/landingPage/videos/video3.mp4',
    //     },
    // ];
    // const socialInfo = [
    //     {
    //         type: 'twitter',
    //         icon: 'images/twiter.svg',
    //         name: '@OpusAIInc',
    //         link: 'https://twitter.com/OpusAIInc',
    //     },
    //     {
    //         type: 'linkedin',
    //         icon: 'images/linkedin.svg',
    //         name: '@OpusAI',
    //         link: 'https://www.linkedin.com/company/opusai',
    //     },
    //     {
    //         type: 'youtube',
    //         icon: 'images/youtube.svg',
    //         name: '@OpusAI',
    //         link: 'https://www.youtube.com/c/opusai',
    //     },
    // ];
</script>

<div class="main-div">
    <div class="heading-div">
        <h4>SERVICES</h4>
    </div>
    <div class="img-section">
        {#each info as data}
            <div class="img-div">
                <div class="img-css">
                    <img src={data.image} alt="" width="100%" height="100%" />
                </div>
                <div class="text-div">
                    <div class="number">
                        <p>{data.number}</p>
                    </div>
                    <div class="number">
                        <p>{data.name}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <div class="last-section">
        <div class="keep">
            <p>KEEP UP TO DATE</p>
        </div>
        <div style="display: flex;    margin-top: 2.778vh;">
            <div class="follow">
                <p>FOLLOW US</p>
            </div>
            <div class="community">
                <h4>
                    The latest from <br />
                    Kunhar Entertainment
                </h4>
            </div>
        </div>
        <!-- <div class="gif-div">
            {#each animate as data}
                <div class="gif-img">
                    <video width="100%" height="100%"  autoplay loop muted>
                        <source src= {data.gif} type="video/mp4">
                    </video>
                </div>
            {/each}
        </div>
        {#each socialInfo as info}
         <a href={info.link} target="_blank" on:click={()=>{
            handleGoogleTag(info.type + '_button', 'social', 'social');
         }} rel="noreferrer">
            <div class="social-div">
                <div class="icon">
                    <img src={info.icon} alt="" width="100%" height="100%" />
                </div>
                <div class="link">
                    <p>{info.name}</p>
                </div>
            </div>
        </a>
        {/each} -->
    </div>
</div>

<style>
    .main-div {
        position: relative;
        font-family: "Orbitron";
        display: flex;
        height: 100vh;
    }
    .img-section {
        background-color: #f4eeec;
        padding-top: 18.519vh;
        padding-left: 3.426vh;
        padding-right: 18.519vh;
        display: flex;
    }
    .img-div {
        position: relative;
        width: 54.444vh;
        height: 67.593vh;
        background-color: white;
        margin-right: 4.63vh;
        padding: 3.519vh 3.519vh 0vh;
        box-shadow: 0vh 0.37vh 2.963vh rgba(0, 0, 0, 0.25);
    }
    .img-div::after {
        content: "";
        position: absolute;
        width: 19.074vh;
        height: 10.4vh;
        background-color: inherit;
        left: 20vh;
        top: 71.112vh;
    }
    .img-css {
        height: 53.519vh;
        width: 100%;
        overflow: hidden;
    }
    .img-css::after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 0, 0, 0)(255, 255, 255);
    }
    .img-div:nth-child(1) .img-css img {
        transition: 0.75s ease;
        transform: scale(1.2) translate(3vh, 1vh);
        width: 89vh;
        height: auto;
    }
    .img-div:nth-child(1):hover .img-css img {
        transform: scale(1.05) translate(-28vh, -1vh);
    }
    .img-div:nth-child(2) .img-css img {
        transition: 0.75s ease;
        transform: scale(0.55) translate(-110vh, -43vh);
        width: auto;
        height: 100vh;
    }
    .img-div:nth-child(2):hover .img-css img {
        transform: scale(0.55) translate(-90vh, -43vh);
    }
    .img-div:nth-child(3) .img-css img {
        transition: 0.75s ease;
        transform: scale(0.58) translate(-64vh, -40vh);
        width: auto;
        height: 100vh;
    }
    .img-div:nth-child(3):hover .img-css img {
        transform: scale(0.8) translate(-96vh, -37vh);
    }
    .img-div:nth-child(4) .img-css img {
        transition: 0.75s ease;
        transform: scale(1) translate(-50vh, 0vh);
        width: 102vh;
        height: auto;
    }
    .img-div:nth-child(4):hover .img-css img {
        transform: scale(1.47) translate(13vh, 0vh);
    }
    .img-div:nth-child(5) .img-css img {
        transition: 0.75s ease;
        transform: scale(0.77) translate(-59vh, -20.5vh);
        width: 150vh;
        height: auto;
    }
    .img-div:nth-child(5):hover .img-css img {
        transform: scale(1.24) translate(-40.8vh, -20vh);
    }
    .img-div:nth-child(6) .img-css img {
        transition: 0.75s ease;
        transform: scale(1.69) translate(-15vh, 2vh);
        height: auto;
        width: 100vh;
    }
    .img-div:nth-child(6):hover .img-css img {
        transform: scale(1.02) translate(-26vh, 1vh);
    }
    .img-div:nth-child(7) .img-css img {
        transition: 0.75s ease;
        height: auto;
    }
    .img-div:nth-child(7):hover .img-css img {
        transform: scale(1.4) translate(-3vh, -3.5vh);
    }
    .img-div:nth-child(8) .img-css img {
        transition: 0.75s ease;
        transform: scale(0.61) translate(-68vh, -33vh);
        width: auto;
        height: 100vh;
    }
    .img-div:nth-child(8):hover .img-css img {
        transform: scale(0.61) translate(-108vh, -32.3vh);
    }
    .img-div:nth-child(9) .img-css img {
        transition: 0.75s ease;
        transform: scale(0.61) translate(-68vh, -33vh);
        width: auto;
        height: 100vh;
    }
    .img-div:nth-child(9):hover .img-css img {
        transform: scale(0.61) translate(-108vh, -32.3vh);
    }
    .img-div:nth-child(10) .img-css img {
        transition: 0.75s ease;
        transform: scale(0.61) translate(-68vh, -33vh);
        width: auto;
        height: 100vh;
    }
    .img-div:nth-child(10):hover .img-css img {
        transform: scale(0.61) translate(-108vh, -32.3vh);
    }
    .img-div:nth-child(11) .img-css img {
        transition: 0.75s ease;
        transform: scale(0.61) translate(-68vh, -33vh);
        width: auto;
        height: 100vh;
    }
    .img-div:nth-child(11):hover .img-css img {
        transform: scale(0.61) translate(-108vh, -32.3vh);
    }
    .img-div:nth-child(12) .img-css img {
        transition: 0.75s ease;
        transform: scale(0.61) translate(-68vh, -33vh);
        width: auto;
        height: 100vh;
    }
    .img-div:nth-child(12):hover .img-css img {
        transform: scale(0.61) translate(-108vh, -32.3vh);
    }
    .heading-div {
        background-color: black;
        width: 19.074vh;
        padding: 0vh 3.519vh;
    }
    .heading-div h4 {
        margin: 0;
        color: black;
        font-size: 9.259vh;
        font-weight: 900;
        line-height: 9.259vh;
        text-transform: capitalize;
        -webkit-text-stroke: 0.185vh #19bcbd;
        transform: rotate(-90deg);
        margin-top: 64vh;
    }
    .text-div {
        display: flex;
        justify-content: space-between;
        margin-top: 1.204vh;
    }
    p {
        margin: 0;
    }
    .number {
        font-size: 2.778vh;
        color: #000000;
    }
    .last-section {
        background-color: black;
        height:100vh;
        padding-left: 5.648vh;
        z-index: 8;
        position: relative;
    }
    .keep {
        width: 91.204vh;
        font-size: 1.111vh;
        color: white;
        margin-top: 18.519vh;
        text-transform: capitalize;
    }
    .follow {
        font-size: 1.111vh;
        color: white;
        margin-top: 5.111vh;
        margin-bottom: 1.8vh;
        text-transform: capitalize;
        transform: rotate(-90deg);
    }
    .community h4 {
        margin: 0;
        font-weight: 900;
        font-size: 5.556vh;
        line-height: 5.556vh;
        color: #ffffff;
        border: 0.093vh solid #000000;
    }
    /* .gif-div {
        padding-left: 5.833vh;
        display: flex;
        margin-top: 6.667vh;
        padding-bottom: 7.6vh;
    }
    .gif-img {
        width: 23.333vh;
        height: 23.333vh;
        margin-right: 3.611vh;
    }
    .social-div {
        margin-left: 5.833vh;
        padding: 1.759vh 0vh;
        width: 33.981vh;
        border-top: 0.093vh solid #fff;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .icon {
        width: 5.556vh;
    }
    .icon img {
        width: 2.778vh;
    }
    .link {
        font-size: 1.111vh;
        color: white;
        text-transform: capitalize;
    } */
</style>
