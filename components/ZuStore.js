import create from 'zustand';

export const useStore = create((set) => ({
	// Add an object to the hoverable objects array
	hoverableObjects: [],
	addObjectAsHoverable: (object) => {
		//hoverableObjects.filter(element => element.uuid === object.uuid).length === 0 &&
		set(state => {
			if (state.hoverableObjects.find(element => element.uuid === object.uuid)) return;
			return {
				hoverableObjects: state.hoverableObjects.concat(object),
			};
		});
	},

	// Handles the current hovered object by the tricycle
	hoveredObject: null,
	setObjectAsHovered: (object) => {
		set(state => {
			return {
				hoveredObject: object,
			};
		});
	},
}));