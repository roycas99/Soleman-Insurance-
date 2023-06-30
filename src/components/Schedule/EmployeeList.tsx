function EmployeeList() {
  const employee = [
    { id: 1, name: "Abshir Mohamed" },
    { id: 2, name: "Omar Ahmed" },
  ];

  return (
    <>
      <h2>Employees</h2>
      <ul>
        {employee.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </>
  );
}

export default EmployeeList;
