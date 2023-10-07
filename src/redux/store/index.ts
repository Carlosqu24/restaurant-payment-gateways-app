import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import thunk, { ThunkAction } from 'redux-thunk';
import productsReducer from '../reducers/productsReducer';
import shoppingCartReducer from '../reducers/shoppingCartReducer';

const middlewareEnhancer = applyMiddleware(thunk)
const composedEnhancers = compose(middlewareEnhancer)

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer,
        shoppingCart: shoppingCartReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;