<template>  
  <router-view/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  :root {
      --denial: #f21d41;
      --completed: #f38264;
      --allowed: #75baa8;
      --text: #0f0f0f;
      --white: #fafafa;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text);
  }  
  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .container {
      max-width: 10240px;
      display: flex;
  }
</style>
