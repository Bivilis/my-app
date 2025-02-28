import React from 'react'
import styles from './TaskList.module.css'

const TaskList = ({ tasks, removeTask }) => {
	return (
		<ul className={styles.taskList}>
			{tasks.map(task => (
				<li key={task.id} className={styles.taskItem}>
					{task.text}
					<button onClick={() => removeTask(task.id)}>Удалить</button>
				</li>
			))}
		</ul>
	)
}

export default TaskList
