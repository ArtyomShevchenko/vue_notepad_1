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
            document.body.classList.add(localStorage.theme)
            console.log("mounted change", localStorage.theme)
        }
    },
    watch: {
        theme(newTheme) {
            localStorage.theme = newTheme;
            console.log("localStorage change", localStorage.theme)
        }
    }
}
</script>