import ReactFlow, {
  Controls,
  Edge,
  MiniMap,
  Node,
  NodeTypes,
} from 'react-flow-renderer';

type LineageGraphProps = {
  nodes: Node[];
  edges: Edge[];
  nodeTypes: NodeTypes | undefined;
};

export default function LineageGraph({
  nodes,
  edges,
  nodeTypes,
}: LineageGraphProps) {
  return (
    <ReactFlow nodes={nodes} edges={edges} fitView nodeTypes={nodeTypes}>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
