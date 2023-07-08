import create from 'zustand';

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from 'reactflow';

import { newOriginalPerson, Person } from '../models/Person';
import { initialEdges, initiialNodes } from './defaults';

type RFState = {
  persons: Map<string, Person>;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
};

const useStore = create<RFState>((set, get) => ({
  persons: new Map<string, Person>(),
  nodes: initiialNodes,
  edges: initialEdges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  generateOffSpring: (personId: string) => {
    const map = get().persons;
    const person = map.get(personId);
    if (person?.spouseId && map.has(person.spouseId)) {
      const spouse = map.get(person.spouseId)!;
      if (
        (spouse.isMale && !person.isMale) ||
        (!spouse.isMale && person.isMale)
      ) {
        // generate the new offspring
        const newPerson = newOriginalPerson(
          `${person.id}-${spouse.id}-${person.children.length}`,
        );
      }
    }
  },
}));

export default useStore;
