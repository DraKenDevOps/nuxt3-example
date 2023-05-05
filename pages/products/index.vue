<template>
    <div>
        <Head>
            <Title>Products</Title>
            <Meta name="description" content="product page" />
        </Head>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="(item, index) in products" :key="index">
                <product-card :product="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { environment } from "@/utils/environments";
definePageMeta({
    layout: "default",
});

const { data: products } = await useFetch(
    `${environment.API_BASE_URL}/products`
);
</script>

<style lang="scss" scoped></style>
