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


  #nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex:1;

    width: 100px;
    height: 50px;        
    margin: 30px 45px;                
    background: var(--allowed);
    border-radius: 5px;
    cursor: pointer;    
  }

  #cancel {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex:1;

    width: 100px;
    height: 50px;        
    margin: 30px 45px;                
    background: var(--denial);
    border-radius: 5px;
    cursor: pointer;    
  }

  #nav > a {
    width: 100%;        
    font-weight: bold;    
    color: var(--white);
    text-decoration: none;
    border-radius: 5px;
  }

  #cancel > a {
    width: 100%;        
    font-weight: bold;    
    color: var(--white);
    text-decoration: none;
    border-radius: 5px;
  }

  #nav a.router-link-exact-active {
    color: var(--white);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #cancel a.router-link-exact-active {
    color: var(--white);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #nav:hover {
    filter: brightness(0.7);
  }

  #cancel:hover {
    filter: brightness(0.7);
  }


  #operation {
    display: flex;
    flex-direction: row;
    width: 80px;    
  }

  #operation > i {
    margin: 0 10px;
  }

  #operation:hover {
    filter: opacity(0.9);
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
