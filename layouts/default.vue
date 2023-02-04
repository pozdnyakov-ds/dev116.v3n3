<template>
    <v-app>
        <Header />
        <v-main>
            <v-container fluid>
                <slot />
            </v-container>
        </v-main>
        <Footer />
    </v-app>
</template>

<script setup>
</script>

<style scoped>
.v-main {
    padding-left: 220px;
}
</style>