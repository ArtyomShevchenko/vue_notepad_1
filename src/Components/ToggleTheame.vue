<template>
    <MyButton @click="toggle">
        {{ theme }}
    </MyButton>
</template>

<script>
import MyButton from "@/UI/MyButton.vue";

export default {
    name: "ToggleTheame",
    components: { MyButton },
    data() {
        return {
            theme: "light-mode",
        }
    },
    methods: {
        toggle() {
            if (document.body.classList.contains("dark-mode")) {
                document.body.classList.remove("dark-mode")
                this.theme = "light-mode"
            } else {
                document.body.classList.add("dark-mode")
                this.theme = "dark-mode"
            }
        }
    },
    mounted() {
        if (localStorage.theme) {
            this.theme = localStorage.theme
        }
    },
    watch: {
        theme(newTheme) {
            localStorage.theme = newTheme;
        }
    }
}
</script>