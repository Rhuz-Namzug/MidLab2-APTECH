import { useParams } from "react-router-dom";
import { Student } from "../types/Student";
import "./StudentDetails.css";

function StudentDetails() {

  const { id } = useParams<{ id: string }>();

  const students: Student[] = [
    { id: "1", name: "Juan Dela Cruz", email: "juan@email.com", course: "BSIT" },
    { id: "2", name: "Maria Santos", email: "maria@email.com", course: "BSCS" }
  ];

  const student = students.find((s) => s.id === id);

  if (!student) return <h2>Student not found</h2>;

  return (
    <div className="details-container">

      <h2>Student Details</h2>

      <div className="details-card">
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
      </div>

    </div>
  );
}

export default StudentDetails;