import React from 'react';
import { render } from '@testing-library/react-native';

import { useRoute } from '@react-navigation/native';
import GameDetails from '@/src/app/GameDetails/[id]';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: jest.fn(),
}));

describe('<GameDetails />', () => {
  it('exibe os dados do jogo corretamente', () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: {
        jogo: 'Resident Evil 4',
        imagem: 'https://i.pinimg.com/736x/03/7b/86/037b86e2b899e7ce4f0371e88be3ce1f.jpg',
        descricao: 'Um clássico do survival horror',
        ano: 2005,
        desenvolvedor: 'Capcom',
        nota: 9.5,
        plataforma: ['PS2', 'GameCube', 'PC'],
      },
    });

    const { getByText } = render(<GameDetails />);

    expect(getByText('Resident Evil 4')).toBeTruthy();
    expect(getByText('Um clássico do survival horror')).toBeTruthy();
    expect(getByText('Ano')).toBeTruthy();
    expect(getByText('2005')).toBeTruthy();
    expect(getByText('Desenvolvedor')).toBeTruthy();
    expect(getByText('Capcom')).toBeTruthy();
    expect(getByText('Nota')).toBeTruthy();
    expect(getByText('9.5')).toBeTruthy();
    expect(getByText('Plataformas')).toBeTruthy();
    expect(getByText('PS2, GameCube, PC')).toBeTruthy();
  });

});
