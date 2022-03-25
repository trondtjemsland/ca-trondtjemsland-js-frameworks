import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function contact() {
	const SignupSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		lastName: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		text: Yup.string().min(10, 'Too Short!'),
	});

	return (
		<div className="contactPage">
			<h1 className="h1Contact">Signup</h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					text: '',
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					// same shape as initial values
					console.log(values);
				}}>
				{({ errors, touched }) => (
					<Form>
						<Field className="contactForm" name="firstName" />
						{errors.firstName && touched.firstName ? (
							<div>{errors.firstName}</div>
						) : null}
						<Field className="contactForm" name="lastName" />
						{errors.lastName && touched.lastName ? (
							<div>{errors.lastName}</div>
						) : null}
						<Field className="contactForm" name="email" type="email" />
						{errors.email && touched.email ? <div>{errors.email}</div> : null}

						<Field className="contactForm" name="color" as="select">
							<option value="red">Red</option>
							<option value="green">Green</option>
							<option value="blue">Blue</option>
						</Field>

						<Field
							placeholder="Write your message"
							className="contactForm"
							as="textarea"
							name="text"></Field>
						{errors.text && touched.text ? <div>{errors.text}</div> : null}
						<button className="submitButton" type="submit">
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default contact;
