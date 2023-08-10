<template>
    <div class="bg-black w-44 h-44 p-2 overflow-hidden rounded-full border border-white">
        <img :src="imageSrc" alt="Foto de perfil" class="w-full h-full object-cover mt-2">
    </div>
</template>

<script>
export default {
    name: 'PerfilImage',
    props: ["imageSrc"],
    data() {
        return {
            description: "Foto de Perfil"
        }   
    }
}
</script>