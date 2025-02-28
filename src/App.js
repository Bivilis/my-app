import React, { useState, useEffect } from 'react' // Импорт хуков
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

const App = () => {
	const [tasks, setTasks] = useState([])

	// Загрузка задач из API
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(response => response.json())
			.then(data => setTasks(data))
	}, [])

	// Добавление задачи
	const addTask = taskText => {
		const newTask = { id: Date.now(), text: taskText, completed: false }
		setTasks([...tasks, newTask])
	}

	// Удаление задачи
	const removeTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	return (
		<div>
			<h1>Менеджер задач</h1>
			<TaskForm addTask={addTask} />
			<TaskList tasks={tasks} removeTask={removeTask} />
		</div>
	)
}

export default App
