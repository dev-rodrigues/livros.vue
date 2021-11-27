<template>
  <div>
    <AddBook />
    <FilterBook />
    <Books />
  </div>
</template>

<script>

  import AddBook from './components/AddBook.vue';
  import FilterBook from './components/FilterBook.vue';
  import Books from './components/Books.vue';

  export default {
    name: 'App',
    components: {
      AddBook,
      FilterBook,
      Books
    }
  }
</script>

<style>
  :root {
      --background: #fafafa;
      --text: #454545;
      --blue: #375F9A;
      --title: #0f0f0f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  
</style>
