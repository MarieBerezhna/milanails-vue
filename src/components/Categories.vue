<template>
    <div class="container myb-md-5">
        <h1 class="mb-4"><span class="d-none d-md-inline">Мастерская маникюра</span> Milanails предлагает:</h1>
        <div class="categories row">
            <div class="category col-12 col-md-4 mb-4" v-for="category in allCategories" :key="category.id" 
            :image="category.image">
                <div class="inner">
                 
                </div>
                <div class="content">
                    <h2> {{ category.name }}</h2>
                </div>
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
    },
    methods: {
        background (img) {
            console.log(img)
            const path = () => require('@/assets/services/' + img)
            
            return 'background: url(' + path + ')'
        }
    },
    mounted () {
        const cats = document.getElementsByClassName('category');
        cats.forEach(element => {
            const img = element.getAttribute('image')
            const path = () => require('../assets/services/' + img)
            element.children[0].style.background = 'url(' + path() + ')'
        });
    }
}
</script>

<style lang="scss" scoped>
  .inner {
    height: 250px;
    background-position: center !important;
    background-size: cover !important;
    opacity: 0.6;
    border-radius: 15px;
  }
</style>