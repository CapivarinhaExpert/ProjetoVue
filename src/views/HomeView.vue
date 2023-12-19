<template>

<main>
  <header>
    <div class="container-h1">
      <h1 >Mensagem, <br> da Mensagem  <br> Mensagem</h1>
    </div>
    <img id="imagem-header" src="https://www.kbrtec.com.br/landing-pages/images/criacao-sites-sao-paulo.png" alt="imagem-header">
  </header>
  <div class="box-variedades">
      <div class="variedade1 variedades"> <img src="https://cdn-icons-png.flaticon.com/128/276/276130.png" alt=""></div>
      <div class="variedade2 variedades"><img src="https://cdn-icons-png.flaticon.com/128/276/276122.png" alt=""></div>
      <div class="variedade3 variedades"><img src="https://cdn-icons-png.flaticon.com/128/13370/13370080.png" alt=""></div>
      <div class="variedade4 variedades"> <img src="https://cdn-icons-png.flaticon.com/128/276/276116.png" alt=""></div>
  </div>
</main>

<FooterVue></FooterVue>
</template>

<script>
// @ is an alias to /src
  import FooterVue from "@/components/Footer.vue"

export default {
  name: 'HomeView',
  components:{
    FooterVue
  },
  data(){
    return{
      nome:"Marco"
    }
  }

}
</script>


<style scoped>

@import url(https://db.onlinewebfonts.com/c/99501fdab737541e9315ceaf9229370f?family=Monument+Extended+Regular);

*{
  font-family: 'Monument Extended Regular', monospace;
}
    main{
      width: 80%;
      margin: 0% auto;

    }


    header{
      display: flex;
      background-color: #caeaf9;
      border-radius:15px ;
      margin-bottom: 10px;
    }

    .container-h1{
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .container-h1 h1 {
      font-size: 3em;
      font-weight: 100;
    }


    #imagem-header{
    
      width: 50%;
      transform: skewY(15deg);

    }


    .box-variedades {
      border-radius: 15px;
      margin-bottom: 10px;
      padding: 10px;
      width: 100%;
      
      display: flex;
      justify-content: space-around;
    }

    .variedades {
      height: 100px;
      width: 24%;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s;
      
    }

    .variedades:hover {
      cursor: pointer;
        transform: scale(1.03);
    }

    .variedades img {
      width: 30%;
    }


    /*#caeaf9 */
    .variedade1 {
      background-color: #58bdec;
    }

    .variedade2 {
      background-color: #58ecac;
    }

    .variedade3 {
      background-color: #5979ec;
    }


    .variedade4 {
      background-color: #0097b5;
    }


</style>
