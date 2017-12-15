export const getWishlist = state => () => {
  return state.books
}

export const isInWishList = state => (key) => {
  return state.books.some(x => x.key === key)
}
