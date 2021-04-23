<template>
    <div id="nav">
        <h1>HubFrete</h1>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
</template>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");

#app {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
