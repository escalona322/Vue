<template>    
    <div>
        <h1>Directivas</h1>
        <ul>
            <li v-for="pelicula in peliculas" :key="pelicula">
                {{pelicula}}
            </li>
        </ul>
        <label for="">Introduzca un numero</label>
        <input type="number" v-model="numero"/> <hr/>
        <h3 v-if="numero > 0" style="color:green">
            Positivo
        </h3>
        <h3 style="color:blue" v-else-if="numero == 0">
            Cero
        </h3>
        <h3 style="color:red" v-else>
            Negativo
        </h3>
        <label for="">Nombre</label>
        <input type="text" v-model="nombre"/> <br/>
        <label for="">Edad</label>
        <input type="text" v-model="edad"/> <br/>
        <hr/>
        <h1>{{nombre}}{{edad}}</h1>
        <h1>
            {{$data}}
        </h1>
    </div>   
</template>

<script>


export default {
    name: "Directivas", 
    data () {
        return  {nombre: "",
                edad: 0,
                numero: 0,
                peliculas: ["Spiderman", "Superman", "Avengers",
                "Piratas del caribe"],
        }
    }
}
</script>
