import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeeSlice'

// Upload employees at startup from localStorage
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
  preloadedState
})

// Automatically save to localStorage when the employee list updates
store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('employees', JSON.stringify(state.employees.employeeList))
})