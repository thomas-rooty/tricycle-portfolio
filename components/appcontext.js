import React from "react";

const Appcontext = React.createContext();

export const AppProvider = ({children}) => {
	const [hoverableObjects, setHoverableObjects] = React.useState([]);
	const addObjectAsHoverable = (object) => {
		const data = hoverableObjects.filter(element => element.uuid === object.uuid);
		if (data.length === 0) {
			setHoverableObjects([...hoverableObjects, object]);
		}
	}

	// Handles the current hovered object by the tricycle
	const [hoveredObject, setHoveredObject] = React.useState(false);
	const handleHover = (object) => {
		setHoveredObject(object);
	}

	return (
		<Appcontext.Provider value={{hoverableObjects, addObjectAsHoverable, hoveredObject, handleHover}}>
			{children}
		</Appcontext.Provider>
	)
}

export default Appcontext;