<template>
    <div>
        <h1>{{ $t('index.title') }}</h1>
        <div>pos: {{x}}, {{y}}</div>
    </div>
    <nuxt-link to="/about" exact class="navbar-link">{{ $t('about.title') }}</nuxt-link>
   
</template>

<script setup>
const { x, y } = useMouse()
    
</script>

<style lang="scss" scoped>

</style>