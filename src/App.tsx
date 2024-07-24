import { useReducer, useState } from "react";
import "./App.css";
import { type ActionType, todoReducer } from "./todoReducer";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Trash2 } from "lucide-react";

function App() {
	const [animationParent] = useAutoAnimate();
	const [task, setTask] = useState<string>("");
	const [state, dispatch] = useReducer(todoReducer, []);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>, action: ActionType) => {
		e.preventDefault();
		dispatch({
			type: action,
			text: task
		});
		setTask("");
	};

	return (
		<main>
			<form onSubmit={(e) => handleSubmit(e, "ADD")}>
				<label htmlFor="todo-input">What needs to be done?</label>
				<input
					id="todo-input"
					onChange={(e) => setTask(e.target.value)}
					value={task}
				/>
				<ol ref={animationParent}>
					{state.map((item) => (
						<li key={item.id}>
							<input
								type="checkbox"
								checked={item.completed}
								id={item.id}
								onChange={() =>
									dispatch({
										type: "TOGGLE",
										id: item.id
									})
								}
							/>
							<label htmlFor={item.id}>{item.text}</label>
							<button
								type="button"
								onClick={() =>
									dispatch({
										type: "DELETE",
										id: item.id
									})
								}
							>
								<Trash2 color="red" />
							</button>
						</li>
					))}
				</ol>
			</form>
		</main>
	);
}

export default App;
