import React, { useState } from "react";

const initialStudents = [
  { id: 1, name: "Sakshi", present: true },
  { id: 2, name: "Rahul", present: false },
  { id: 3, name: "Anita", present: true },
  { id: 4, name: "Karan", present: false },
  { id: 5, name: "Priya", present: true },
];

function AttendanceManager() {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState("All");

  const toggleAttendance = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updatedStudents);
  };

  const filteredStudents = students.filter((student) => {
    if (filter === "All") return true;
    if (filter === "Present") return student.present;
    if (filter === "Absent") return !student.present;
    return true;
  });

  const totalPresent = students.filter((s) => s.present).length;

  return (
    <div>
      <label>
        Filter:{" "}
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: 6 }}>
          <option>All</option>
          <option>Present</option>
          <option>Absent</option>
        </select>
      </label>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {filteredStudents.length === 0 ? (
          <li>No students found.</li>
        ) : (
          filteredStudents.map(({ id, name, present }) => (
            <li
              key={id}
              style={{
                marginBottom: 12,
                padding: 10,
                borderRadius: 6,
                backgroundColor: present ? "#d4edda" : "#f8d7da",
                color: present ? "#155724" : "#721c24",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {name} — {present ? "Present" : "Absent"}
              </span>
              <button onClick={() => toggleAttendance(id)} style={{ padding: "6px 12px" }}>
                Toggle
              </button>
            </li>
          ))
        )}
      </ul>

      <p style={{ marginTop: 20, fontWeight: "bold" }}>
        Total Present Students: {totalPresent}
      </p>
    </div>
  );
}

export default AttendanceManager;
