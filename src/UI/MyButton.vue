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
    padding: 0.5rem 1rem;
    cursor: pointer;
    word-break: normal;
    border-style: solid;
    border-width: 0.1rem;
}

.light-mode button {
    background-color: rgb(230, 255, 255);
    color: rgb(0, 50, 50);
    border-color: rgb(0, 50, 50);
}

.dark-mode button {
    background-color: rgb(0, 50, 50);
    color: rgb(230, 255, 255);
    border-color: rgb(230, 255, 255);
}

.light-mode button:hover {
    background-color: rgb(0, 50, 50);
    color: rgb(230, 255, 255);
    border-color: rgb(230, 255, 255);
}

.dark-mode button:hover {
    background-color: rgb(230, 255, 255);
    color: rgb(0, 50, 50);
    border-color: rgb(0, 50, 50);
}

button:active {
    opacity: 0.7;
}

button:disabled {
    cursor: auto;
    opacity: 0.3;
}

button:disabled:hover,
button:disabled:active {
    background-color: inherit;
    border-color: inherit;
    color: inherit;
    opacity: 0.3;
}
</style>