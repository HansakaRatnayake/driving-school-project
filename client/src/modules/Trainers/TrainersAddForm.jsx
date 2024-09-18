<<<<<<< Updated upstream
import React from 'react'

const TrainersAddForm = () => {
    return (
        <div>TrainersAddForm</div>
=======
import React, {useEffect, useState} from 'react'
import * as Yup from 'yup';
import {Form, Formik} from "formik";
import {Grid2} from "@mui/material";
import TextFieldCustom from "../../components/UI/FormsUI/TextField/index.jsx";
import ButtonCustom from "../../components/UI/FormsUI/Button/index.jsx";
import axios from "axios";
import SelectCustom from "../../components/UI/FormsUI/Select/index.jsx";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const BaseUrl = "http://localhost:3000/api/trainers";

const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    nic: '',
    mobile: '',
    yoexperience: '',
    // profileimage: '',
    // gender: '',
    // booking: '',
};

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
    // profileimage: "",
    gender:"",
        // Yup.string().required('Required'),
});

const TrainersAddForm = () => {

    const {navigate} = useNavigate();
    // const [trainer,setTrainer] = useState({
    //     name: "",
    //     email: "",
    //     nic: "",
    //     mobile: "",
    //     yoexperience: "",
    //     profileimage: "",
    //     gender: "",
    //     booking: ""
    // });

    const [genders,setGenders] = useState({
        _id:"",
        name:""
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/api/genders`)
            .then(res => {
                setGenders(res.data);
            }).catch(err => console.log(err))
    }, []);

    const handleSubmit = (values) => {
        console.log(values);
        axios.post(`${BaseUrl}`,values)
            .then(res => {
                console.log(res);
                navigate("trainers")
                toast.success("Trainer Successfully Saved");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            });
    }

    return (
        <div className="p-3">
            <Formik
                initialValues={{ ...INITIAL_FORM_STATE }}
                validationSchema={FORM_VALIDATION}
                onSubmit={values => {
                    handleSubmit(values);
                }}
            >
                <Form>

                    <Grid2 container spacing={2}>

                        <Grid2 item size={12}>
                            <TextFieldCustom name="name" label="Name"/>
                        </Grid2>

                        <Grid2 item size={12}>
                            <TextFieldCustom name="email" label="Email"/>
                        </Grid2>

                        <Grid2 item size={12}>
                            <TextFieldCustom name="nic" label="NIC"/>
                        </Grid2>

                        <Grid2 item size={12}>
                            <TextFieldCustom name="mobile" label="Mobile"/>
                        </Grid2>

                        <Grid2 item size={12}>
                            <TextFieldCustom name="yoexperience" label="Year of Experience"/>
                        </Grid2>

                        <Grid2 item size={12}>
                            <SelectCustom
                                name="gender"
                                label="Gender"
                                options={genders}
                            />
                        </Grid2>

                        <Grid2 item size={12}>
                            <ButtonCustom>
                                Submit
                            </ButtonCustom>
                        </Grid2>

                    </Grid2>

                </Form>
            </Formik>
        </div>
>>>>>>> Stashed changes
    )
}
export default TrainersAddForm
