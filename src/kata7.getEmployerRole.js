const getEmployerRole = (employeeName, employees) => {
  const findEmployee = employees.find(
    (employee) => employee.name === employeeName
  );
  return findEmployee.role;
};

module.exports = getEmployerRole;
