<template>
    <div class="card text-center">
        <img :src="product.image" :alt="product.title" class="thumb" />
        <p class="truncate my-3">{{ product.title }}</p>
        <nuxt-link :to="`/products/${product.id}`" class="btn">
            View Details
        </nuxt-link>
    </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
    max-height: auto;
    width: 70%;
    margin: 0 auto;
}
</style>
