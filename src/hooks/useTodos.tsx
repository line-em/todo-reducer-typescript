import { useState, useReducer } from "react";
import { todoReducer, type Todo } from "../reducers/todoReducer";

type AddTodo = (e: React.FormEvent<HTMLFormElement>) => void;
type CompleteTodo = (id: string) => void;
type DeleteTodo = (id: string) => void;

const useTodos = (): [
	AddTodo,
	DeleteTodo,
	CompleteTodo,
	Todo[],
	string,
	React.Dispatch<React.SetStateAction<string>>
] => {
	const [todo, setTodo] = useState("");
	const [state, dispatch] = useReducer(todoReducer, []);

	const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({
			type: "ADD",
			text: todo
		});
		setTodo("");
	};

	const completeTodo = (id: string) =>
		dispatch({
			type: "TOGGLE",
			id: id
		});

	const deleteTodo = (id: string) =>
		dispatch({
			type: "DELETE",
			id: id
		});

	return [addTodo, deleteTodo, completeTodo, state, todo, setTodo];
};

export default useTodos;
