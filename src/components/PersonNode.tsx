import { Handle, Position } from 'react-flow-renderer';
import { Avatar, Divider, Group, Menu, Paper, Text } from '@mantine/core';
import Person from '../lib/models/Person';

type PersonNodeProps = {
  data: Person;
};

export default function PersonNode({ data }: PersonNodeProps) {
  return (
    <>
      <Handle type="source" position={Position.Top} id="ancestor" />
      <Paper shadow="md" p="md" withBorder>
        <Group direction="row">
          <Group position="left">
            <Avatar src="https://i.pinimg.com/originals/23/8c/03/238c03e02582233223cbed01f477c7c6.png" />
          </Group>
          <Group position="center">
            <Group direction="column">
              <Text size="md">
                {data.firstName}, {data.lastName}
              </Text>
              <Text size="xs">{data.isMale ? 'Male' : 'Female'}</Text>
            </Group>
          </Group>
          <Group position="right">
            <Menu>
              <Menu.Label>Context Actions</Menu.Label>
              <Menu.Item>Add Ancestor</Menu.Item>
              <Menu.Item>Add Descendant</Menu.Item>
              <Divider />
              <Menu.Label>Danger Zone</Menu.Label>
              <Menu.Item>Hide</Menu.Item>
              <Menu.Item color="red">Delete</Menu.Item>
            </Menu>
          </Group>
        </Group>
      </Paper>
      <Handle type="target" position={Position.Bottom} />
    </>
  );
}
