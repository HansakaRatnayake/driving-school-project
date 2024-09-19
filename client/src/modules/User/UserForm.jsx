import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import defaults from '../../assets/default.png';

const BaseUrl = "http://localhost:3000/api/users";

const UserForm = () => {

    const [userstatuses, setUserStatus] = useState([]);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        userstatus: '',
        image: '',
    });

    const [image,setImage] = useState(null);
    const [imagePreview,setImagePreview] = useState(null);


    const handleInputDataChange = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value
        });
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
        handleImagePreview(event.target.files[0])
    }

    const handleImagePreview = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result)
        };
        reader.readAsDataURL(file);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formdata = new FormData();
        formdata.append('firstname',values.firstname);
        formdata.append('lastname',values.lastname);
        formdata.append('username',values.username);
        formdata.append('password',values.password);
        formdata.append('userstatus',values.userstatus);
        formdata.append('image',image);


        axios.post(`${BaseUrl}`,formdata, {
            headers: {'Content-Type': 'multipart/form-data',}
        })
        .then(res => {
            console.log(res);
            window.location.reload();
            toast.success("User Successfully Saved");
        })
        .catch(err => {
            console.log(err);
            toast.error(err.message);
        });
    }

    //Clear Form
    const clearForm = () => {
        setValues([]);
        setImage(null);
        setImagePreview(null);
    }

    useEffect(() => {
        axios.get("http://localhost:3000/api/userstatuses")
            .then(res => {
                setUserStatus(res.data);
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

                                <div className="w-full flex flex-col">
                                    <div className="size-32 bg-black rounded-full overflow-hidden">
                                        {image ? (
                                            <img src={imagePreview} alt="profilepic"/>
                                        ) : (
                                            <img src={defaults} alt="profilepic"/>
                                        )}
                                    </div>

                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="font-bold">Profile Picture</span>
                                        </div>
                                        <input type="file" name="image"
                                               className="input input-bordered w-full max-w-xs"
                                               onChange={handleImageChange}
                                        />
                                    </label>

                                </div>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">FirstName</span>
                                    </div>
                                    <input type="text" placeholder="Firstname" name="firstname"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">LastName</span>
                                    </div>
                                    <input type="text" placeholder="LastName" name="lastname"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Username</span>
                                    </div>
                                    <input type="text" placeholder="Username" name="username"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Password</span>
                                    </div>
                                    <input type="password" placeholder="Passowrd" name="password"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">UserStatus</span>
                                    </div>
                                    <select className="select select-bordered" name="userstatus"
                                            onChange={handleInputDataChange}
                                    >
                                        <option disabled selected value="">Select UserStatus</option>
                                        {userstatuses.map((data, i) => {
                                            return <option key={i} value={data['_id']}>{data['name']}</option>
                                        })}


                                    </select>
                                </label>

                                <div className="flex gap-2 w-full mt-5 justify-center items-center">
                                    <button className="btn w-1/2 bg-green-500" type="submit">Add</button>
                                    <button className="btn w-1/2 bg-black text-white" type="reset"
                                            onClick={clearForm}>Clear
                                    </button>
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
