<template>
    <div>
        <nav>
            <ul id="menu">
                <li>
                    <router-link to="/home">Home/ </router-link>
                </li>
                <li>
                    <router-link to="/cine">Cine/ </router-link>
                </li>
                <li>
                    <router-link to="/musica">Musica/ </router-link>
                </li>
                <li>
                    <router-link to="/television">Television/ </router-link>
                </li>
                <li>
                    <router-link to="/ciclovida">CicloVida/ </router-link>
                </li>
                <li>
                    <router-link to="/juegosconmutados">Juegos Conmutados/ </router-link>
                </li>
                <li>
                    <router-link to="/directivas">Directivas/ </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>


export default {
    name: "Menu",
}
</script>

<style scoped>
    ul#menu li{
        display: inline
    }
</style>
