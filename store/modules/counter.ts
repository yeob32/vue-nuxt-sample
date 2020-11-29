import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'modules/counter',
  namespaced: true,
  stateFactory: true,
})
export default class Store extends VuexModule {
  public count: number = 0 // <- state로 매핑

  get doubleCount(): number {
    // <- getters로 매핑
    return this.count + 2
  }

  @Mutation // <- mutation
  public increment(step: number) {
    this.count += step
  }

  @Action // <- action
  public inc(step: number) {
    this.context.commit('increment', step)
    // return step;	// <- return값을 commit을 통해 전달함
  }

  @Action
  serverInit(server: any) {
    // server.app.$axios
    console.log('serverInit >>>>>>>>>>>')
  }
}
