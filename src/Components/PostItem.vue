<template>
    <section>
        <div>
            <h3>{{ post.title }}</h3>
            <br>
            <p>{{ post.body }}</p>
        </div>
        <div>
            <MyButton @click="remove(index)">Delete</MyButton>
        </div>
    </section>
</template>

<script>
import MyButton from "@/UI/MyButton.vue";

export default {
    name: "NoteItem",
    components: { MyButton },
    props: {
        post: {
            type: Object,
            require: true,
        },
        index: {
            type: Number,
            require: true,
        },
        remove: {
            type: Function,
            require: true,
        },
    },
    methods: {
        // removePost(index) {
        //     this.removePostClass = "red"
        //     setTimeout(() => this.remove(index), 1000)
        // }
    }
}
</script>

<style scoped>
section {
    padding: 0.5rem 0;
    background-color: var(--bg-color);
    border-bottom: 0.1rem solid var(--text-color);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    overflow: hidden;
    min-height: 100px;
}

section b {
    font-size: 0.5rem;
}

div, h3 {
    word-break: break-all;
}

div::first-letter, h3::first-letter {
    text-transform: uppercase;
}
</style>