<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
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
  #nav {
    padding: 30px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }

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
