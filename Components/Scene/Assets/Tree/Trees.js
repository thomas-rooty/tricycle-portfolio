import {Tree} from './Tree';

const Trees = () => {
    // Generate some random positioned trees
    const trees = [];
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * 10 - 5;
        const z = Math.random() * 10 - 5;
        trees.push(
            <Tree key={i} position={[x, 0, z]}/>
        );
    }

    // Put a tree at spawn
    trees.push(
        <Tree key={'spawn'} position={[0, 5, 0]}/>
    );
    return (
        <group>
            {trees}
        </group>
    );
}

export default Trees;