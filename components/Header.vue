<template>
    <div>
        <v-app-bar color="#eee" density="compact"
    >
        <v-app-bar-nav-icon icon="mdi-view-list" @click="drawer = !drawer"></v-app-bar-nav-icon>
        
        <v-toolbar-title style="width: 300px;">
            <nuxt-link to="/">
                <img src="/img/logo.png" alt="Dev116 Logo" style="width: 150px; margin: 8px 0 0 0;">
            </nuxt-link>
        </v-toolbar-title>

        <v-icon>mdi mdi-star-outline</v-icon>

        <v-btn icon>
            <v-icon>mdi-account</v-icon>
        </v-btn>
     
        <template v-if="$i18n.locale=='en'" v-slot:append>
            <v-btn @click="$i18n.locale='ru'">{{ $i18n.locale }}</v-btn>
        </template>
        <template v-else v-slot:append>
            <v-btn @click="$i18n.locale='en'">{{ $i18n.locale }}</v-btn>
        </template>
        
        </v-app-bar>

        <v-navigation-drawer app left absolute temporary 
            v-model="drawer" style="width: 200px;">

            <v-list-item style="min-height: 36px;">
                <nuxt-link to="/" exact class="navbar-link">{{ $t('index.title') }}</nuxt-link>
            </v-list-item>

            <v-list-item style="min-height: 36px;">
                <nuxt-link to="/about" exact class="navbar-link">{{ $t('about.title') }}</nuxt-link>
            </v-list-item>

        </v-navigation-drawer>

    </div>
</template>

<script setup>
let drawer = ref(false)

</script>

<style lang="scss" scoped>
.navbar-link {
    color: #333;
    text-decoration: none;
}
</style>