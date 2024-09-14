import React from 'react'
import {Link} from "react-router-dom";

const UserForm = () => {
    return (
        <div className="p-6">

            <div className="w-full">
                <div className="flex gap-10">
                    <span className="font-bold text-3xl">Users</span>
                    <Link to="../user"><button className="btn btn-sm bg-green-500 mt-1">View All Users</button></Link>
                </div>

                <div className="flex flex-col">

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="font-bold">FirstName</span>
                        </div>
                        <input type="text" placeholder="Firstname" className="input input-bordered w-full max-w-xs"/>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="font-bold">LastName</span>
                        </div>
                        <input type="text" placeholder="LastName" className="input input-bordered w-full max-w-xs"/>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="font-bold">Username</span>
                        </div>
                        <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs"/>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="font-bold">Password</span>
                        </div>
                        <input type="password" placeholder="Passowrd" className="input input-bordered w-full max-w-xs"/>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="font-bold">UserStatus</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected value="">Select UserStatus</option>
                            <option>Star Wars</option>

                        </select>
                    </label>

                </div>

            </div>

        </div>
    )
}
export default UserForm
