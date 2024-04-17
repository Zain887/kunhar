<script></script>

<nav>
    <li class="mainlogo">
        <img src="/images/kunharLogo.svg" alt="kunharlogo">
        <img src="/images/kunharlogotext.svg" alt="kunharlogotext">
    </li>
    <li>
        <svg
            width="41"
            height="26"
            viewBox="0 0 41 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 2H39.5"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
            />
            <path
                d="M14 13H39.5"
                stroke="#19BCBD"
                stroke-width="3"
                stroke-linecap="round"
            />
            <path
                d="M5.5 24L39.5 24"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
            />
        </svg>
    </li>
</nav>

<style>
    nav{
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1vw 3vw;
        box-sizing: border-box;
    }
    li{
        cursor: pointer;
    }
    li img:nth-child(1){
        width: 5vh;
        height: auto;
    }
    li img:nth-child(2){
        width: 15vh;
        height: auto;
    }
    .mainlogo{
        display: flex;
        align-items: center;
    }
</style>
