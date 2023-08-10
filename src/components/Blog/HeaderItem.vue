<template>
    <li>
        <router-link :to="url" class="group flex items-center py-3">
            <span class="
                nav-indicator 
                mr-4 
                h-px w-8 
              bg-slate-400
                transition-all 
                group-hover:w-16 
              group-hover:bg-secundary_white 
                group-focus-visible:w-16 
              group-focus-visible:bg-secundary_white 
                motion-reduce:transition-none">
            </span>
            <span class="
                nav-text text-sm
                font-bold uppercase 
                tracking-widest text-slate-400
                group-hover:font-bold group-hover:text-text_white 
                group-focus-visible:font-bold" 
            > 
                {{ name }}
        </span>
        </router-link>
    </li>
</template>

<script>
export default {
    name: "HeaderItem",
    props: ['name','url'],
    methods: {
        encreaseElementSize() {
            console.log("isHover")
        },
        decreaseElementSize() {
            console.log("isNotHover")
        }
    }
}
</script>