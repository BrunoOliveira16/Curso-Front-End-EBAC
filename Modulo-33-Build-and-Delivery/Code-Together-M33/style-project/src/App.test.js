import { render } from '@testing-library/react';
import App from './App';

test('teste titulo', () => {
  render(<App />);
  // eslint-disable-next-line testing-library/no-node-access
  const testCase = document.querySelector('.App h1');
  expect(testCase).toHaveTextContent(/Meu Painel de Controle/i);
});
