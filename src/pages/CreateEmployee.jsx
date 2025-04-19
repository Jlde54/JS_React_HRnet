import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/CreateEmployee.module.scss'
import {states, departments} from '../data/data.js'


function CreateEmployee () {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: formData.birthDate,
        startDate: formData.startDate,
        department: formData.department,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    navigate("/employees")
  }

  return (
    <div className={styles.createEmployee}>
      <h2 className={styles.createEmployee__title}>Create Employee</h2>
      <form className={styles.createEmployee__form} onSubmit={handleSubmit}>
          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="firstname">First Name</label>
            <input 
              type="text" 
              id="firstname"
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              required />
          </div>

          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="lastname">Last Name</label>
            <input 
              type="text" 
              id="lastname"
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              required />
          </div>

          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="birthDate">Date of Birth</label>
            <input 
              type="date" 
              id="birthDate"
              name="birthDate" 
              value={formData.birthDate} 
              onChange={handleChange} 
              required />
          </div>

          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="startDate">Start Date</label>
            <input 
              type="date" 
              id="startDate" 
              name="startDate" 
              value={formData.startDate} 
              onChange={handleChange} 
              required />
          </div>

          <fieldset className={styles.createEmployee__addressFieldset}>
            <legend>Address</legend>
            <div className={styles.createEmployee__formGroup}>
              <label htmlFor="street">Street</label>
              <input 
                type="text" 
                id="street"
                name="street" 
                value={formData.street} 
                onChange={handleChange} 
                required />
            </div>

            <div className={styles.createEmployee__formGroup}>
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                id="city"
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                required />
            </div>

            <div className={styles.createEmployee__formGroup}>
              <label htmlFor="state">State</label>
              <select 
                id="state"
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                required>
                  <option value="">-- Choose a state --</option>
                  {states.map((state) => (
                    <option key={state.name} value={state.name}>{state.name}</option>
                    ))}
              </select>
            </div>

            <div className={styles.createEmployee__formGroup}>
              <label htmlFor="zipCode">Zip Code</label>
              <input 
                type="number" 
                id="zipCode"
                name="zipCode" 
                value={formData.zipCode} 
                onChange={handleChange} 
                required />
            </div>
          </fieldset>

          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="department">Department</label>
            <select
              id="department"
              name="department" 
              value={formData.department} 
              onChange={handleChange} 
              required>
                <option value="">-- Choose a department --</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
            </select>
        </div>
        <button className={styles.createEmployee__submitButton} type="submit">Save</button>
      </form>
    </div>
  )
}

export default CreateEmployee