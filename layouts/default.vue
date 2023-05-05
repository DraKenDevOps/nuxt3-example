<template>
    <div>
        <header class="shadow-md sticky top-0 z-10 w-full bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <h1 class="font-bold">
                    <nuxt-link to="/">NuxtDRAKEN</nuxt-link>
                </h1>
                <ul class="flex gap-4">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/products">Products</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                </ul>
            </nav>
        </header>
    </div>
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>