const BASE_URL = 'https://pokeapi.co/api/v2'

export const Api = {
  get: url => {
    return fetch(`${BASE_URL}/${url}`)
  },
}