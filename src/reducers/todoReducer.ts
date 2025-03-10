export type ActionType = "ADD" | "TOGGLE" | "DELETE";

export interface Todo {
	id?: string;
	text?: string;
	completed?: boolean;
}

export interface TodoAction extends Todo {
	type: ActionType;
}

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
	console.log("State before ADD:", state);
	switch (action.type) {
		case "ADD":
			return [
				...state,
				{
					id: crypto.randomUUID(),
					text: action.text,
					completed: false
				}
			];
		case "TOGGLE":
			return state.map((item) =>
				item.id === action.id ? { ...item, completed: !item.completed } : item
			);
		case "DELETE":
			return state.filter((item) => item.id !== action.id);
		default:
			return state;
	}
};
