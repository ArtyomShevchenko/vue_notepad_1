<template>
    <div class="list">
        <PostItem 
        v-for="(post, index) in posts" 
        :key="post.id" 
        :post="post" 
        :index="index" 
        :remove="remove" 
        />
    </div>
</template>

<script>
import PostItem from "@/Components/PostItem.vue";

export default {
    name: "PostList",
    components: { PostItem },
    props: {
        posts: {
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