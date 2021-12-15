import React from 'react';
import * as Redux from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

import Stacks from '../stacks';

describe('Testando a stack de navegação', () => {
  beforeAll(() => {
    const providerComponent = jest.spyOn(Redux, 'Provider');
    const providerFn: any = jest.fn();
    providerComponent.mockReturnValue(providerFn);
  });

  it('Renderizando screen home', async () => {
    const {getByTestId} = render(<Stacks />);
    const comecoTest = getByTestId('comecoTest');

    await fireEvent.press(comecoTest);

    const comecoScreen = getByTestId('onBoard');

    expect(comecoScreen).toBeTruthy();
  });
});
