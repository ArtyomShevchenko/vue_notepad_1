<template>
    <input>
</template>

<script>
export default {
    name: "MyInput",
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

input {
    padding: 0.5rem;
    cursor: pointer;
    border-style: dashed;
    border-width: 0.1rem;
}

input:focus {
    outline: none;
    border-style: solid;
}

.light-mode input::placeholder {
    color: rgb(0, 50, 50);
    opacity: 0.5;
}

.light-mode input {
    background-color: rgb(230, 255, 255);
    color: rgb(0, 50, 50);
    border-color: rgb(0, 50, 50);
}

.dark-mode input {
    background-color: rgb(0, 50, 50);
    color: rgb(230, 255, 255);
    border-color: rgb(230, 255, 255);
}

.dark-mode input::placeholder {
    color: rgb(230, 255, 255);
    opacity: 0.5;
}
</style>