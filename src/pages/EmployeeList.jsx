import { useState, useMemo } from 'react';
import styles from '../styles/EmployeeList.module.scss'

function EmployeeList() {

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const employees = JSON.parse(localStorage.getItem('employees'));

  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      const values = Object.values(emp).join(' ').toLowerCase();
      return values.includes(searchTerm.toLowerCase());
    });
  }, [employees, searchTerm]);
    
  const totalPages = Math.ceil(filteredEmployees.length / entriesPerPage);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const startIndex = (currentPage - 1) * entriesPerPage + 1;
  const endIndex = Math.min(startIndex + entriesPerPage - 1, filteredEmployees.length);

  return (
    <div className={styles.employeeList}>
      <h2 className={styles.employeeList__title}>Current Employees</h2>

      <div className={styles.employeeList__controls}>
        <label htmlFor="entries">
          Show&nbsp;
          <select id="entries" value={entriesPerPage} onChange={handleEntriesChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          &nbsp;entries
        </label>

        <label htmlFor="search">
          Search:&nbsp;
          <input
            type="text"
            id="search" 
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.employeeList__searchInput}
          />
        </label>
      </div>

      {filteredEmployees.length === 0 ? (
        <p className={styles.employeeList__empty}>No employees found.</p>
      ) : (
        <>
          <div className={styles.employeeList__tableWrapper}>
            <table className={styles.employeeList__table}>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Start Date</th>
                  <th>Department</th>
                  <th>Date of Birth</th>
                  <th>Street</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip Code</th>
                </tr>
              </thead>
              <tbody>
                {paginatedEmployees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.birthDate}</td>
                    <td>{employee.street}</td>
                    <td>{employee.city}</td>
                    <td>{employee.state}</td>
                    <td>{employee.zipCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.employeeList__footer}>
            <span>
              Showing {startIndex} to {endIndex} of {filteredEmployees.length} entries
            </span>
            <div className={styles.employeeList__pagination}>
              <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
              <span className={styles.employeeList__pageNumber}> {currentPage} </span>
              <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default EmployeeList