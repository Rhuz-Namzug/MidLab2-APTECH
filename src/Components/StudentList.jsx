import { Link } from "react-router-dom";

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name}</p>
          <Link to={`/student/${student.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default StudentList;