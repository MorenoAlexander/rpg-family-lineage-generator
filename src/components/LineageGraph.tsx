import ReactFlow, { Controls, MiniMap, NodeTypes } from 'react-flow-renderer';
import useStore from '../lib/store';

type LineageGraphProps = {
  nodeTypes: NodeTypes | undefined;
};

export default function LineageGraph({ nodeTypes }: LineageGraphProps) {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));
  return (
    <ReactFlow nodes={nodes} edges={edges} fitView nodeTypes={nodeTypes}>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
