import * as React from 'react';
import {
    TextField,
    Typography,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    ListItemAvatar,
    Avatar,
    ListItemText,
} from '@mui/material';

import backgroundImg from './Assets/bg.jpg';
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import toast from "react-hot-toast"; // Add your background image here


const BaseUrl = "http://localhost:3000/api/trainers";
const BookingUrl = "http://localhost:3000/api/bookings";

const Booking = () => {
    const [trainers, setTrainers] = useState();
    const [values, setValues] = useState({
        bookingdate: '',
        trainer: '',
    });

    const [currentDate,setCurrentDate] = useState('');
    const loggeduser = JSON.parse(localStorage.getItem("auth_user")); // Get logged user info
    const [userid,setUserId] = useState('');


    useEffect(() => {
        axios.get(`${BaseUrl}`)
            .then(res => {
                setTrainers(res.data);
            })
            .catch(err => console.log(err));

        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setCurrentDate(formattedDate);

        const userId = loggeduser?._id;
        setUserId(userId);
    },[]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    }


    const handleSubmit = () => {

        const obj = {
            createddate:currentDate,
            bookingdate: values.bookingdate,
            user: userid,
            trainer:values.trainer
        };

        axios.post(`${BookingUrl}`, obj)
            .then(() => {
                toast.success("Booking Successfully Added");
            })
            .catch(error => {
                console.error(error.message);
                toast.error(error.message);
            });
    }


    return (
        <div
            className='bg-cover bg-center text-black h-[calc(100vh-76px)] p-6'
            style={{backgroundImage: `url(${backgroundImg})`}}
        >
            <div className="text-center mb-16">
                <div className="bg-white hover:bg-opacity-200 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">

                    <Typography variant="h4" fontWeight="bold"> Booking Details </Typography>
                <form onSubmit={handleSubmit}>
                    <Typography variant="body1" gutterBottom sx={{marginTop: 3}}>
                        Please select your Booking Date
                    </Typography>

                    <TextField
                        name="bookingdate"
                        value={values.bookingdate}
                        fullWidth={true}
                        type={"date"}
                        onChange={handleChange}
                    />

                    <Typography variant="body1" gutterBottom sx={{marginTop: 3}}>
                        Please select your preferred coach
                    </Typography>

                    <FormControl fullWidth sx={{marginTop: 2, marginBottom: 2}}>
                        <InputLabel id="select-instructor-label">Select Instructor</InputLabel>
                        <Select
                            labelId="select-instructor-label"
                            onChange={handleChange}
                            name="trainer"
                            value={values.trainer}
                            label="Select Instructor"
                        >
                            {trainers && trainers.length > 0 && trainers.map((data, i) => (
                                <MenuItem key={i} value={data._id}>
                                    <ListItemAvatar>
                                        <Avatar src={`data:image/png;base64,${data.photo}`} />
                                    </ListItemAvatar>
                                    <ListItemText primary={data.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button variant="contained" color='primary' fullWidth={true}
                    onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </form>
                </div>
            </div>

        </div>
    );
};

export default Booking;
