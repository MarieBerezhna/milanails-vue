<template>
    <div>
        <div class="container" v-for="cat in allCategories" :key="cat.link">
            <div class="row py-5" v-if="cat.link === link" :style="'background: url(' + require('../assets/services/' + cat.image) + ')'">
                <h1>{{ cat.name }}</h1>
                {{ cat }}
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters(['allCategories']),
        link () { return this.$route.params.link },
        title() { return this.allCategories}
    },
    created () {
        document.getElementById('title').innerHTML = "title"
    }
}
</script>

<style lang="scss" scoped>

</style>