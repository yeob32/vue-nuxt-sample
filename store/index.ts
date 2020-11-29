import { ActionTree, Store } from 'vuex'
import { initialiseStores, counterStore } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

// export const actions = {
export const actions: ActionTree<any, any> = {
  async nuxtServerInit({}, ctx) {
    // async nuxtServerInit(_context, server: { req: any; app: Vue }) {
    initialiseStores(ctx.store)
    await counterStore.serverInit(ctx)
  },

  // async nuxtClientInit(context) {
  //   await counterStore.clientInit()
  // },
}
