import { useSelector } from 'react-redux'
// import DataList from './DataList.jsx'
import DataList from 'react-datalist-jld'

function Employees() {
  const employees = useSelector((state) => state.employees.employeeList)

  const columns = [
    { title: "First Name", property: "firstName" },
    { title: "Last Name", property: "lastName" },
    { title: "Start Date", property: "startDate" },
    { title: "Department", property: "department" },
    { title: "Date of Birth", property: "birthDate" },
    { title: "Street", property: "street" },
    { title: "City", property: "city" },
    { title: "State", property: "state" },
    { title: "Zip Code", property: "zipCode" }
  ]

  return (
    <div>
      <DataList
        data={employees}
        columns={columns}
        title="Current Employees"
        noDataText="No employees found."
        entriesOptions={[2, 10, 25, 50, 100]}
      />
    </div>
  )
}

export default Employees