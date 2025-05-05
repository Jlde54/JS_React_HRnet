import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeeList: []
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
     /**
     * Adds a new employee to the state.
     * @param {Object} state - The current Redux state.
     * @param {Object} action - Contains the new employee object in payload.
     */
    addEmployee: (state, action) => {
      state.employeeList.push(action.payload)
    }
  }
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer