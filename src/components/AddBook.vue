<template>
    <div id="cancel">
        <router-link to="/">CANCEL</router-link>
    </div>

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
                    language: this.language                    
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
        }
    }
</script>

<style scoped>

    .newBook {
        display: flex;
        flex-direction: column;
        align-items: center;        
    }

    input + input {
        margin-top: 20px;
    }

    input[type="text"] {
        padding: 10px;
        width: 350px;
        outline: 0;
    }

    input[type="number"] {
        padding: 10px;
        width: 350px;
        outline: 0;
    }
    
    input[type="submit"] {
        background: #41b883;
        color: #fff;
        border: 1px solid #41b883;
        cursor: pointer;
        width: 100%;
        height: 40px;
        margin: 10px 10px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 800
    }

    select {
        background: var(--white);
        color: var(--text);
        border: 1px solid #41b883;
        cursor: pointer;
        width: 100%;
        height: 40px;
        margin: 10px 10px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 400
    }

    input[type="submit"]:hover {
        filter: brightness(0.7);
        transition: filter 0.2s;
    }

</style>