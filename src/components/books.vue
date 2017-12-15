<template lang="pug">
v-container(grid-list-lg)
  v-layout(row wrap)
    v-flex(v-for="(book,id) in getBooks()" xs12 sm4 md3)
      v-card
        v-card-media.grey.lighten-1(:src="`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`" height="300px")
        v-card-title(primary-title)
          div
            h3.headline.mb-0 {{ book.title }}
            h4.mb-0(v-if="book.subtitle") {{ book.subtitle }}
            p
              span(v-for="author in book.author_name") {{ author }}
        v-card-actions
          v-btn(v-show="!isInWishList(book.key)" flat color="orange" @click="addtoWishlist(book)") Add to wishlist
          span.grey--text(v-show="isInWishList(book.key)") IN WISH LIST
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'books',
  methods: {
    ...mapActions('wishlist', [ 'addtoWishlist' ])
  },
  computed: {
    ...mapGetters('wishlist', [ 'isInWishList' ]),
    ...mapGetters('openlibrary', [ 'getBooks' ])
  },
  data () {
    return {
    }
  }
}
</script>
