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

export const initiialNodes: Person[] = [
  new Person('1', 'Stonebeard', ''),
  new Person('2', 'Stonebeard', 'Wife of Stonebeard'),
  new Person('3', 'Stonebeard', 'Son of Stonebeard'),
];
