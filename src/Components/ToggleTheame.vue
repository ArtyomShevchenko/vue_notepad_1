<template>
    <MyButton @click="toggle">Toggle</MyButton>
</template>

<script>
import MyButton from "@/UI/MyButton.vue";

export default {
    name: "ToggleTheame",
    components: { MyButton },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        toggle() {
            document.body.classList.contains("dark-mode")
                ? document.body.classList.remove("dark-mode")
                : document.body.classList.add("dark-mode")
        }
    }
}
</script>