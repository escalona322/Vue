<template>
    <div>
        <h1>Ejemplo Ciclo de Vida hooks</h1>
        <h2 style="color:blue">{{saludo}}</h2>
        <button @click="cambiarSaludo()"> 
            Cambiar saludo
        </button>
    </div>
</template>

<script>


export default {
   name: "CicloVida",
   methods: {
       //AQUI VAN TODOS LOS METODOS DE LA PAGINA
       cambiarSaludo() {
           this.saludo="He cambiado";
       } 
   },
   data() {
       return {
           saludo: "Hola Hooks!!!",
       }
   }, mounted(){
       console.log("Componente montado");
     
   },created(){
       console.log("Componente creado")
   },destroyed(){
       console.log("Componente eliminado")
   },updated(){
       console.log("Componente modificado en template")
   }
}
</script>
