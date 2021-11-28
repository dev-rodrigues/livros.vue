<template>
    <Cancel />
</template>

<script>
    import Cancel from '../components/Cancel.vue';

    export default {
        name: 'EditBook',
        components: {
            Cancel
        },
        created() {
            const router = this.$route.params.id 
            console.log(router);
        }
    }
</script>

<style scoped>
</style>