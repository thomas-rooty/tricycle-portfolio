import {Tree} from './Tree';

const Trees = () => {
    return (
        <group>
            <Tree position={[-5, 0, -5]}/>
            <Tree position={[3, 0, -5]}/>
            <Tree position={[-2, 0, 5]}/>
            <Tree position={[5, 0, 2]}/>
        </group>
    );
}

export default Trees;