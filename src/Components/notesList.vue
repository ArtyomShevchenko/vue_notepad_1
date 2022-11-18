<template>
    <div class="list">
        <noteItem 
        v-for="(note, index) in notes" 
        :key="note.id" 
        :note="note" 
        :index="index" 
        :remove="remove" 
        />
    </div>
</template>

<script>
import noteItem from "@/Components/noteItem.vue";

export default {
    name: "notesList",
    components: { noteItem },
    props: {
        notes: {
            type: Array,
            require: true,
        },
        remove: {
            type: Function,
            require: true,
        }
    }
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>