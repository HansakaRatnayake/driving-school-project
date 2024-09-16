import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const BaseUrl = "http://localhost:3000/api/users";

const UserForm = () => {

    const [userstatuses, setUserStatus] = useState([]);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        userstatus: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${BaseUrl}`,values)
            .then(res => {
                console.log(res);
                window.location.reload();
                toast.success("User Successfully Saved");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })
    }

    useEffect(() => {
        axios.get("http://localhost:3000/api/userstatuses")
            .then(res => {
                setUserStatus(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message)
                toast(err.message);
            })
    }, []);

    return (
        <div className="flex justify-center items-center">

            <div className="w-96">

                <div className="w-full">
                {/*    <div className="flex gap-10">*/}
                {/*        <span className="font-bold text-3xl">Users</span>*/}
                {/*        <Link to="../user">*/}
                {/*            <button className="btn btn-sm bg-green-500 mt-1">View All Users</button>*/}
                {/*        </Link>*/}
                {/*    </div>*/}

                    <div className="w-full mt-5 px-3 py-5 shadow-xl border-t-8 rounded-md">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col justify-center items-center">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">FirstName</span>
                                    </div>
                                    <input type="text" placeholder="Firstname" name="firstname"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={e => setValues({...values, firstname: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">LastName</span>
                                    </div>
                                    <input type="text" placeholder="LastName" name="lastname"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={e => setValues({...values, lastname: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Username</span>
                                    </div>
                                    <input type="text" placeholder="Username" name="username"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={e => setValues({...values, username: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Password</span>
                                    </div>
                                    <input type="password" placeholder="Passowrd" name="password"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={e => setValues({...values, password: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">UserStatus</span>
                                    </div>
                                    <select className="select select-bordered" name="userstatus"
                                            onChange={e => setValues({...values, userstatus: e.target.value})}
                                    >
                                        <option disabled selected value="">Select UserStatus</option>
                                        {userstatuses.map((data, i) => {
                                            return <option key={i} value={data['_id']}>{data['name']}</option>
                                        })}


                                    </select>
                                </label>

                                <div className="flex gap-2 w-full mt-5 justify-center items-center">
                                    <button className="btn w-1/2 bg-green-500" type="submit">Add</button>
                                    <button className="btn w-1/2 bg-black text-white">Clear</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default UserForm
