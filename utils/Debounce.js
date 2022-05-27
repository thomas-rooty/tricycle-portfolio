export const Debounce = (func, wait, immediate, context) => {
	let result;
	let timeout = null;
	return function() {
		let ctx = context || this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) result = func.apply(ctx, args);
		};
		let callNow = immediate && !timeout;
		// Tant que la fonction est appelée, on reset le timeout.
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) result = func.apply(ctx, args);
		return result;
	};
}