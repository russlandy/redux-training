import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../store/store.ts'

/**
 * Предоставляет хук useDispatch, типизированный для данного приложения.
 * Это обёртка вокруг хука useDispatch из react-redux, предназначенная для упрощения использования типизированного dispatch в приложении.
 * Возвращает функцию dispatch, типизированную специфическим для приложения типом AppDispatch.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()

/**
 * Предоставляет хук useSelector, типизированный для данного приложения.
 * Это обёртка вокруг хука useSelector из react-redux, предназначенная для упрощения использования типизированного селектора в приложении.
 * TypedUseSelectorHook<RootState> создаёт кастомный хук, который позволяет извлекать данные из глобального состояния, типизированного как RootState.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
