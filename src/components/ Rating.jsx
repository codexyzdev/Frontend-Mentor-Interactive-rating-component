import { useState } from 'react'
import Radio from './Radio'
export default function Rating() {
	const [done, setDone] = useState(false)
	const [selectedValue, setSelectedValue] = useState('')
	const handleChange = (event) => {
		setSelectedValue(event.target.value)
	}
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				if (!selectedValue == '') {
					setDone(true)
				}
			}}
			className="mx-6 h-[360px] w-[328px] rounded-2xl bg-DarkBlue p-7 text-White md:mx-0"
		>
			{done ? (
				<div>
					<img
						src="images/illustration-thank-you.svg"
						alt=" illustration thank you"
						className="mx-auto h-[108px] w-[162px]"
					/>
					<div className="mx-auto my-6 w-max rounded-3xl bg-White bg-opacity-5 px-4 py-1 text-Orange">
						You selected {selectedValue} out of 5
					</div>
					<h2 className="text-center text-2xl font-bold">Thank you!</h2>
					<p className="mt-3 text-center text-[14px] opacity-40">
						We appreciate you taking the time to give a rating. If you ever need more support, don’t
						hesitate to get in touch
					</p>
				</div>
			) : (
				<div>
					<div className="mb-6 flex size-10 justify-center rounded-full bg-White bg-opacity-5">
						<img src="/images/icon-star.svg" alt="icon-star" className=" object-none" />
					</div>
					<h2 className="mb-6 text-2xl "> How did we do?</h2>
					<p className="text-[13px] opacity-40">
						Please let us know how we did with your support request. All feedback is appreciated to
						help us improve our offering!
					</p>
					<div className="mt-6 flex justify-between">
						<Radio selectedValue={selectedValue} handleChange={handleChange} value="1" />
						<Radio selectedValue={selectedValue} handleChange={handleChange} value="2" />
						<Radio selectedValue={selectedValue} handleChange={handleChange} value="3" />
						<Radio selectedValue={selectedValue} handleChange={handleChange} value="4" />
						<Radio selectedValue={selectedValue} handleChange={handleChange} value="5" />
					</div>

					<button type="submit" className="mt-6 w-full rounded-3xl bg-Orange py-2">
						SUBMIT
					</button>
				</div>
			)}
		</form>
	)
}
