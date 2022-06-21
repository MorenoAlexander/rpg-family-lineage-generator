import { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import {
  Button,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  Header,
  MantineProvider,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

import { QueryClient, QueryClientProvider } from 'react-query';

import logo from './assets/logo.svg';
import './styles/App.css';

const queryClient = new QueryClient();

export default function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Container className="App">
            <Header className="App-header" height="100%">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit&nbsp;
                <code>src/App.tsx</code>
                &nbsp;and save to reload.
              </p>
              <Button onClick={() => toggleColorScheme()}>
                {colorScheme === 'dark' ? (
                  <BsFillMoonFill />
                ) : (
                  <BsFillSunFill />
                )}
              </Button>
            </Header>
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}
