<template>
    <Head>
        <Title class="truncate">Products | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
    </Head>
    <product-detail :product="product" />
</template>

<script setup>
import { environment } from "~~/utils/environments";

const { id } = useRoute().params;
const uri = `${environment.API_BASE_URL}/products/${id}`;

const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Product not founded",
        fatal: true,
    });
}

definePageMeta({
    layout: "default",
});
</script>

<style lang="scss" scoped></style>
