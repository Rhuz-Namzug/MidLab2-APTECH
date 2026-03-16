import { useParams } from "react-router-dom";
import "./StudentDetails.css";

function StudentDetails() {

  const { id } = useParams();

  const students = [
    { id: 1, name: "Rhuzl", email: "Rhuzl@gmail.com", course: "IT" },
    { id: 2, name: "Cyrus", email: "Cyrus@gmail.com", course: "CS" }
  ];

  const student = students.find((s) => s.id === id);

  if (!student) {
    return <h2 className="not-found">Student not found</h2>;
  }

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