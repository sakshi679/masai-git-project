import AttendanceManager from "./components/AttendanceManager";

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Attendance Manager</h1>
      <AttendanceManager />
    </div>
  );
}
