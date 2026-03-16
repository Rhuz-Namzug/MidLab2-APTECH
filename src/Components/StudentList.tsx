import { Link } from "react-router-dom";
import { Student } from "../types/Student";
import "./StudentList.css";

interface Props {
  students: Student[];
}

function StudentList({ students }: Props) {

  return (
    <div className="student-list">

      {students.map((student) => (
        <div className="student-item" key={student.id}>
          <p>{student.name}</p>
          <Link to={`/student/${student.id}`}>Details</Link>
        </div>
      ))}

    </div>
  );
}

export default StudentList;