import { useMemo, useState } from 'react';

import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

import { QueryClient, QueryClientProvider } from 'react-query';
import './styles/App.css';
import 'reactflow/dist/style.css';
import AppLayout from './components/AppLayout';
import LineageGraph from './components/LineageGraph';
import PersonNode from './components/PersonNode';

const queryClient = new QueryClient();

export default function App() {
  const preferredColorScheme = useColorScheme('dark');
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  const nodeTypes = useMemo(() => ({ personNode: PersonNode }), []);

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
          <AppLayout>
            <Container
              className="App"
              style={{ height: '900px', width: '100%' }}
            >
              <LineageGraph nodeTypes={nodeTypes} />
            </Container>
          </AppLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}
