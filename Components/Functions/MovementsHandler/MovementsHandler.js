export const MovementsHandler = (setMeshPosition, meshPosition) => {
    return (event) => {
        // Handle cases where keys Z, Q, S, D are pressed individually
        switch (event.key) {
            case 'z':
                setMeshPosition([meshPosition[0], meshPosition[1], meshPosition[2] + 0.1]);
                break;
            case 'q':
                setMeshPosition([meshPosition[0] + 0.1, meshPosition[1], meshPosition[2]]);
                break;
            case 's':
                setMeshPosition([meshPosition[0], meshPosition[1], meshPosition[2] - 0.1]);
                break;
            case 'd':
                setMeshPosition([meshPosition[0] - 0.1, meshPosition[1], meshPosition[2]]);
                break;
            default:
                break;
        }
    };
}