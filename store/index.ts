import { MutationTree, ActionTree } from 'vuex'
import { RootState, AccountBalance } from '~/types'
import localRandomData from '~/static/accountsBalance.json'

export const state = (): RootState => ({
  accountsBalance: []
})

export const mutations: MutationTree<RootState> = {
  setAccountsBalance(state: RootState, accountsBalance: AccountBalance[]): void {
    state.accountsBalance = accountsBalance
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let accountsBalance: Account[] = []

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    accountsBalance = context.isStatic
      ? localRandomData
      : await context.app.$axios.$get('./accountsBalance.json')

    commit('setAccountsBalance', accountsBalance)
  }
}
