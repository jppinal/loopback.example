import axios from 'axios'

const openlibrary = axios.create({
  baseURL: 'http://localhost:3000/api/openlibraries/',
  headers: {
    Authorization: 'Bearer {token}',
  },
})

export const searchBook = ({ commit }, { q, limit }) => {
  return new Promise((resolve, reject) => {
    /* TODO: check query to improve safety */
    openlibrary.get('search', { params: { q } })
    .then((res) => {
      if (res.status < 300 && res.data) {
        commit(
          'SET_BOOKS',
          res.data[3]
          .slice(0, limit)
          .map(({ cover_edition_key, author_name, key, title, subtitle }) => {
            return { cover_edition_key, author_name, key, title, subtitle }
          }))
        commit('SET_MAX', res.data[2])
        resolve(res)
      } else {
        /* TODO: show error message */
        reject(new Error(res))
      }
    })
  })
}

export const emptyBooks = ({ commit }) => {
  return new Promise((resolve, reject) => {
    commit('SET_BOOKS', [])
    commit('SET_MAX', 0)
    resolve()
  })
}
