<template>
    <div id="cancel">
        <router-link to="/">CANCEL</router-link>
    </div>

    <div class="root">
        <h2>Add new book</h2>            
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
                        v-model="country"
                        type="text" 
                        placeholder="country">

                    <input
                        v-model="language"
                        type="text" 
                        placeholder="language">

                    <input
                        v-model="pages"
                        type="number" 
                        placeholder="pages">

                    <input
                        v-model="year"
                        type="number" 
                        placeholder="year">

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
                country: '',
                language: '',
                pages: 0,
                year: 0,            
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
                    country: this.country,
                    language: this.language,
                    pages: this.pages,
                    year: this.year,
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
                    this.country.length > 0 &&
                    this.language.length > 0 &&
                    this.pages > 0 &&
                    this.year > 0;
            },
            resetFields() {
                this.title = '';
                this.author = '';
                this.country = '';
                this.language = '';
                this.pages = 0;
                this.year =  0;
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

    input[type="submit"]:hover {
        filter: brightness(0.7);
        transition: filter 0.2s;
    }

</style>