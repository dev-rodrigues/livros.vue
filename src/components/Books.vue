<template>
    <div>
        <div>
            <h1>Books</h1>
            <div class="books">
                <div
                    v-for="(book, index) in allBooks"
                    class="book"
                    v-bind:key="index">
                    {{ book.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: "Books",
        methods: {
            ...mapActions(['fetchBooks'])
        },
        computed: mapGetters(['allBooks']),
        created() {
            this.fetchBooks();
        }
    }
</script>

<style scoped>
    .books {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
    }    
</style>