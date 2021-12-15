import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

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

describe('Verificando textos esperados', () => {
  it('Testando os textos de título', () => {
    const {getByTestId} = render(<Hello />);
    const textA = getByTestId('TextA');
    const textB = getByTestId('TextB');
    expect(textA).toBeTruthy();
    expect(textB).toBeTruthy();
  });
  it('Testando os form inputs', async () => {
    const {getByPlaceholderText} = render(<Hello />);
    const inputName = getByPlaceholderText('Informe seu nome');
    const inputEmail = getByPlaceholderText('Informe seu e-mail');

    await fireEvent.changeText(inputName, 'Felipe Manzoni');
    await fireEvent.changeText(inputEmail, 'felipe.manzoni@meliuz.com.br');

    expect(inputName.props.value).toEqual('Felipe Manzoni');
    expect(inputEmail.props.value).toEqual('felipe.manzoni@meliuz.com.br');
  });
  it('Testando ações de botões', async () => {
    const {getByLabelText, getByTestId} = render(<Hello />);

    const buttonShowText = getByLabelText('sendButton');

    await fireEvent.press(buttonShowText);

    const shownUserName = getByTestId('userName');
    const shownUserEmail = getByTestId('userEmail');

    expect(shownUserName).toBeTruthy();
    expect(shownUserEmail).toBeTruthy();
  });
});
