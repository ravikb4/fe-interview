import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<MyComponent />
			<p>
				<span>Value of Checkbox: </span> <br />
				<span>Value of Radio options: </span> <br />
				<span>Value of Text input: </span> <br />
			</p>
		</>
	)
}

export default App
