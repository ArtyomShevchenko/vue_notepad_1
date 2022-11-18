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
    background-color: var(--bg-color);
    color: var(--text-color);
    padding: 0.5rem 1rem;
    border: 0.1rem solid var(--text-color);
    transition: background-color .2s, 
                color .2s;
    cursor: pointer;
    word-break: normal;
}

button:hover {
    border: 0.1rem solid var(--text-color);
    background-color:  var(--bg-color);
    color: var(--text-color);
}

button:active {
    opacity: 0.5;
}

button:disabled {
    background-color: rgba(0,0,0,.5);
    cursor: auto;
}

button:disabled:hover {
    color:  var(--text-color-dark);
}

button:active {
    background-color: rgba(0,0,0,.5);
    opacity: 1;
}
</style>