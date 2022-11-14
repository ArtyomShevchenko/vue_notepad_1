<template>
  <div class="container wrapper">
    <h1>Notepad</h1>
    <PostForm @formData="addPost" />
    <PostList :posts="posts" :remove="removePost" v-if="posts.length" />
    
    <div v-else class="error">
      <h3>Posts not found.</h3>
      <MyButton @click="fetchPosts" v-if="!posts.length">Get post</MyButton>
      <div v-if="loading">{{ loadingText }}</div>
    </div>

  </div>
</template>


<script>
// import components
import PostForm from "@/Components/PostForm.vue";
import PostList from "@/Components/PostList.vue";

// import UI element
import MyButton from "@/UI/MyButton.vue";

export default {
  components: { PostList, PostForm, MyButton },
  data() {
    return {
      count: 101,
      posts: [],
      loading: true,
      loadingText: "Loading.",
    }
  },
  methods: {
    incrementCount() {
      this.count += 1
    },
    addPost(post) {
      console.log(post)
      this.posts.unshift(post)
      console.log(this.posts)
    },
    removePost(index) {
      this.posts.splice(index, 1)
    },
    async fetchPosts() {
      this.loading = true
      setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
          .then(response => response.json())
          .then(data => this.posts = [...data])
        this.loading = false
      }, 5000)
    },
    loadingStatus() {
      setInterval(() => {
        if (this.loadingText.length === 10) {
          this.loadingText = "Loading"
        }
        this.loadingText += "."
      }, 500)
    }
  },
  watch: {
    loading(value) {
      if (value) {
        this.loadingStatus()
      }
    }
  },
  mounted() {
    this.fetchPosts()

    if (this.loading) {
      this.loadingStatus()
    }
  },
}
</script>

<style>
:root {
  --bg-color: #fff;
  --bg-color-dark: #000;
  --text-color: #fff;
  --text-color-dark: #000;
  --color: red;
  --color2: green;
  --color3: blue;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.wrapper {
  padding: 0 .5rem;
}

.dark-mode {
  background-color: var(--bg-color-dark);
  color: var(--text-color-dark);
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.error {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}
</style>
