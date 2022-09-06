import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice'
import recipientReducer from '../features/Recipients/recipientsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipient: recipientReducer
  },
});
