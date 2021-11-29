<template>
    <Cancel />

    <div class="root">
        <h2>ADD NEW BOOK</h2>            
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

<script scoped>
    import { mapActions } from 'vuex';

    import Cancel from '../components/Cancel.vue';
    
    export default {
        name: "AddBook",
        data() {
            return {                
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
                "addBook"
            ]),
            handleSubmit(event) {
                event.preventDefault();

                const newBook = {
                    title: this.title,
                    author: this.author,
                    language: this.language,
                    genre: this.selected,
                }

                if (this.isValid()) {
                    this.addBook(newBook);
                    this.$router.push({ path: '/' })

                } else {
                    alert('Please fill all the fields');
                    
                }
            },
            isValid() {
                return this.title.length > 0 &&
                    this.author.length > 0 &&
                    this.language.length > 0 &&
                    this.selected.length > 0;                    
            }            
        },
        components: {
            Cancel
        }
    }
</script>

<style scoped>

    .newBook {
        display: flex;
        flex-direction: column;
        align-items: center;        
    }
</style>