<template>
    <textarea></textarea>
</template>

<script>
export default {
    name: "MyTextarea",
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

textarea {
    padding: 0.5rem;
    cursor: pointer;
    border-style: dashed;
    border-width: 0.1rem;
    resize: none;
}

textarea:focus {
    outline: none;
    border-style: solid;
}

.light-mode textarea::placeholder {
    color: rgb(0, 50, 50);
    opacity: 0.5;
}

.light-mode textarea {
    background-color: rgb(230, 255, 255);
    color: rgb(0, 50, 50);
    border-color: rgb(0, 50, 50);
}

.dark-mode textarea {
    background-color: rgb(0, 50, 50);
    color: rgb(230, 255, 255);
    border-color: rgb(230, 255, 255);
}

.dark-mode textarea::placeholder {
    color: rgb(230, 255, 255);
    opacity: 0.5;
}
</style>