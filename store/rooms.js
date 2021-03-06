export const state = () => ({
  list: [],
})

export const mutations = {
  update(state, rooms) {
    state.list = rooms
  },
  updateMessages(state, {roomSlug, messages}) {
    const room = getters.find(state)(roomSlug)
    if (!room) {
      return
    }

    room.messages = messages
  }
}

export const getters = {
  find: (state) => (slug = null) => {
    if (!slug) {
      return
    }

    return state.list.find(room => room.slug === slug)
  }
}
