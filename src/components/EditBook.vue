<template>
    <Cancel />

    <div class="root">
        <h2>EDIT THE BOOK {{ id }}</h2>
        <div class="container">
            <form class="newBook" @submit="handleSubmit">
                <input 
                    v-model="title"
                    type="text" 
                    placeholder="title">

                <input
                    v-model="author"
                    type="text" 
                    placeholder="author">

                <input
                    v-model="language"
                    type="text" 
                    placeholder="language">

                <select v-model="selected">
                    <option value="" disabled selected>SELECT AN GENRE</option>
                    <option
                        v-for="genre in genres"
                        :value="genre"
                        v-bind:key="genre">
                        {{ genre }}
                    </option>
                </select>
                <input type="submit" value="Save">

            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    import Cancel from '../components/Cancel.vue';

    export default {
        name: 'EditBook',
        components: {
            Cancel
        },
        data() {
            return {
                id: 0,
                title: '',
                author: '',
                language: '',
                selected: '',
                genres: [
                    'DRAMA',
                    'COMEDY',
                    'HORROR',
                    'SCIENCE FICTION',
                    'ROMANCE',
                    'FANTASY',
                    'HISTORY',
                    'Fiction'
                ]
            }
        },
        methods: {
            ...mapActions([
                'fetchBooks',
                'getBooks',
                'updateBook',
            ]),
            async handleSubmit(event) {
                event.preventDefault();
                
                const updated = {
                    id: this.id,
                    title: this.title,
                    author: this.author,
                    language: this.language,
                    genre: this.selected,
                    read: !this.read
                }

                this.updateBook(updated);
                this.$router.push({ path: '/' })
                    
            },
            async getAllBooks(parameter) {
                const books = await this.getBooks();
                return books.find(book => book.id == parameter);
            }
        },
        async created() {
            this.fetchBooks();            
            this.id = this.$route.params.id

            const old = await this.getAllBooks(this.id);
            
            this.title = old.title;
            this.author = old.author;
            this.language = old.language;
            this.selected = old.genre;
        },
    }
</script>

<style scoped>
    .newBook {
        display: flex;
        flex-direction: column;
        align-items: center;        
    }
</style>