import { Node, Edge } from 'reactflow';
import Person, { NewMotherNode } from '../models/Person';

export const initialEdges: Edge[] = [
  {
    id: '1-2',
    source: '1',
    target: '2',
    sourceHandle: 'fatherRight',
    targetHandle: 'motherLeft',
  },
  {
    id: '2-3',
    source: '2',
    target: '3',
    targetHandle: 'parent',
  },
];

export const initiialNodes: Node[] = [
  {
    id: '1',
    type: 'personNode',
    data: new Person('Stonebeard', ''),
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'personNode',
    data: NewMotherNode('Stonebeard', 'Wife of Stonebeard'),
    position: { x: 250, y: 0 },
  },
  {
    id: '3',
    type: 'personNode',
    data: new Person('Stonebeard', 'First son of Stonebeard'),
    position: { x: 250, y: 250 },
  },
];
