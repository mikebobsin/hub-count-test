<template>
    <div id="nav">
        <h1>HubFrete</h1>
        <!-- TODO: Customize mobile view -->
        <!-- TODO: Validate input field -->
        <!-- TODO: Fix see shipping values buttom -->
        <!-- TODO: Customize input on list and get previus values -->
        <!-- TODO: Look for better collors -->
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
