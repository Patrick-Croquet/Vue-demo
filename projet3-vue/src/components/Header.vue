<template>
    <header id="nav">
        <!--<router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>-->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"><img src="@/assets/logo-3419889_960_720.png" width="150"></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link active" ria-current="page" to="/" >Home</router-link>
                <!--<a class="nav-link active" aria-current="page" href="#">Home</a>-->
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
                <!--<a class="nav-link" href="#">Link</a>-->
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
  </header>    
</template>