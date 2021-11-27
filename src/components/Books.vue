<template>
    <div>
        <div>
            <h1>Books</h1>
            <div class="books">
                <div
                    @dblclick="handleDbClick(book)"
                    v-for="(book) in allBooks"
                    class="book"
                    :key="book.id"
                    v-bind:class="{'read':book.read}"
                    >
                    {{ book.title }}

                    <i 
                        class="fa fa-trash-alt"
                        v-on:click="deleteBook(book)"></i>
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
            ...mapActions([
                'fetchBooks',
                'deleteBook',
                'updateBook'
            ]),
            handleDbClick(book) {
                console.log('executando atualizacao de leitura do livro', book);
                const updated = {
                    id: book.id,
                    author: book.author,
                    country: book.country,
                    language: book.language,      
                    pages: book.pages,
                    title: book.title,
                    year: book.year,
                    read: !book.read
                }

                this.updateBook(updated);
            }
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

    .book {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;

        margin: 0 20px;
    }

    .read {
        color: #fff;
        background: #35495e;
    }
</style>