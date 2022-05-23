export const handleKeyboard = () => {
    /* Keyboard events handler */
    let keys = {
        up: false,
        down: false,
        left: false,
        right: false,
        shift: false,
    };

    const updateKeyStates = (key, value) => {
        switch (key) {
            case 'z' :
            case 'w' :
            case 'ArrowUp' :
                keys.up = value;
                break;
            case 's':
            case 'ArrowDown':
                keys.down = value;
                break;
            case 'q':
            case 'a':
            case 'ArrowLeft':
                keys.left = value;
                break;
            case 'd':
            case 'ArrowRight':
                keys.right = value;
                break;
            case 'Shift':
                keys.sprint = value;
                break;
        }
    };
    return {keys, updateKeyStates};
};

export const addEventListeners = (updateKeyStates) => {
    document.addEventListener('keydown', (e) => {
        updateKeyStates(e.key, true);
    });
    document.addEventListener('keyup', (e) => {
        updateKeyStates(e.key, false);
    });
};