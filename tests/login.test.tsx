import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../app/login';

let mockReplace: jest.Mock;

jest.mock('expo-router', () => {
  mockReplace = jest.fn(); // define aqui dentro
  return {
    useRouter: () => ({
      replace: mockReplace,
    }),
  };
});

jest.mock('@/mock/users', () => ({
  users: [
    { id: 1, username: 'admin', password: '123456', name: 'Administrador' },
    { id: 2, username: 'user', password: '123456', name: 'Usuário Teste' },
  ],
}));

describe('Login', () => {
  beforeEach(() => {
    mockReplace.mockClear();
  });

  it('faz login corretamente com usuário e senha válidos', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    fireEvent.changeText(getByPlaceholderText('Usuário'), 'user');
    fireEvent.changeText(getByPlaceholderText('Senha'), '123456');
    fireEvent.press(getByText(/entrar/i));

    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith('/home');
    });
  });

  it('mostra erro com usuário ou senha inválidos', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    fireEvent.changeText(getByPlaceholderText('Usuário'), 'admin');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'errada');
    fireEvent.press(getByText(/entrar/i));

    await waitFor(() => {
      expect(getByText(/usuário ou senha inválidos/i)).toBeTruthy();
    });
  });
});
