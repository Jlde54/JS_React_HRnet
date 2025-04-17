import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { addEmployee } from "../../redux/employeeSlice"
import styles from '../styles/CreateEmployee.module.scss'
import { useNavigate } from "react-router-dom"

function CreateEmployee () {

//   const dispatch = useDispatch()
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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(addEmployee(formData))
    navigate("/employees")
  };

  return (
    <div className={styles.createEmployee}>
        <h2 className={styles.createEmployee__title}>Créer un employé</h2>
        <form className={styles.createEmployee__form} onSubmit={handleSubmit}>
            <div className={styles.createEmployee__formGroup}>
            <label>Prénom</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>

            <div className={styles.createEmployee__formGroup}>
            <label>Nom</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div className={styles.createEmployee__formGroup}>
            <label>Date de naissance</label>
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
            </div>

            <div className={styles.createEmployee__formGroup}>
            <label>Date d'embauche</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
            </div>

            <fieldset className={styles.createEmployee__addressFieldset}>
            <legend>Adresse</legend>
            <div className={styles.createEmployee__formGroup}>
                <label>Rue</label>
                <input name="street" value={formData.street} onChange={handleChange} required />
            </div>

            <div className={styles.createEmployee__formGroup}>
                <label>Ville</label>
                <input name="city" value={formData.city} onChange={handleChange} required />
            </div>

            <div className={styles.createEmployee__formGroup}>
                <label>État</label>
                <input name="state" value={formData.state} onChange={handleChange} required />
            </div>

            <div className={styles.createEmployee__formGroup}>
                <label>Code postal</label>
                <input name="zipCode" value={formData.zipCode} onChange={handleChange} required />
            </div>
            </fieldset>

            <div className={styles.createEmployee__formGroup}>
            <label>Département</label>
            <input name="department" value={formData.department} onChange={handleChange} required />
            </div>

            <button className={styles.createEmployee__submitButton} type="submit">Enregistrer</button>
        </form>
    </div>
  )
}

export default CreateEmployee