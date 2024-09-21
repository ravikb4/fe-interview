import { useState } from 'react'

const MyComponent = () => {
	const [isChecked, setIsChecked] = useState(false)
	const [selectedOption, setSelectedOption] = useState('')
	const [textInput, setTextInput] = useState('')

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked)
	}

	const handleRadioChange = (event) => {
		setSelectedOption(event.target.value)
	}

	const handleInputChange = (event) => {
		setTextInput(event.target.value)
	}

	return (
		<div>
			<label>
				<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
				Checkbox
			</label>
			<br />
			<label>
				<input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={handleRadioChange} />
				Option 1
			</label>
			<label>
				<input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={handleRadioChange} />
				Option 2
			</label>
			<br />
			<input type="text" value={textInput} onChange={handleInputChange} />
		</div>
	)
}

export default MyComponent
