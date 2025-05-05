import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/employeeSlice'
import styles from '../styles/CreateEmployee.module.scss'
import {states, departments} from '../data/data.js'
// Plug-ins
import DatePicker from 'react-multi-date-picker'
import Select from 'react-select'
import Modal from 'react-modal'

Modal.setAppElement('#root')

/**
 * Employee creation form.
 * Uses react-multi-date-picker, react-select, and react-modal.
 *
 * @component
 * @returns {JSX.Element}
 */
function CreateEmployee () {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: null,
    startDate: null,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: ""
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleChange (name, value) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit (e) {
    e.preventDefault()
    dispatch(addEmployee(formData))
    setModalIsOpen(true)
  }

  function closeModalAndRedirect () {
    setModalIsOpen(false)
    navigate("/Employees")
  }

  const stateSelect = states.map((state) => ({ value: state.abbreviation, label: state.name }))
  const deptSelect = departments.map((dept) => ({ value: dept, label: dept }))

  return (
    <div className={styles.createEmployee}>
      <h2 className={styles.createEmployee__title}>Create Employee</h2>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Employee Created Modal"
        className={styles.createEmployee__modal}
        overlayClassName={styles.createEmployee__modalOverlay}
      >
        <button className={styles.createEmployee__modalClose} onClick={closeModalAndRedirect}>×</button>
        <p>Employee created!</p>
      </Modal>

      <form className={styles.createEmployee__form} onSubmit={handleSubmit}>
          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="firstname">First Name</label>
            <input 
              type="text" 
              id="firstname"
              name="firstName" 
              value={formData.firstName} 
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              required />
          </div>

          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="lastname">Last Name</label>
            <input 
              type="text" 
              id="lastname"
              name="lastName" 
              value={formData.lastName} 
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              required />
          </div>

          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="birthDate">Date of Birth</label>
            <DatePicker
              id="birthDate"
              value={formData.birthDate}
              onChange={(date) => handleChange("birthDate", date.format("YYYY-MM-DD"))}
              format="YYYY-MM-DD"
              required
            />
          </div>

          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              id="startDate"
              value={formData.startDate}
              onChange={(date) => handleChange("startDate", date.format("YYYY-MM-DD"))}
              format="YYYY-MM-DD"
              required
            />
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
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                required />
            </div>

            <div className={styles.createEmployee__formGroup}>
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                id="city"
                name="city" 
                value={formData.city} 
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                required />
            </div>

            <div className={styles.createEmployee__formGroup}>
              <label htmlFor="state">State</label>
              <Select
                className={styles.createEmployee__formGroup_select}
                inputId="state"
                options={stateSelect}
                onChange={(select) => handleChange("state", select.value)}
                value={stateSelect.find(opt => opt.value === formData.state)}
              />
            </div>

            <div className={styles.createEmployee__formGroup}>
              <label htmlFor="zipCode">Zip Code</label>
              <input 
                type="number" 
                id="zipCode"
                name="zipCode" 
                value={formData.zipCode} 
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                required />
            </div>
          </fieldset>

          <div className={styles.createEmployee__formGroup}>
            <label htmlFor="department">Department</label>
            <Select
                className={styles.createEmployee__formGroup_select}
                inputId="department"
                options={deptSelect}
                onChange={(select) => handleChange("department", select.value)}
                value={deptSelect.find(opt => opt.value === formData.department)}
              />
        </div>
        <button className={styles.createEmployee__submitButton} type="submit">Save</button>
      </form>
    </div>
  )
}

export default CreateEmployee