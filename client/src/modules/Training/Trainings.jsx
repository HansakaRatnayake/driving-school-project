import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import TrainingCard from './TrainingCard';


const Trainings = () => {
    return (
        <div className='p-10'>
            <div className="w-full flex-col">
                <div className="flex">
                    <span className="font-bold text-3xl">Training Details</span> 
                </div>
                <div className="w-full flex mt-8 pl-10 pr-10">
                    <div className="w-2/4">
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { width: '30ch'} }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Filter by name" variant="outlined" />
                    </Box>
                    </div>
                    
                    <div className="flex w-2/4 justify-end  items-center ">
                        <Button className='h-12' variant="contained" startIcon={<AddCircleRoundedIcon />}>
                            Add New Training
                        </Button>
                    </div>

                </div>

                <div className="w-full mt-5 pl-14 pr-14">
                    <TrainingCard/>
                    <TrainingCard/>
                    <TrainingCard/>
                </div>

            </div>
        </div>
    )
}
export default Trainings
