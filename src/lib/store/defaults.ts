import { Edge, Node } from 'reactflow';
import { generateOffspring, newOriginalPerson, Person } from '../models/Person';

const father = newOriginalPerson('Stonebeard', '', true, '1');
const mother = newOriginalPerson(
  'Stonebeard',
  'First Wife of Stonebeard',
  false,
  '2',
);

export const initialPerson: Person[] = [
  father,
  mother,
  generateOffspring(
    father,
    mother,
    'Stonebeard',
    'First Son of Stonebeard',
    true,
  ),
];
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
    data: newOriginalPerson('Stonebeard', ''),
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'personNode',
    data: {
      firstName: 'Stonebeard',
      lastName: 'First Wife of Stonebeard',
      fatherId: '1',
      motherId: '2',
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '3',
    type: 'personNode',
    data: newOriginalPerson('Stonebeard', 'First son of Stonebeard'),
    position: { x: 250, y: 250 },
  },
];
