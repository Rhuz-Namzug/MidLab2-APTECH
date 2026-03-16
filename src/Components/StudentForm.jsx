import { useState } from "react";
import "./StudentForm.css";

function StudentForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    validate(name, value);
  };

  const validate = (name, value) => {

    let newErrors = { ...errors };

    if (name === "name") {
      newErrors.name = value ? "" : "Name is required";
    }

    if (name === "email") {
      if (!value) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Invalid email format";
      } else {
        newErrors.email = "";
      }
    }

    if (name === "course") {
      newErrors.course = value ? "" : "Course is required";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Registered!");
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.course &&
    !errors.name &&
    !errors.email &&
    !errors.course;

  return (
    <div className="form-container">

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit} className="student-form">

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
          {errors.course && <p className="error">{errors.course}</p>}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Register Student
        </button>

      </form>

    </div>
  );
}

export default StudentForm;