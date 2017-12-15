<template lang="pug">
v-app
  v-navigation-drawer.indigo(fixed app dark absolute v-model="drawer" right)
    wishlist
  v-toolbar(app color="grey lighten-4" flat fixed)
    v-toolbar-title.indigo--text Openlibrary Wish-List
    v-spacer
    v-btn.hidden-lg-and-up(icon @click.stop="drawer = !drawer")
      v-icon(color="indigo") star
  v-content.grey.lighten-4
    v-container(fluid)
      router-view
  v-footer(app)
</template>

<script>
import Wishlist from './components/wishlist.vue'

export default {
  name: 'app',
  components: {
    Wishlist
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="stylus" src="./style/main.styl"></style>
