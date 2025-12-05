import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { carApi } from '../carApi'
import { resApi } from '../resApi'
import { logAndReg } from '../logAndRegApi'
import { filterApi } from '../filterApi'
import { makeApi } from '../makeApi'
import { modelApi } from '../modelApi'
import { valueApi } from '../valueApi'
import { carAtributApi } from '../carAtribiut'
import { userApi } from '../userApi'
import { favoriteApi } from '../favoriteApi'

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    [resApi.reducerPath]: resApi.reducer,
    [logAndReg.reducerPath]: logAndReg.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
    [makeApi.reducerPath]: makeApi.reducer,
    [valueApi.reducerPath]: valueApi.reducer,
    [modelApi.reducerPath]: modelApi.reducer,
    [carAtributApi.reducerPath]: carAtributApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware)
    .concat(resApi.middleware)
    .concat(logAndReg.middleware)
    .concat(filterApi.middleware)
    .concat(modelApi.middleware)
    .concat(makeApi.middleware)
    .concat(valueApi.middleware)
    .concat(carAtributApi.middleware)
    .concat(favoriteApi.middleware)
    .concat(userApi.middleware),
})

setupListeners(store.dispatch)