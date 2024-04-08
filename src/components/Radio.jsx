import './Radio.css'
export default function Radio({ selectedValue, value, handleChange }) {
	return (
		<label
			className={
				selectedValue === value
					? 'relative size-10 rounded-full bg-MediumGrey'
					: 'relative size-10 rounded-full bg-White  bg-opacity-5 transition-all duration-300 hover:bg-Orange'
			}
		>
			<span className={selectedValue === value ? 'text-White transition-all duration-300' : 'transition-all duration-300'}>{value}</span>
			<input
				type="radio"
				name="selection"
				onChange={handleChange}
				value={value}
				checked={selectedValue === value}
				className="invisible"
			/>
		</label>
	)
}
