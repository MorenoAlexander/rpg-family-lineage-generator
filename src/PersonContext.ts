import {createContext} from 'react';
import {Edge, Node} from 'react-flow-renderer';




type IPersonContext = {

  edgeGraph: Edge[]
  nodeGraph: Node[]
};


const initialPersonContext : IPersonContext = {
  edgeGraph: [],
  nodeGraph: []
}


const PersonContext = createContext<IPersonContext>(initialPersonContext);

export default PersonContext;


