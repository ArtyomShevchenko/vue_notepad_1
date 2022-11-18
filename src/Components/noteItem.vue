<template>
    <section>
        <div class="content">
            <h3>{{ note.title }}</h3>
            <br>
            <p>{{ note.body }}</p>
        </div>
        <div class="option">
            <p>{{ note.date }}</p>
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
        note: {
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
}
</script>

<style scoped>
section {
    background-color: inherit;
    border-bottom: 0.1rem solid inherit;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    min-height: 100px;
    border: 0.1rem dotted lightgray
}

section b {
    font-size: 0.5rem;
}

.content,
.option {
    padding: 1rem;
    min-height: 4rem;
}

.option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: rgba(0,0,0, .03);
    font-size: .7rem;
}
</style>