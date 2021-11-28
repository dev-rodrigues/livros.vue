<template>
    <div class="root">
            <h2>Add new book</h2>            
        <div class="container">
                <form class="newBook">
                    <input type="text" placeholder="Book Name">
                    <input type="submit" value="Add">
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
                title: ''
            }
        },
        methods: {
            ...mapActions(['addBook'])
        },
        onSubmit(event) {
            event.preventDefault();

            this.addBook(this.title);

            // reset form
            this.title = '';
        }
    }
</script>

<style scoped>

    .newBook {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    input[type="text"] {
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
    }

</style>