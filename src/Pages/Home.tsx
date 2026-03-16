import { useState } from "react";
import StudentList from "../components/StudentList";
import { Student } from "../types/Student";

function Home() {

  const [students] = useState<Student[]>([
    { id: 1, name: "Rhuzl", email: "Rhuzl@gmail.com", course: "IT" },
    { id: 2, name: "Cyrus", email: "Cyrus@gmail.com", course: "CS" }
  ]);

  return (
    <div>
      <h1>Home</h1>
      <StudentList students={students} />
    </div>
  );
}

export default Home;



