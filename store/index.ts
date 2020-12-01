import { ActionTree, Store } from 'vuex'
import { initialiseStores, counterStore } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

// export const actions = {
export const actions: ActionTree<any, any> = {
  async nuxtServerInit(vuexContext, context) {
    // 서버 환경에서 코드 실행 (클라이언트 환경에서는 실행되지 않음)
    if (process.server) {
      // 요청(request) 객체의 HTTP 버전 정보 출력
      console.log(context.req.httpVersion)
    }

    // async nuxtServerInit(_context, server: { req: any; app: Vue }) {
    initialiseStores(context.store)
    await counterStore.serverInit(context)
  },

  // async nuxtClientInit(context) {
  //   await counterStore.clientInit()
  // },
}
