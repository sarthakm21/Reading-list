const { v1: uuidv1 } = require('uuid');

export const BookReducer = (state, action) => {
	switch (action.type) {
		case 'addBook':
			return [
				...state,
				{
					title: action.book.title,
					author: action.book.author,
					id: uuidv1()
				}
			];
		case 'removeBook':
			return state.filter((book) => book.id !== action.id);

		default:
			return state;
	}
};
