<template>
    <div>
        <h1>Primer componente de VUE</h1>
        <h2>
            {{saludo}}
        </h2>
        <h2>
            Hola, {{nombre}}
        </h2>
        
    </div>
</template>


<script>


export default{
    //AQUI SE DECLARAN LAS ZONAS DEL COMPONENTE
  name: "HolaMundo",
  data() {
      return {
          saludo: "Mi primera variable en vue!",
          nombre: "Jose.A Vue!!"
      }
  }
}
</script>

<style scoped>
    /* h1{
        color: blueviolet;
    } */

    @import './../assets/css/estilosvue.css';
</style>
