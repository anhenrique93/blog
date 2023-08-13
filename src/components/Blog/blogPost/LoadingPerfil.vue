<template>
  <div>
    <div
      class="mb-5 cursor-pointer animate-pulse p-5 flex flex-col space-y-4 sm:flex-col sm:space-y-4 md:flex-col md:space-y-4 lg:flex-row xl:flex-row 2xl:flex-row space-x-4 text-text_white rounded hover:opacity-50 hover:bg-hover_dark"
    >
      <div
        class="w-full sm:full md:1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex justify-center items-center md:items-start"
      >
        <div
          class="mt-3 rounded-full bg-slate-700 w-28 h-28 sm:order-1 sm:col-span-2 sm:translate-y-1"
        ></div>
      </div>
      <div class="flex flex-col space-y-1 pt-5">
        <div>
          <div class="flex flex-col space-y-1">
            <!-- TITLE(EN) -->
            <div class="h-2 bg-slate-700 rounded w-16"></div>
            <div class="mt-2 h-2 w-12 bg-slate-700 rounded"></div>
            <!-- excerpt(EN) -->
            <div class="mt-2 h-2 w-32 sm:w-80 bg-slate-700 rounded"></div>
            <div class="mt-2 h-2 w-24 sm:w-96 bg-slate-700 rounded"></div>
            <div class="mt-2 h-2 w-24 sm:w-64 bg-slate-700 rounded"></div>
          </div>
        </div>
        <div class="font-extrabold flex flex-row space-x-2">
          <div class="mt-2 h-2 w-12 bg-slate-700 rounded"></div>
          <div class="mt-2 h-2 w-12 bg-slate-700 rounded"></div>
          <div class="mt-2 h-2 w-12 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingResume'
}
</script>
