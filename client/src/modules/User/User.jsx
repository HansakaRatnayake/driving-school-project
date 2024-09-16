import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import UserForm from "./UserForm.jsx";
import UserUpdateForm from "./UserUpdateForm.jsx";

const BaseUrl = "http://localhost:3000/api/users";

const User = () => {

    const [users, setUsers] = useState([]);
    const [isUpdate,setUpdate] = useState(false);

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        userstatus: ''
    });

    const handleFormStatus = () =>{
        setUpdate(!isUpdate);
    }

    useEffect(() => {
        axios.get(`${BaseUrl}`)
            .then(res => {
                setUsers(res.data);
                ///console.log(res.data);
            }).catch(err => console.log(err))
    }, []);



    const handleDelete = username => {
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            axios.delete(`${BaseUrl}/${username}`)
                .then(() => {
                    window.location.reload();
                    toast.success("User Successfully Deleted!");
                })
                .catch(err => {
                    console.log(err);
                    toast.error(err.message);
                })

            console.log(`${BaseUrl}/${username}`);
        }
    }

    const columns = ['Profile', 'Full Name', 'Username', 'UserStatus', 'Action']


    return (
        <div className="p-6">

            <div className="w-full">
                <div className="flex gap-10">
                    <span className="font-bold text-3xl">Users</span>
                    {isUpdate ?
                        <button className="btn btn-sm bg-green-500 mt-1" onClick={handleFormStatus}>+ Add</button>
                        :
                        <></>
                    }

                </div>

                <div className="w-full flex bg-white shadow-xl px-4 py-5 rounded-lg">

                    <div className="w-1/3">
                        {isUpdate ? <UserUpdateForm updVal={values}/>  : <UserForm/> }

                    </div>

                    {/*Table*/}
                    <div className="shadow-xl w-2/3 mt-5 border-t-8 rounded-md">
                    <div className="overflow-auto  ">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>

                                </th>
                                {columns.map((data, i) => {
                                    return <th key={i}>{data}</th>
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            {users.map((dta, index) => {
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

                                    <td>{dta['firstname'] + " " + dta['lastname']}</td>
                                    <td>{dta['username']}</td>
                                    <td>{dta['userstatus']['name']}</td>

                                    <td>
                                        <div className="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor"
                                                 className="size-6 text-blue-600 cursor-pointer"
                                                 onClick={() => {
                                                     setValues(dta);
                                                     handleFormStatus();
                                                 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor"
                                                 className="size-6 text-red-500 cursor-pointer"
                                                 onClick={() => handleDelete(dta['username'])}>
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                            </svg>


                                        </div>
                                    </td>

                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    {/*Table End*/}

                </div>
            </div>

        </div>
    )
}
export default User
