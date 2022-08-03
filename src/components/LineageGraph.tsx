import { useContext } from 'react';
import ReactFlow, {
  Controls,
  MiniMap,
  NodeTypes,
} from 'react-flow-renderer';
import PersonContext from '../PersonContext';

type LineageGraphProps = {
  nodeTypes: NodeTypes | undefined;
};

export default function LineageGraph({
  nodeTypes,
}: LineageGraphProps) {

  const {nodeGraph, edgeGraph} = useContext(PersonContext);

  return (
    <ReactFlow nodes={nodeGraph} edges={edgeGraph} fitView nodeTypes={nodeTypes}>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
