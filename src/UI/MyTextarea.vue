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
    background-color:  var(--bg-color);
    color: var(--text-color);
    padding: 0.5rem;
    border: 0.1rem solid var(--bg-color-dark);
    transition: background-color .2s, 
                color .2s;
    cursor: pointer;
    resize: none;
}
</style>