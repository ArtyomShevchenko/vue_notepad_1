<template>
    <button>
        <slot />
    </button>
</template>

<script>
export default {
    name: "MyButton",
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button {
    background-color:  var(--bg-color-dark);
    color: var(--text-color-dark);
    padding: 0.5rem 1rem;
    border: 0.1rem solid var(--bg-color-dark);
    transition: background-color .2s, 
                color .2s;
    cursor: pointer;
    word-break: normal;
}

button:hover {
    border: 0.1rem solid var(--bg-color-dark);
    background-color:  var(--bg-color);
    color: var(--text-color);
}

button:active {
    background-color:  var(--bg-color-dark);
    color: var(--text-color-dark);
    opacity: 0.7;
}
</style>