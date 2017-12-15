export const getBooks = state => () => {
  return state.books
}

export const overMax = state => (n) => {
  return state.max < n
}

export const untilMax = state => (n) => {
  return state.max - n
}
