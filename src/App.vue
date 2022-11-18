<template>
  <div class="container wrapper">

    <!-- test localstorage -->
    <!-- <div>
      <MyInput @keydown.enter="changeUserName" placeholder="Enter your name"/>
      <p>Hello {{userName}}</p>
    </div> -->
    <!-- end test -->

    <header>
      <h1>Notepad</h1>
      <ToggleTheame />
    </header>
    <!-- form -->
    <noteForm @formData="addNotes" />
    <notesList :notes="notes" :remove="removePost" v-if="notes.length" />
    <div v-else class="error">
      <h3>Notes not found.</h3>
      <div v-if="loading">{{ loadingText }}</div>
    </div>
  </div>
</template>


<script>
// import components
import noteForm from "@/Components/noteForm.vue";
import notesList from "@/Components/notesList.vue";
import ToggleTheame from "@/Components/ToggleTheame.vue";

// import UI element

export default {
  components: {
    notesList,
    noteForm,
    ToggleTheame,
  },
  data() {
    return {
      notes: [],
      loading: true,
      loadingText: "Loading.",
    }
  },
  methods: {
    addNotes(post) {
      this.notes.unshift(post)
      this.setLocalNotes()
    },
    removePost(index) {
      this.notes.splice(index, 1)
      this.setLocalNotes()
    },
    loadingStatus() {
      setInterval(() => {
        if (this.loadingText.length === 10) {
          this.loadingText = "Loading"
        }
        this.loadingText += "."
      }, 500)
    },
    setLocalNotes() {
      localStorage.notes = JSON.stringify(this.notes)
    }
  },
  mounted() {

    if (this.loading) {
      this.loadingStatus()
    }

    if (localStorage.notes) {
      this.loadingStatus = true
      this.notes = JSON.parse(localStorage.notes)
      this.loadingStatus = false
    }
  },
}
</script>

<style>
:root {
  --bg-color: #fff;
  --text-color: #000;
  --border-color: red;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
.light.theme {
  background-color: var(--bg-color);
  color: var(--text-color);
  border-color: var(--color);
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}

.wrapper {
  padding: 0 .5rem;
}

.dark-mode {
  background-color: var(--bg-color-dark);
  color: var(--text-color-dark);
  border-color: var(--color2);
}

.container {
  max-width: 768px;
  margin: 0 auto;
}

.error {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}
</style>
