<template>
    <transition>
    <p>Une nouvelle vue</p>
    </transition>
</template>

<script>
export default {
    name:'newRoute'

}
</script>

<style scoped>
p{
    color: red;
}
.myTransition-enter-active, .myTransition-leave-active {
    transition: transform 2s;
}
.myTransition-enter-from, .myTransition-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(100vw);
}
</style>