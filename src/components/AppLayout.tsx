import {
  AppShell,
  Button,
  Group,
  Header,
  useMantineColorScheme,
} from '@mantine/core';
import { ReactNode } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import AppFooter from './AppFooter';

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  // TODO: move color scheme into header component
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <AppShell
      header={
        <Header height={120} p="xs">
          <Group position="right">
            <Button
              onClick={() => toggleColorScheme()}
              id="btn-toggleColorScheme"
            >
              {colorScheme === 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />}
            </Button>
          </Group>
        </Header>
      }
      footer={<AppFooter />}
    >
      {children}
    </AppShell>
  );
}
