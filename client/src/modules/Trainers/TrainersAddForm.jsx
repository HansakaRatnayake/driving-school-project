import React, {useState} from 'react'
import * as Yup from 'yup';
import {Form, Formik} from "formik";
import {Grid2} from "@mui/material";
import TextFieldCustom from "../../components/UI/FormsUI/TextField/index.jsx";
import SelectCustom from "../../components/UI/FormsUI/Select/index.jsx";
import ButtonCustom from "../../components/UI/FormsUI/Button/index.jsx";


const initialFormState = {
    name: "",
    email: "",
    nic: "",
    mobile: "",
    yoexperience: "",
    profileimage: "",
    gender: "",
    booking: ""
};

const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email("Invalid Email").required('Required'),
    nic: Yup.string().required('Required'),
    mobile: Yup.number().integer().typeError("Please Enter Valid Phone Number").required("Required"),
    yoexperience: Yup.number().integer().required('Required'),
    profileimage: "",
    gender: "",
    booking: ""
});

const TrainersAddForm = () => {

    const [trainer,setTrainer] = useState({
        name: "",
        email: "",
        nic: "",
        mobile: "",
        yoexperience: "",
        profileimage: "",
        gender: "",
        booking: ""
    });

    const [genders,setGenders] = useState({
        _id:"",
        name:""
    });

    return (
        <div className="p-3">
            <Formik
                initialValues={{ ...initialFormState }}
                validationSchema={FORM_VALIDATION}
                onSubmit={values => {
                    console.log(values);

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
    )
}
export default TrainersAddForm
