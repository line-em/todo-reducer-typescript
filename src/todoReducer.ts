export type ActionType = "ADD" | "TOGGLE" | "DELETE";

export interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

export interface TodoAction extends Todo {
	type: ActionType;
}

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
	switch (action.type) {
		case "ADD":
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		default:
			return state;
	}
};
