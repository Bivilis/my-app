import React, { useState } from 'react'

const TaskForm = ({ addTask }) => {
	const [taskText, setTaskText] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		if (taskText.trim()) {
			addTask(taskText)
			setTaskText('')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={taskText}
				onChange={e => setTaskText(e.target.value)}
				placeholder='Добавить задачу'
			/>
			<button type='submit'>Добавить</button>
		</form>
	)
}

export default TaskForm
