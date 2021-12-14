import React from 'react';
import {render} from '@testing-library/react-native';

import Hello from '..';

test('Renderizando elementos', () => {
  const {debug} = render(<Hello />);
  console.log(debug);
});

test('Testando elementos', () => {
  const {getByText} = render(<Hello />);
  const myFirstTest = getByText('Hello World');
  expect(myFirstTest.props.children).toBeTruthy();
});

describe('Minha primeira suite de testes', () => {
  it('Primeiro teste da suite', () => {
    const {debug} = render(<Hello />);
    expect(debug).toBeTruthy();
  });
  it('Segundo teste da suite', () => {
    const {debug} = render(<Hello />);
    expect(debug).toBeTruthy();
  });
});
