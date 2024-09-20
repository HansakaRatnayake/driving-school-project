import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {Form, Formik} from "formik";
import {Grid2} from "@mui/material";
import TextFieldCustom from "../../components/UI/FormsUI/TextField/index.jsx";
import SelectCustom from "../../components/UI/FormsUI/Select/index.jsx";
import ButtonCustom from "../../components/UI/FormsUI/Button/index.jsx";
import axios from "axios";
import toast from "react-hot-toast";

const BaseUrl = "http://localhost:3000/api/trainings";

const INITIAL_FORM_STATE = {
    name: '',
    price: '',
    duration: '',
    image: '',
    //trainer
    //description

};

const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/,"Invalid Name")
        .required('Required'),
    price: Yup.number().integer()
        .typeError("Invalid Price")
        .required('Required'),
    duration: Yup.number().integer()
        .typeError("Invalid Duration")
        .required('Required'),
});

function TrainingForm() {
    
    const [trainers,setTrainers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/trainers`)
            .then(res => {
                setTrainers(res.data);
            }).catch(err => console.log(err))
    }, []);

    const handleSubmit = (values) => {
        console.log(values);
        axios.post(`${BaseUrl}`,values)
            .then(res => {
                console.log(res);
                window.location.reload();
                toast.success("Trainings Successfully Saved");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            });
    }

  return (
    <div>
        <DialogTitle>Add New Training</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{ ...INITIAL_FORM_STATE }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={values => {
                        handleSubmit(values);
                    }}
                >
                    <Form>

                        <Grid2 container spacing={2} className="mt-2">

                            <Grid2 item size={12}>
                                <TextFieldCustom name="name" label="Name"/>
                            </Grid2>

                            <Grid2 item size={12}>
                                <TextFieldCustom name="price" label="Price" type="number" />
                            </Grid2>

                            <Grid2 item size={12}>
                                <TextFieldCustom name="duration" label="Duration" type="number" />
                            </Grid2>

                            <Grid2 item size={12}>
                                <SelectCustom
                                    name="trainer"
                                    label="Trainer"
                                    options={trainers}
                                />
                            </Grid2>

                            <Grid2 item size={6}>
                                <ButtonCustom>
                                    Submit
                                </ButtonCustom>
                            </Grid2>

                            <Grid2 item size={6}>
                                <Button variant="contained" size="small" fullWidth="true" className="w-full">
                                    Clear
                                </Button>

                            </Grid2>

                        </Grid2>

                    </Form>
                </Formik>
            </DialogContent>
    </div>
  )
}

export default TrainingForm;