import React, {useEffect, useState} from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import CustomDialog from "../../components/UI/CustomDialog/CustomDialog.jsx";
import defaults from "../../assets/default.png";


const BaseUrl = "http://localhost:3000/api/users";

const UserUpdateForm = (username) => {

    const [image,setImage] = useState(null);
    const [imagePreview,setImagePreview] = useState(null);

    const [userstatuses, setUserStatus] = useState([]);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        userstatus: '',
        _id: '',
        photo: '',
    });
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogData, setDialogData] = useState({
        title: 'User Update',
    });

    const handleInputDataChange = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value
        });
    }

    const handleImageChange = (event) => {

        const file = event.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64String = e.target.result.split(',')[1]; // Extract the base64 part
            setImagePreview(base64String);
        };
        if (file) {
            reader.readAsDataURL(file);
        }

    }

    //Call Confirm Dialog On Update
    const handleUpdate = (event) => {
        event.preventDefault();
        //Call Confirm Dialog
        setDialogOpen(true);
    }

    //Update Function
    const update = () => {

        const formdata = new FormData();
        formdata.append('firstname',values.firstname);
        formdata.append('_id',values._id);
        formdata.append('lastname',values.lastname);
        formdata.append('username',values.username);
        formdata.append('password',values.password);
        formdata.append('userstatus',values.userstatus);
        formdata.append('image',image);

        //Send to Server
        axios.put(`${BaseUrl}`,formdata, {
            headers: {'Content-Type': 'multipart/form-data',}
        })
            .then(res => {
                console.log(res);
                window.location.reload();
                toast.success("User Successfully Updated");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })

        console.log(formdata);
    }

    //Clear Form
    const clearForm = () => {
        setValues([]);
        setImage(null);
        setImagePreview(null);
    }

    useEffect(() => {
        //Load User to Form
        axios.get(`${BaseUrl}?username=${username['data']}`)
            .then(res => {
                setValues(res.data[0]);
                setImagePreview(btoa(String.fromCharCode(...new Uint8Array(res.data[0].photo.data))))
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

                                <div className="w-full flex flex-col">
                                    <div className="size-32 bg-black rounded-full overflow-hidden">
                                        {imagePreview ? (
                                            <img src={`data:image/jpeg;base64,${imagePreview}`} alt="profilepic"/>
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
                                    <input type="text" placeholder="Firstname" name="firstname" required
                                           className="input input-bordered w-full max-w-xs"
                                           value={values.firstname}
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">LastName</span>
                                    </div>
                                    <input type="text" placeholder="LastName" name="lastname" required
                                           className="input input-bordered w-full max-w-xs"
                                           value={values.lastname}
                                           onChange={handleInputDataChange} />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Username</span>
                                    </div>
                                    <input type="text" placeholder="Username" name="username" required
                                           className="input input-bordered w-full max-w-xs"
                                           value={values.username}
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Password</span>
                                    </div>
                                    <input type="password" placeholder="Passowrd" name="password" required
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">UserStatus</span>
                                    </div>
                                    <select className="select select-bordered" name="userstatus" required
                                            value={values.userstatus}
                                            onChange={handleInputDataChange}
                                    >
                                        <option disabled selected value="">Select UserStatus</option>
                                        {userstatuses.map((data, i) => {
                                            return <option key={i} value={data['_id']}>{data['name']}</option>
                                        })}


                                    </select>
                                </label>

                                <div className="flex gap-2 w-full mt-5 justify-center items-center">
                                    <button className="btn w-1/2 bg-warning" type="submit">Update</button>
                                    <button className="btn w-1/2 bg-black text-white" type="reset"
                                            onClick={clearForm}>Clear
                                    </button>
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
