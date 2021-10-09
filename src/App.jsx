import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskDetails from './components/TaskDetails';

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: '1',
			title: 'Estudar React',
			completed: false,
		},
		{
			id: '2',
			title: 'Ler Algo',
			completed: true,
		},
	]);

	useEffect(() => {
		const fetchTasks = async () => {
			const {data} = await axios.get(
				"https://jsonplaceholder.cypress.io/todos?_limit=10"
			);

			setTasks(data)
		}
		
		fetchTasks();
	}, []);

	const handleTaskAddition = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				id: Math.random(10),
				title: taskTitle,
				completed: false,
			}
		];

		setTasks(newTasks);
	}

	const handleTaskDelete = (taskId) => {
		const newTasks = tasks.filter(
			task => task.id !== taskId
		);

		setTasks(newTasks);
	}

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map(task => {
			if (task.id === taskId)
				return {...task, completed: !task.completed};

			return task;
		});

		setTasks(newTasks);
	}

	return (
		<Router>
			<div className="container">
				<Header />
				<Route
					path="/"
					exact
					render={
						() => (
							<>
								<AddTask handleTaskAddition={handleTaskAddition} />
								<Tasks
									tasks={tasks}
									handleTaskClick={handleTaskClick}
									handleTaskDelete={handleTaskDelete}
								/>
							</>
						)
					}
				/>
				<Route path="/:taskTitle" exact component={TaskDetails} />
			</div> 
		</Router>
	);
}

export default App;