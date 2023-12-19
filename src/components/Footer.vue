<template>
    <footer>
        <div class="main-footer">
            <div class="logos">
                <a target="_blank" href="https://www.facebook.com/"><img src="../assets/facebook.png" alt="Facebook"></a>
                <a target="_blank" href="https://www.instagram.com/marco_antoniotk/"> <img src="../assets/instagram.png" alt="Instagram"></a>
                <a target="_blank" href="https://twitter.com/Marcor715"><img src="../assets/twitter.png" alt="Twitter"></a>
            </div>
            <div class="info-footer">
                <span>Info &bull; Suporte &bull; Marketing </span>
                <span>Teams of Use &bull; Privacy Policy</span>
                <span class="copy">&copy; 2023 AceCode</span>
            </div>
        </div>
    </footer>

</template>

<script>
    export default {
        name:'FooterVue'
    }


</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
  *{
    font-family: 'Kanit', sans-serif;
    box-sizing: border-box;
  }

    footer {
        background-image: url(../assets/img6.svg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        width: 100%;
        height: 300px;
        background-color:#051120 ;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 40px;
    }
    .logos{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .main-footer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info-footer{
        margin-top: 20px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

    }

    .copy{
        opacity: 0.3;
    }

</style>