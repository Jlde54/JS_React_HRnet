import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeeSlice'

// Charger les employés au démarrage depuis le localStorage
const savedEmployees = JSON.parse(localStorage.getItem('employees')) || []

const preloadedState = {
  employees: {
    employeeList: savedEmployees
  }
}

export const store = configureStore({
  reducer: {
    employees: employeesReducer
  },
  preloadedState    // Configure Redux avec la liste des employés via preloadedState
})

// Sauvegarder les employés dans localStorage à chaque mise à jour de la liste
store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('employees', JSON.stringify(state.employees.employeeList))
})