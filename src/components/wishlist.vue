<template lang="pug">
v-list.pa-1(two-lines subheader)
    v-subheader
      v-icon star
    v-list-tile(avatar v-for="(book,id) in getWishlist()" :key="id" @click="")
      v-list-tile-avatar
        img(:src="`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-S.jpg`")
      v-list-tile-content
        v-list-tile-title {{ book.title }}
        v-list-tile-sub-title
          span(v-for="author in book.author_name") {{ author }}
      v-list-tile-action
        v-btn(icon ripple @click="removefromWishlist(book)")
          v-icon(color="grey lighten-1") delete
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'wishlist',
  methods: {
    ...mapActions('wishlist', [ 'removefromWishlist', 'fetchWishlist' ])
  },
  computed: {
    ...mapGetters('wishlist', [ 'getWishlist' ])
  },
  mounted () {
    this.fetchWishlist()
  },
  data () {
    return {
    }
  }
}
</script>
