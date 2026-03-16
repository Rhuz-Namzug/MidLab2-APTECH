import { useForm } from "react-hook-form";

function StudentForm() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Student Registered!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label>Name</label>
        <input {...register("name", { required: true })} />
        {errors.name && <p>Name is required</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i
          })}
        />
        {errors.email && <p>Valid email required</p>}
      </div>

      <div>
        <label>Course</label>
        <input {...register("course", { required: true })} />
        {errors.course && <p>Course is required</p>}
      </div>

      <button type="submit">Submit</button>

    </form>
  );
}

export default StudentForm;