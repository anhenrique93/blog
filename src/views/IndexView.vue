<template>
    <div class="bg-primary_dark">
        <div class="grid grid-cols-5 grid-rows-5 mx-auto 
            min-h-screen max-w-screen-xl 
            px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <!-- HEADER LEFT-SIDE -->
            <div class="row-span-5"> <!-- paddingNormal: 32 -->
                <HeaderBlog />
            </div>
            <!-- CONTENT -->
            <div class="col-span-3 row-span-5 bg-red-500">
                <RouterView />
            </div>
            <!-- HEADER RIGHT-SIDE -->
            <div class="col-start-5 row-span-5 p-3">
                <HeaderRight/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBlog from '../components/Blog/HeaderBlog.vue';
import HeaderRight from '../components/Blog/HeaderRight.vue';

export default {
    name: 'IndexView',
    components: {
        HeaderBlog,
        HeaderRight
    }
}
</script>