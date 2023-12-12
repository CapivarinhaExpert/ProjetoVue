<template>
    <nav class="navigation_navbar">
        <div class="box-logo">
            <img src="https://staticmania.com/images/logo.svg" alt="Logo">
            <h3>StaticMania</h3>
        </div>
        
        <div class="box-nav">
            <ul class="list-nav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/resources">Resources</router-link></li>
                <li><router-link id="especial-link" to="/chat">Let's chat</router-link></li>
            </ul>
        </div>
    </nav>
</template>


<script>
    export default {
        name:"NavegacaoVue",
        components:{

        }
    }
</script>


<style scoped>
@import url(https://db.onlinewebfonts.com/c/99501fdab737541e9315ceaf9229370f?family=Monument+Extended+Regular);
*{
    font-family: 'Monument Extended Regular';
    font-family: 16px;
    font-weight: 100;
}
.navigation_navbar{
    width: 80%;
    height: 71px;
    margin: 10px auto;
    background-color: #F5F9FB;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box-logo{
    display: flex;
    align-items: center;
    gap: 15px;
}
.box-logo img{
    height: 55px;
}


.list-nav{
    list-style: none;
    display: flex;

}
.list-nav li {
    margin-left: 15px;
}

.list-nav a {
    text-decoration: none;
    font-family: 'Monument Extended Regular', monospace;
    color: #000;
    font-size: 14px;
}
#especial-link{
    background: linear-gradient(118.49deg,#ee3094 17.88%,#ef846d 72.21%);
    padding: 16px 20px;
    border-radius: 10px;
    color: white;

}
</style>