import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeeList: []
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeeList.push(action.payload)
    }
  }
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer