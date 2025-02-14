import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "300px", margin: "auto" }}
    >
      <div>
        <label>Name:</label>
        <input {...register("name", { required: "Name is required" })} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Must be at least 18" },
          })}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
