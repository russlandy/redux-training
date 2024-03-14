import { Action, applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { thunk, ThunkDispatch } from 'redux-thunk'

import rootReducer from './rootReducer.ts'

/**
 * Определяет функцию composeEnhancers, которая используется для расширения хранилища Redux с помощью middleware и возможностей Redux DevTools.
 * Если в браузере установлено расширение Redux DevTools, `window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` будет использовано для создания compose функции, интегрирующейся с DevTools.
 * В противном случае используется стандартная функция compose из Redux.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/**
 * Создаёт хранилище Redux с использованием rootReducer, применяя промежуточное ПО (middleware) и интеграцию с Redux DevTools через composeEnhancers.
 * applyMiddleware(thunk) добавляет Thunk middleware в цепочку middleware для асинхронных действий.
 */
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

/**
 * Определяет тип RootState, представляющий тип состояния всего приложения.
 * Этот тип используется для типизации глобального состояния Redux.
 * ReturnType<typeof rootReducer> возвращает тип, который является результатом выполнения rootReducer,
 * что позволяет TypeScript понимать структуру глобального состояния.
 */
export type RootState = ReturnType<typeof rootReducer>
// export type RootState = ReturnType<typeof store.getState()>

/**
 * Определяет тип AppStore, представляющий тип конфигурации хранилища Redux.
 * Этот тип используется для доступа к методам и свойствам хранилища, таким как dispatch и getState.
 * typeof store возвращает тип конкретного экземпляра store, созданного с помощью createStore.
 */
export type AppStore = typeof store

/**
 * Определяет тип AppDispatch, который представляет собой специализированный тип функции dispatch для Redux Thunk.
 * ThunkDispatch позволяет использовать функции Thunk в качестве действий, передавая их в функцию dispatch.
 * Этот тип расширяет стандартные возможности dispatch, позволяя ему принимать Thunk-функции, помимо обычных объектов действий.
 */
export type AppDispatch = ThunkDispatch<RootState, undefined, Action>
