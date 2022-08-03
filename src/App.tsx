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
import AppLayout from './components/AppLayout';
import LineageGraph from './components/LineageGraph';
import Person from './lib/models/Person';
import PersonNode from './components/PersonNode';
import PersonContext from './PersonContext';

const queryClient = new QueryClient();

export default function App() {
  const preferredColorScheme = useColorScheme('dark');
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };


  const initialValues = useMemo(() => ({
    edgeGraph: [
      { id: 'f1-2', source: '1', target: '3' },
      { id: 'm2-3', source: '2', target: '3', animated: true },
    ],
    nodeGraph: [
      {
        id: '1',
        type: 'input',
        data: new Person('Stonebeard', ''),
        position: { x: 250, y: 25 },
      },
      {
        id: '2',
        type: 'personNode',
        data: (() => {
          const mother = new Person('Stonebeard', 'Wife of Stonebeard');
          mother.isMale = false;
          return mother;
        })(),
        position: { x: 100, y: 125 },
      },
      {
        id: '3',
        type: 'personNode',
        data: new Person('Stonebeard', 'First son of Stonebeard'),
        position: { x: 250, y: 250 },
      },
    ]
  }), []);



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
            <PersonContext.Provider 
              value={initialValues}
            >
              <Container
                className="App"
                style={{ height: '900px', width: '100%' }}
              >
                <LineageGraph
                  nodeTypes={nodeTypes}
                />
              </Container>
            </PersonContext.Provider>
          </AppLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}
