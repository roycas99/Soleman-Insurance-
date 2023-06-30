function ScheduleTable() {
  const timeSlots = ["1:00 pm", "2:00 Pm"];
  const employees = [
    { id: 1, name: "Abshir Mohamed" },
    { id: 2, name: "Omar Ahmed" },
  ];

  return (
    <>
      <h2>Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            {employees.map((employee) => (
              <td key={employee.id}>{employee.name}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((timeSlot) => (
            <tr key={timeSlot}>
              <td>{timeSlot}</td>
              {employees.map((employee) => (
                <td key={employee.id}>Shift</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ScheduleTable;
