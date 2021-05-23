import React from 'react'

export const Users = ({users}) => {

    console.log('users length:::', users.length)
    if (users.length === 0) return null

    const UserRow = (user,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{user.ifsc}</td>
                  <td>{user.bank_id}</td>
                  <td>{user.branch}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.district}</td>
                  <td>{user.state}</td>
                  <td>{user.bank_name}</td>
              </tr>
          )
    }

    const userTable = users.map((user,index) => UserRow(user,index))

    return(
        <div className="container">
            <h2>Users</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>S.No.</th>
                    <th>IFSC</th>
                    <th>Bank Id</th>
                    <th>Branch</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>District</th>
                    <th>State</th>
                    <th>Bank Name</th>
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}