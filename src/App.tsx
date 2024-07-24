import { useReducer, useState } from "react";
import "./App.css";
import { ActionType, todoReducer } from "./todoReducer";

function App() {
	const [task, setTask] = useState<string>("");
	const [state, dispatch] = useReducer(todoReducer, []);

	const handleDispatch = (e: React.FormEvent<HTMLFormElement>, action: ActionType) => {
		e.preventDefault();
		dispatch({
			type: action,
			text: task,
			completed: false,
			id: crypto.randomUUID()
		});
		setTask("");
	};

	return (
		<main>
			<form onSubmit={(e) => handleDispatch(e, "ADD")}>
				<label htmlFor="todo-input">What needs to be done?</label>
				<input
					id="todo-input"
					onChange={(e) => setTask(e.target.value)}
					value={task}
				/>
				<ol>
					{state.map((item) => (
						<li key={item.id}>{item.text}</li>
					))}
				</ol>
			</form>
		</main>
	);
}

export default App;
