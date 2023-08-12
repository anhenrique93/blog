<template>
    <div>
        <div class="
            p-2 flex 
            flex-col
            space-y-4
            sm:flex-col sm:space-y-4 
            md:flex-col md:space-y-4
            lg:flex-row
            xl:flex-row
            2xl:flex-row 
            space-x-4 
            text-text_white
            rounded
            hover:opacity-50 hover:bg-hover_dark
            ">
            <div class="flex justify-center items-center md:items-start">
                <a>
                    <img 
                        class="max-w-xs max-w-sm max-w-md max-w-lg max-w-xl max-w-2xl mt-3 w-full cursor-pointer rounded border-2 border-slate-200/10 transition 
                        group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 
                        sm:translate-y-1" src="https://img.freepik.com/premium-photo/wooden-cubes-with-word-example_284815-518.jpg">
                </a>
            </div>
            <div class="flex flex-col space-y-1">
                <a>
                    <div class="flex flex-col space-y-1 cursor-pointer">
                        <h3 class="inline-flex items-baseline font-medium leading-tight">TITLE</h3>
                        <span class="mt-2 text-sm leading-normal">17/07/2023</span>
                        <p> 
                            Web app for visualizing personalized Spotify data. View your top artists, top tracks, 
                            recently played tracks, and detailed audio information about each track. 
                            Create and save new playlists of recommended tracks based on your existing playlists and more.
                        </p>
                    </div>
                </a>
                <div>
                    <ul class="flex flex-row space-x-2">
                        <li class="cursor-pointer">
                            <a>tag1</a> 
                        </li>
                        <span class="font-bold">.</span>
                        <li class="cursor-pointer">
                            <a>tag2</a>
                        </li>
                        <span class="font-bold">.</span>
                        <li class="cursor-pointer">
                            <a>tag3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectResume"
}
</script>