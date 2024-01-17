import { ChangeEvent } from 'react'
import './App.css'
import { useSignal } from '@preact/signals-react'

function App() {
	const data = useSignal('')

	const handleChange = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>) => {
		data.value = value
	}

	return (
		<div className='MainPage'>
			<input onChange={handleChange} />
		</div>
	)
}

export default App
