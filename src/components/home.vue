<template lang="pug">
v-container(grid-list-lg)
  v-layout(wrap)
    v-flex(xs12 md8 offset-md2)
      v-card(color="white")
        form(@submit.prevents="search()")
          v-text-field(
            type="text"
            append-icon="search"
            full-width
            hide-details
            light
            color="indigo"
            single-line
            v-model="query"
          )
    books
    v-flex.text-xs-center(v-show="loading" xs-12)
      v-progress-circular(indeterminate v-bind:size="70" v-bind:width="3" color="indigo")
    v-flex(xs12 v-show="!overMax(limit)")
      v-btn(@click="loadMore" block flat color="indigo")
        span(v-show="!loadingMore") Load More (+{{untilMax(this.limit)}})
        v-progress-circular(v-show="loadingMore" indeterminate v-bind:size="24" v-bind:width="3" color="indigo")
</template>

<script>
import Books from './books.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    Books
  },
  methods: {
    ...mapActions('openlibrary', [ 'searchBook', 'emptyBooks' ]),
    loadMore () {
      this.limit = this.limit + 36
      this.loadingMore = true
      this.searchBook({ q: this.query, limit: this.limit }).then(() => {
        this.loadingMore = false
      })
    },
    search () {
      this.limit = 36
      this.loading = true
      this.emptyBooks().then(() => {
        this.searchBook({ q: this.query, limit: this.limit }).then(() => {
          this.loading = false
        })
      })
    }
  },
  computed: {
    ...mapGetters('openlibrary', [ 'overMax', 'untilMax' ])
  },
  data () {
    return {
      limit: 36,
      query: '',
      loading: false,
      loadingMore: false
    }
  }
}
</script>
