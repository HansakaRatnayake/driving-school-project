import React, {useEffect, useState} from 'react'
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import DialogTitle from "@mui/material/DialogTitle";
import {Form, Formik} from "formik";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextFieldCustom from "../../components/UI/FormsUI/TextField/index.jsx";
import SelectCustom from "../../components/UI/FormsUI/Select/index.jsx";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ButtonCustom from "../../components/UI/FormsUI/Button/index.jsx";

const BaseUrl = "http://localhost:3000/api/trainers";

const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/,"Invalid Name")
        .required('Required'),
    email: Yup.string()
        .email("Invalid Email").required('Required'),
    nic: Yup.string()
        .matches(/^(\d{10}[VvXx]|\d{12})$/,"Invalid NIC")
        .required('Required'),
    mobile: Yup.string()
        .matches(/^\d{10}$/, "Invalid Mobile")
        .required("Required"),
    yoexperience: Yup.number().integer()
        .typeError("Invalid Years")
        .required('Required'),
    // profilephoto: "",
    gender:"",
    // Yup.string().required('Required'),
});
const TrainersUpdateForm = ({trainerob,onTrainerUpdate, onTrainerCancel}) => {
  
    const {_id,name,email,nic,mobile,yoexperience,gender,photo} = trainerob;

    const navigate = useNavigate();
    const [trainer,setTrainer] = useState({
        name: "",
        email: "",
        nic: "",
        mobile: "",
        yoexperience: "",
        gender: "",
        photo:"",
        booking: ""
    });

    const [genders,setGenders] = useState([]);

    const INITIAL_FORM_STATE = {
        name: name,
        email: email,
        nic: nic,
        mobile: mobile,
        yoexperience: yoexperience,
        photo: '',
        gender: gender
        //booking: '',
    };

    const [image,setImage] = useState(null);
    const [photoPreview,setPhotoPreview] = useState(null);
    const  [showUpload, setshowUpload] = useState(true);

    useEffect(() => {
        if(trainerob){

            console.log(photo);
        
            setPhotoPreview(photo);
            setshowUpload(false);

        }

        axios.get(`http://localhost:3000/api/genders`)
        .then(res => {
            setGenders(res.data);
        }).catch(err => console.log(err))
     

    }, []);

    const handlePhotoChange = (event) => {
        setImage(event.target.files[0]);
        setshowUpload(!showUpload);
        handlePhotoPreview(event.target.files[0])
    }

    const handlePhotoPreview = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoPreview(reader.result)
        };
        reader.readAsDataURL(file);
    }

    const handleSubmit = (values, {resetForm}) => {

        const formdata = new FormData();
        formdata.append('_id',_id);
        formdata.append('name',values.name);
        formdata.append('email',values.email);
        formdata.append('nic',values.nic);
        formdata.append('mobile',values.mobile);
        formdata.append('yoexperience',values.yoexperience);
        formdata.append('gender',values.gender._id);
        formdata.append('photo',photo);

        const obj = {
            name:values.name,
            email:values.email,
            nic:values.nic,
            mobile:values.mobile,
            yoexperience:values.yoexperience,
            gender:values.gender,
            photo:photoPreview
        }

        onTrainerUpdate(obj);
        resetForm();
        setshowUpload(!showUpload);

        axios.put(`${BaseUrl}`,formdata)
            .then(res => {
                console.log(res);
                // window.location.reload();
                // navigate("../trainers");
                toast.success("Trainer Successfully Updated");
            })
            .catch(err => {
                    console.log(err);
                    toast.error(err.message);
                }
            );
    }

    const handleCancle = () => {
        onTrainerCancel(false);
    }

    return (
        <div className="p-3">
            <DialogTitle>Update Trainer</DialogTitle>
            <Formik
                initialValues={{...INITIAL_FORM_STATE}}
                validationSchema={FORM_VALIDATION}
                onSubmit={handleSubmit}
            >
                <Form>
                    <DialogContent>
                        <DialogContentText>
                            **Insert your valid information and submit
                        </DialogContentText>

                        <TextFieldCustom name="name" label="Insert Name"/>

                        <TextFieldCustom name="email" label="Insert Email" />

                        <TextFieldCustom name="nic" label="Insert NIC" />

                        <div className="w-full flex justify-center items-center gap-4">
                            <TextFieldCustom name="mobile" label="Insert Mobile" />
                            <TextFieldCustom name="yoexperience" label="Insert Year of Experience" />
                        </div>

                        <SelectCustom
                            name="gender"
                            label="Gender"
                            options={genders}

                        />

                        <label className="form-control w-full mt-2 ">

                            <div
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                {showUpload ? (
                                    <div className="w-full flex justify-center items-center flex-col">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                            className="font-semibold">Click to upload</span> profile picture</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF
                                            (MAX. 800x400px)</p>
                                    </div>

                                ) : (
                                    <div className="size-40 bg-black rounded-full overflow-hidden">

                                        <img src={photoPreview.split(',')[0] > 0 ? photoPreview : `data:image/png;base64,${photoPreview}` } alt="profilepic"/>

                                    </div>
                                )
                                }
                                <input
                                    type="file"
                                    name="photo"
                                    className="hidden input input-bordered w-full max-w-xs flex justify-center items-center"
                                    onChange={handlePhotoChange}
                                />

                            </div>
                        </label>
                    </DialogContent>
                    <DialogActions>
                        <div className="w-full h-full px-[16px] flex justify-end gap-2">
                            <Button variant="outlined" color="error" type='button'
                                    onClick={handleCancle}>Cancel</Button>
                            <ButtonCustom>Submit</ButtonCustom>
                        </div>

                    </DialogActions>


                </Form>
            </Formik>

        </div>
    )
}
export default TrainersUpdateForm
