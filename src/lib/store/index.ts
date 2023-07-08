import create from 'zustand';

import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';

import { initialEdges, initiialNodes } from './defaults';

type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
};

const useStore = create<RFState>((set, get) => ({
  nodes: initiialNodes.map((person, index) => {
    const node: Node = {
      id: person.id,
      data: person,
      position: { x: index + 1, y: index + 1 },
    };
    return node;
  }),
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
}));

export default useStore;
