<template>
  <div class="container wrapper">
    <header>
      <h1>Notepad</h1>
      <MyButton 
        @click="toggleTheameMode">
          {{ themeMode === "light-mode" ? "Dark theme" : "Light theme" }}
      </MyButton>
    </header>
    <!-- form -->
    <noteForm @formData="addNotes" />
    <notesList 
      :notes="notes" 
      :remove="removePost" 
      v-if="notes.length" />
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

// import UI element
import MyButton from "@/UI/MyButton.vue";

export default {
  components: {
    notesList,
    noteForm,
    MyButton,
  },
  data() {
    return {
      notes: [],
      loading: true,
      loadingText: "Loading.",
      themeMode: "light-mode",
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
    },
    toggleTheameMode() {
      this.themeMode =
        this.themeMode === "light-mode"
          ? this.themeMode = "dark-mode"
          : this.themeMode = "light-mode"

      localStorage.themeMode = this.themeMode
    }
  },
  mounted() {
    if (this.loading) {
      this.loadingStatus()
    }

    if (this.themeMode) {
      document.body.classList = this.themeMode
    }

    if (localStorage.themeMode) {
      this.themeMode = localStorage.themeMode
    }

    if (localStorage.notes) {
      this.loadingStatus = true
      this.notes = JSON.parse(localStorage.notes)
      this.loadingStatus = false
    }
  },
  watch: {
    themeMode(newTheme) {
      document.body.classList = newTheme
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.light-mode {
  background-color: rgb(230, 255, 255);
  color: rgb(0, 50, 50);
}

.dark-mode {
  background-color: rgb(0, 50, 50);
  color: rgb(230, 255, 255);
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
