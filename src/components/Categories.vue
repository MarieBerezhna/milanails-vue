<template>
    <div class="container">
        <div class="categories row">
            <div class="category col" v-for="category in allCategories" :key="category.id">
                {{ category.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Categories',
    computed: {
        ...mapGetters(['allCategories'])
    }
}
</script>

<style lang="scss" scoped>

</style>