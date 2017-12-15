import axios from 'axios'

const wishlist = axios.create({
  baseURL: 'http://localhost:3000/api/Wishlist',
  headers: {
    Authorization: 'Bearer {token}',
  },
})

export const fetchWishlist = ({ commit }) => {
  return new Promise((resolve, reject) => {
    wishlist.get().then((res) => {
      if (res.status < 300 && res.data) {
        commit('SET_BOOKS', res.data)
        resolve(res)
      } else {
        /* TODO: show error message */
        reject(new Error(res))
      }
    })
  })
}

export const addtoWishlist = ({ dispatch, commit }, book) => {
  return new Promise((resolve) => {
    let { cover_edition_key, author_name, key, title, subtitle } = book
    wishlist.post(
      'upsertWithWhere',
      { cover_edition_key, author_name, key, title, subtitle },
      { params: { where: { key } } })
    .then((res) => {
      dispatch('fetchWishlist')
      resolve(res)
    })
  })
}

export const removefromWishlist = ({ dispatch, commit }, { id }) => {
  return new Promise((resolve) => {
    wishlist.delete(`/${id}`).then((res) => {
      dispatch('fetchWishlist')
      resolve(res)
    })
  })
}
