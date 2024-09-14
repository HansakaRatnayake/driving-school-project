import React from 'react'

const TableCustom = ({columns,data}) => {
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox"/>
                        </label>
                    </th>
                    {columns.map((data, i) => {
                        return <th key={i}>{data}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {data.map((dta,index) =>{
                    return <tr key={index}>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox"/>
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src={`data:image/jpeg;base64,${dta['photo']}`}
                                        alt="Avatar Tailwind CSS Component"/>
                                </div>
                            </div>
                        </div>
                    </td>

                     <td>{dta['firstname'] +" " + dta['lastname']}</td>
                     <td>{dta['username']}</td>
                     <td>{dta['userstatus.name']}</td>

                </tr>
                })}
                </tbody>
                {/* foot */}
                <tfoot>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default TableCustom
