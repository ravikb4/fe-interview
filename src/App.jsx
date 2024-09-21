import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
// import Loading from './components/Loading.js'
import MarkdownPreview from './components/MarkdownPreview'
import { useState } from 'react'

function App() {
	const [showPreview, setShowPreview] = useState(false)
	const [markdown, setMarkdown] = useState('Hello, **world**!')
	return (
		<>
			<div>
				<div>
					<a href="https://vitejs.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1>Vite + React</h1>
				<p>Section 1</p>
				<MyComponent />
				<p>
					<span>Value of Checkbox: </span> <br />
					<span>Value of Radio options: </span> <br />
					<span>Value of Text input: </span> <br />
				</p>
			</div>
			<br />
			<br />
			<div>
				<span>Section 2</span>
				<br />
				<textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
				<br />
				<label>
					<input type="checkbox" checked={showPreview} onChange={(e) => setShowPreview(e.target.checked)} />
					Show preview
				</label>
				<hr />
				{showPreview && (
					<>
						<h2>Preview</h2>
						<MarkdownPreview markdown={markdown} />
					</>
				)}
			</div>
		</>
	)
}

export default App
