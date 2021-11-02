<template>
    <div>
        <h1>Juegos Conmutados</h1>
        <ul>
            <li v-for="juego in juegos" :key="juego" >
                {{juego | mayusculas}}
                {{juego | mayusculasParametro("Parametro")}}
            </li>
        </ul>
        <hr/>
         <ul> <!--El atributo v-html hace que span se transforme en un span
            y la pagina no lo lea de forma literal -->
            <li v-for="j in juegosRojos" :key="j" v-html="j">
                {{j}}
            </li>
        </ul>
        
    </div>
</template>

<script>


export default {
  name: "JuegosConmutados",
  filters:{
      mayusculas(dato){
          return dato.toUpperCase();
      },
      mayusculasParametro(dato, parametro){
          return dato.toUpperCase()+parametro;
      }
  },
  computed: {
      juegosRojos(){
          var datos = this.juegos;
          for(var i = 0; i < datos.length; i++){
              var juego = datos[i];
              juego = "<span style='color:red'>"+
              juego +  "</span>";
              datos[i] = juego;
          }
          return datos;
      }
  },
  data() {
      return {
          juegos: ["Parchis", "Luz roja, luz verde",
          "La cuerda", "Las canicas", "Las galletas"]
      }
  }
}
</script>
