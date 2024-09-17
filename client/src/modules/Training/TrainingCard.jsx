import React from 'react'
import Person4Icon from '@mui/icons-material/Person4';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function TrainingCard() {
  return (
    <div className=' flex w-full h-auto p-4 shadow-md'>
        <TrainingImage/>
        <TrainingData/>
        <ActionButtons/>
    </div>
  )
}

function TrainingImage() {
    return (
        <div className="w-[15%] h-[180px] border-blue-500 border-2 flex">
            <img src=''/>
        </div>
    )
}


function TrainingData() {
    return (
        <div className="flex flex-col w-[60%] h-[180px] pl-6 gap-3">
             <div className="font-bold text-xl ">Manual Car Training</div>

             <div className="font-medium text-[14px]  flex gap-6">
                <span>Price : 20000.00 LKR</span>
                <span>Duration : 6 Months</span>
            </div>

             <div className="font-medium text-[14px]  h-[180px]2"> <span>Trainers : </span><span>{<Person4Icon/>}Mr.Lakshan Ruvinda </span><span>{<Person4Icon/>}Mr.Hansaka Rathnayake</span></div>

             <div className="font-medium text-[14px] mb-1 flex gap-6">
                <span>
                Description :
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum, 
                    amet nostrum quibusdam debitis omnis sit libero accusantium deleniti expedita iusto 
                    obcaecati odio quis quam consequatur perferendis. Perferendis, aperiam nisi?
                </p>

                </span>
            </div>

        </div>
    )
}

function ActionButtons(){
    return (
        <div className="flex flex-col space-y-4 h-[180px] w-[25%] items-center justify-center">
            <div className="w-full flex items-center justify-center ">
                <Button className='w-32'  variant="contained" color='error' startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </div>
            <div className="w-full flex items-center justify-center ">
                <Button className='w-32' variant="contained" color='success' startIcon={<EditIcon />}>
                    Edit 
                </Button>
            </div>
           
           
        </div>
    )
}


export default TrainingCard