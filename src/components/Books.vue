<template>
    <div id="nav">
        <router-link to="/create">NEW</router-link>
    </div>
    <div class="root">
        <div class="container">
            <div class="books">
                <h1>Books</h1>
                    <div                    
                        @dblclick="handleDbClick(book)"
                        v-for="(book) in allBooks"
                        class="book"
                        :key="book.id"
                        v-bind:class="{'read':book.read}"
                        >

                        {{ book.title }}

                        <div id="operation">
                            <i class="fa fa-trash-alt" v-on:click="deleteBook(book)"></i>
                            <i class="fa fa-paint-brush" v-on:click="editBook(book)"></i>
                        </div>
                        
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
                const updated = {
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    language: book.language,
                    genre: book.selected,
                    read: !book.read
                }
                this.updateBook(updated);
            },
            editBook(book) {
                this.$router.push({
                    path: `/edit/${book.id}`,                                    
                });
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
        text-align: center;

        margin-bottom: 50px;
    }

    .book {
        border: 1px solid #ccc;            
        background: var(--completed);
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;

        margin: 0 20px;
        width: 950px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }

    @media (max-width: 990px) {
        .book {
            width: 400px;
            height: 60px;      
            align-items: center;
        }
    }

    .book:hover {
        transform: translateX(10px);
        transition: transform 0.2s;
    }

    .read {
        background: var(--allowed)
    }

    .alert {
        font-size: 30px;
        color: var(--denial);
    }
</style>