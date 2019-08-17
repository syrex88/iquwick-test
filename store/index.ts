import { MutationTree, ActionTree } from 'vuex'
import { RootState, Person } from '~/types'
import localRandomData from '~/static/random-data.json'

export const state = (): RootState => ({
  peoples: [],
  name: 'asdaqwe'
})

export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.peoples = people
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let peoples: Person[] = []

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    peoples = context.isStatic
      ? localRandomData
      : await context.app.$axios.$get('./random-data.json')

    commit('setPeople', peoples.slice(0, 10))
  }
}
