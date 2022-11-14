<template>
    <form>
        <MyInput 
            type="text" 
            :value="data.title" 
            @input="changeTitle" 
            placeholder="Title"/>
        <MyTextarea 
            :value="data.body" 
            @input="changeBody" 
            cols="30" rows="6"
            placeholder="Message">
        </MyTextarea>
        <MyButton 
            @click="sendForm" 
            :disabled="disabledButton" 
            type="submit">
            Send
        </MyButton>

    </form>
</template>

<script>
import MyButton from "@/UI/MyButton.vue";
import MyInput from "@/UI/MyInput.vue";
import MyTextarea from "@/UI/MyTextarea.vue";

export default {
    name: "PostForm",
    components: { MyButton, MyInput, MyTextarea },
    data() {
        return {
            data: {
                id: Date.now(),
                title: "",
                body: ""
            },
            disabledButton: true,
            count: 0,
        }
    },
    methods: {
        changeTitle(event) {
            this.data.title = event.target.value
            this.disabledButton = false
        },
        changeBody(event) {
            this.data.body = event.target.value
            this.disabledButton = false
        },
        sendForm(event) {
            event.preventDefault()

            this.$emit("formData", { ...this.data })

            this.data.title = ""
            this.data.body = ""
            this.disabledButton = true

        },
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
}

form {
    gap: .5rem;
}

button {
    align-self: flex-end;
}
</style>