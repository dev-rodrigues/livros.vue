<template>
  <div id="nav">
    <router-link to="/">NEW</router-link>
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
    display: flex;
    padding: 30px 45px;  
  }

  #nav a {
    font-weight: bold;    
    color: var(--white);
    text-decoration: none;

    text-align: center;
    background: var(--allowed);
    width: 100px;
    height: 50px;
  }

  #nav a.router-link-exact-active {
    color: var(--white);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;    
  }

  #nav a:hover {
    filter: brightness(0.7);
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
