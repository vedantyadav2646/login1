import React from 'react';
import style from './styles/style.module.css';
import axios from 'axios';
function PhoneInput(props) {
	const { value, handleChange, hashHandleChange } = props;

	const Continue = (e) => {
		axios
			.post('http://localhost:4000/sendOTP', {
				phone: `${value.phone}`
			})
			.then(function(res) {
				console.log(res.data.otp);
				const hash = res.data.hash;
				hashHandleChange(hash);
			});

		e.preventDefault();
		props.nextStep();
	};
	return (
		<div className={style}>
			<div className={style.background}>
				<div className={style.container}>
					<div className={style.heading}>1Doct</div>
					
					<div className={style.input_text}>Phone number:</div>
					<div className={style.input_container}>
						<input
							type="tel"
							value={value.phone}
							onChange={handleChange('phone')}
							placeholder="Enter the Phone No."
							className={style.input}
						/>
					</div>
					<button onClick={Continue} className={style.submit}>
						Send OTP
					</button>
				</div>
			</div>
		</div>
	);
}

export default PhoneInput;