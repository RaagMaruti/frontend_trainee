import { useForm } from "react-hook-form";
import "./Form.css";

export default function App() {
	const {
		register,
		formState: { errors },
		setValue,
		setError,
		clearErrors,
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => console.log(data);

	const handleChange = (e) => {
		let { name, value } = e.target;

		if (value === "") {
			setError(name, { type: "required", message: "required field" });
		} else {
			clearErrors(name);
			if (name === "firstName" || name === "lastName") {
				value = value.replace(/^[^a-zA-Z]$/g, "");
			} else if (name === "email") {
				const pattern = /^\S+@\S+\.\S+$/;
				if (!pattern.test(value)) {
					setError("email", {
						type: "invalid",
						message: "invalid email address",
					});
				}
			} else if (name === "phone") {
				value = value.replace(/^[^0-9]$/g, "");
				const pattern = /^[0-9]{8,15}$/;
				if (!pattern.test(value)) {
					setError("phone", {
						type: "invalid",
						message: "invalid phone number",
					});
				}
			}
			setValue(name, value);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>First Name *</label>
			<input
				{...register("firstName", {
					required: "required field",
					maxLength: 50,
				})}
				onChange={handleChange}
				onBlur={handleChange}
				aria-invalid={errors.firstName ? "true" : "false"}
			/>
			<span role="alert">{errors.firstName?.message}</span>
			<br />

			<label>Last Name *</label>
			<input
				{...register("lastName", {
					required: { value: true, message: "required field" },
					maxLength: 50,
				})}
				onChange={handleChange}
				onBlur={handleChange}
				aria-invalid={errors.lastName ? "true" : "false"}
			/>
			<span role="alert">{errors.lastName?.message}</span>
			<br />

			<label>Email Address *</label>
			<input
				{...register("email", {
					required: { value: true, message: "required field" },
					maxLength: 50,
					pattern: {
						value: /^\S+@\S+\.\S+$/,
						message: "invalid email address",
					},
				})}
				aria-invalid={errors.email ? "true" : "false"}
				onChange={handleChange}
				onBlur={handleChange}
			/>
			<span role="alert">{errors.email?.message}</span>
			<br />

			<label>Phone Number *</label>
			<input
				{...register("phone", {
					required: { value: true, message: "required field" },
					pattern: {
						value: /^[0-9]{8,15}$/,
						message: "invalid phone number",
					},
				})}
				aria-invalid={errors.phone ? "true" : "false"}
				onChange={handleChange}
				onBlur={handleChange}
			/>
			<span role="alert">{errors.phone?.message}</span>
			<br />

			<label>How Did You Hear About Us?</label>
			<input {...register("hear", { maxLength: 100 })} />
			<br />

			<label>Company</label>
			<input {...register("company", { maxLength: 50 })} />
			<br />

			<label>What Can We Help You With?</label>
			<br />
			<textarea rows="5" cols="50" {...register("help", { maxLength: 500 })} />
			<br />

			<input
				type="checkbox"
				{...register("consent", { required: "please tick the checkbox" })}
				aria-invalid={errors.consent ? "true" : "false"}
			/>
			<label>
				I consent to processing of my personal data entered above for Maruti
				Techlabs to contact me.
			</label>
			<span role="alert">{errors.consent?.message}</span>
			<br />

			<input type="submit" />
		</form>
	);
}
