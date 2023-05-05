<template>
    <div class="grid lg:grid-cols-2 gap-10 md:grid-cols-1 sm:grid-cols-1">
        <div class="p-7">
            <img :src="product.image" :alt="product.title" />
        </div>
        <div class="p-7">
            <h1 class="text-2xl my-6">{{ product.title }}</h1>
            <p class="text-xl my-6">Price - ${{ product.price }}</p>
            <h3 class="font-bold border-b-2 mb-4 pb-2">Description</h3>
            <p>{{ product.description }}</p>
            <h3 class="mt-2">Category: <b class="capitalize">{{ product.category }}</b></h3>
        </div>
    </div>
</template>
<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
img {
    max-height: auto;
    width: 40%;
    margin: 0 auto;
}
</style>