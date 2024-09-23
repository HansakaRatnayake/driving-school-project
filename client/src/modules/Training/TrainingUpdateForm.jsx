import React, {useState} from 'react'
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Form, Formik} from "formik";
import {Grid2} from "@mui/material";
import TextFieldCustom from "../../components/UI/FormsUI/TextField/index.jsx";
import SelectCustom from "../../components/UI/FormsUI/Select/index.jsx";
import ButtonCustom from "../../components/UI/FormsUI/Button/index.jsx";
import Button from "@mui/material/Button";
import axios from "axios";
import toast from "react-hot-toast";
import * as Yup from "yup";

const BaseUrl = "http://localhost:3000/api/trainings";

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

const TrainingUpdateForm = ({trainingob}) => {

    const {_id, name, price, duration, image, trainers, description} = trainingob;

    const INITIAL_FORM_STATE = {
        name: name,
        price: price,
        duration: duration,
        image: '',
        //trainer
        //description

    };

    const [training,setTraining] = useState(null);

    const handleSubmit = (values) => {

        const formdata = new FormData();
        formdata.append('_id',_id);
        formdata.append('name',values.name);
        formdata.append('price',values.price);
        formdata.append('duration',values.duration);
        // formdata.append('photo',photo);

        const obj={
            name: values.name,
            price:values.price,
            duration:values.duration,
            _id:_id
        };

        console.log(values);

        axios.put(`${BaseUrl}`,obj)
            .then(res => {
                console.log(res);
                window.location.reload();
                toast.success("Training Successfully Updated");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            });
    }

    return (
        <div>
            <DialogTitle>Update Training</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{...INITIAL_FORM_STATE}}
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
                                <TextFieldCustom name="price" label="Price" type="number"/>
                            </Grid2>

                            <Grid2 item size={12}>
                                <TextFieldCustom name="duration" label="Duration" type="number"/>
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
                                <Button variant="contained" size="small" fullWidth={true} className="w-full">
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
export default TrainingUpdateForm
