<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/">Home</router-link>
            </li>
             <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/myinfo">My Information</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/friends">Friends</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/about">About</router-link>
            </li>
        </ul>
    </nav>
</template>
