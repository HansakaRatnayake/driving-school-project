import React, {useEffect, useState} from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import CustomDialog from "../../components/UI/CustomDialog/CustomDialog.jsx";


const BaseUrl = "http://localhost:3000/api/users";

const UserUpdateForm = (username) => {

    const [userstatuses, setUserStatus] = useState([]);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        userstatus: '',
        _id: '',
    });
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogData, setDialogData] = useState({
        title: 'User Update',
    });

    //Call Confirm Dialog On Update
    const handleUpdate = (event) => {
        event.preventDefault();
        //Call Confirm Dialog
        setDialogOpen(true);
    }

    //Update Function
    const update = () => {
        //Send to Server
        axios.put(`${BaseUrl}`, values)
            .then(res => {
                console.log(res);
                window.location.reload();
                toast.success("User Successfully Updated");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })
    }

    //Clear Form
    const clearForm = () => {
        setValues([]);
    }

    useEffect(() => {
        //Load User to Form
        axios.get(`${BaseUrl}?username=${username['data']}`)
            .then(res => {
                setValues(res.data[0]);
                //console.log(res.data[0]);
            })
            .catch(err => {
                console.log(err.message)
                toast(err.message);
            })

        //Load Userstatus to SelectBox
        axios.get("http://localhost:3000/api/userstatuses")
            .then(res => {
                setUserStatus(res.data);
                //console.log(res.data);
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

                    <div className="w-full mt-5 px-3 py-5 shadow-xl border-t-8 rounded-md">
                        <form onSubmit={handleUpdate}>
                            <div className="flex flex-col justify-center items-center">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">FirstName</span>
                                    </div>
                                    <input type="text" placeholder="Firstname" name="firstname" required
                                           className="input input-bordered w-full max-w-xs"
                                           value={values.firstname}
                                           onChange={e => setValues({...values, firstname: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">LastName</span>
                                    </div>
                                    <input type="text" placeholder="LastName" name="lastname" required
                                           className="input input-bordered w-full max-w-xs"
                                           value={values.lastname}
                                           onChange={e => setValues({...values, lastname: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Username</span>
                                    </div>
                                    <input type="text" placeholder="Username" name="username" required
                                           className="input input-bordered w-full max-w-xs"
                                           value={values.username}
                                           onChange={e => setValues({...values, username: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Password</span>
                                    </div>
                                    <input type="password" placeholder="Passowrd" name="password" required
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={e => setValues({...values, password: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">UserStatus</span>
                                    </div>
                                    <select className="select select-bordered" name="userstatus" required
                                            value={values.userstatus}
                                            onChange={e => setValues({...values, userstatus: e.target.value})}
                                    >
                                        <option disabled selected value="">Select UserStatus</option>
                                        {userstatuses.map((data, i) => {
                                            return <option key={i} value={data['_id']}>{data['name']}</option>
                                        })}


                                    </select>
                                </label>

                                <div className="flex gap-2 w-full mt-5 justify-center items-center">
                                    <button className="btn w-1/2 bg-warning" type="submit">Update</button>
                                    <button className="btn w-1/2 bg-black text-white" type="reset" onClick={clearForm}>Clear</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <CustomDialog
                open={dialogOpen} title={dialogData.title}
                onConfirm={(isConfirmed) => {
                    if (isConfirmed) {
                        update();
                        setDialogOpen(false);
                    } else {
                        setDialogOpen(false);
                    }
                }}
                onClose={() => setDialogOpen(false)}
            />
        </div>
    )
}
export default UserUpdateForm
