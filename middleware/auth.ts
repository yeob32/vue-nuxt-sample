import { Middleware } from '@nuxt/types'

const MyMiddleware: Middleware = ({
  app,
  base,
  beforeNuxtRender,
  env,
  error,
  from,
  isClient,
  isDev,
  isHMR,
  isServer,
  isStatic,
  nuxtState,
  params,
  payload,
  query,
  redirect,
  req,
  res,
  route,
  store,
}) => {
  // auth 확인
  // if (!store.state.authUser) {
  return redirect('/')
  // }
}

export default MyMiddleware
