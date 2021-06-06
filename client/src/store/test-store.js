/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
// redux thunk for async actions
function render(
  ui,
  {
    initialState,
    store = configureStore({
      reducer,
      middleware: [
        ...getDefaultMiddleware({ thunk: false }).prepend(logger),
        sagaMiddleware,
      ],
    }),
    ...renderOptions
  },
) {
  return rtlRender(ui, {
    wrapper: ({ children }) => {
      return <Provider store={store}>{children}</Provider>;
    },
    ...renderOptions,
  });
}
// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
