import "./App.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Trash2 } from "lucide-react";
import useTodos from "./hooks/useTodos";

function App() {
	const [animationParent] = useAutoAnimate();
	const [addTodo, deleteTodo, completeTodo, state, todo, setTodo] = useTodos();

	return (
		<main>
			<form onSubmit={(e) => addTodo(e)}>
				<label htmlFor="todo-input">What needs to be done?</label>
				<input
					id="todo-input"
					onChange={(e) => setTodo(e.target.value)}
					value={todo}
				/>
				<ol ref={animationParent}>
					{state.map((item) => (
						<li key={item.id}>
							<input
								type="checkbox"
								checked={item.completed}
								id={item.id}
								onChange={() => completeTodo(item.id ?? "")}
							/>
							<label htmlFor={item.id}>{item.text}</label>
							<button
								type="button"
								onClick={() => deleteTodo(item.id ?? "")}
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
