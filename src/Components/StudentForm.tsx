import { useState } from "react";
import "./StudentForm.css";

interface FormData {
  name: string;
  email: string;
  course: string;
}

function StudentForm() {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Student Registered!");
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
      />

      <button type="submit">Register</button>

    </form>
  );
}

export default StudentForm;