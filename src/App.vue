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
      --denial: #f21d41;
      --completed: #f38264;
      --allowed: #75baa8;
      --text: #0f0f0f;      
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text);
  }  
</style>
