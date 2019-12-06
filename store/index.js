export const state = () => ({
  countryList: []
})

export const mutations = {
  addCountry(state, payload) {
    if (!state.countryList.includes(payload)) {
      if (state.countryList.length >= 5) {
        state.countryList.pop()
        state.countryList.unshift(payload)
      } else {
        state.countryList.unshift(payload)
      }
    }
  }
}
