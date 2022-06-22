import ReactFlow, { Controls, Edge, MiniMap, Node } from 'react-flow-renderer';

type LineageGraphProps = {
  nodes: Node[];
  edges: Edge[];
};

export default function LineageGraph({ nodes, edges }: LineageGraphProps) {
  return (
    <ReactFlow nodes={nodes} edges={edges} fitView>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
