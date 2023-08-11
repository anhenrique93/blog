<template>
    <div class="
        overflow-hidden 
        bg-black 
        w-32 h-32
        sm:w-32 sm:h-32
        md:w-32 md:h-32
        lg:w-32 lg:h-32
        p-2 
        rounded-full 
        border">
        <img :src="imageSrc" alt="Foto de perfil" class="w-full h-full object-cover mt-2">
    </div>
</template>

<script>
export default {
    name: "PerfilImage",
    props: ['imageSrc']
}
</script>