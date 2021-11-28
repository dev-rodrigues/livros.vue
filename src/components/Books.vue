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
        text-align: center;

        margin-bottom: 50px;
    }

    .book {
        border: 1px solid #ccc;
        background: var(--allowed);
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

    .read {
        background: var(--completed)
    }

    .alert {
        font-size: 30px;
        color: var(--denial);
    }

    #nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex:1;

        width: 100px;
        height: 50px;        
        margin: 30px 45px;                
        background: var(--allowed);
        border-radius: 5px;
        cursor: pointer;    
    }

    #nav > a {
        width: 100%;        
        font-weight: bold;    
        color: var(--white);
        text-decoration: none;
        border-radius: 5px;

    }

    #nav a.router-link-exact-active {
        color: var(--white);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #nav:hover {
        filter: brightness(0.7);
    }
</style>