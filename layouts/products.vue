<template>
    <div>
        <header>
            <nav>
                <h4>
                    <nuxt-link to="/">NuxtDRAKEN</nuxt-link>
                </h4>
            </nav>
        </header>
    </div>
    <div>
        <slot />
    </div>
    <footer>
        <center>
            &copy;2022 All right reserved
        </center>
    </footer>
</template>
<style scoped>
.router-link-active {
    color: #12b488;
    text-decoration: none;
}

.router-link-exact-active {
    color: #158668;
}
</style>