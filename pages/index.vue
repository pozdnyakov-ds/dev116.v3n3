<template>
    <div>
        <h1>{{ $t('index.title') }}</h1>
        <div>pos: {{x}}, {{y}}</div>
    </div>
</template>

<script setup>
    const { x, y } = useMouse()
</script>

<style lang="scss" scoped>

</style>