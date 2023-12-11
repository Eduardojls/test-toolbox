import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Selector from '../components/Selector';

const mockStore = configureStore([]);

test('Selector component renders correctly', () => {
  const store = mockStore({});
  const { getByLabelText } = render(
    <Provider store={store}>
      <Selector />
    </Provider>
  );

  expect(getByLabelText(/default select example/i).value).toBe('Select');
});

test('Selector component changes search term on selection change', () => {
  const store = mockStore({});
  const { getByLabelText } = render(
    <Provider store={store}>
      <Selector />
    </Provider>
  );

  fireEvent.change(getByLabelText(/default select example/i), { target: { value: 'test2.csv' } });
});
