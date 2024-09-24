import React from 'react'

const Dashboard = () => {
    return (

        <div className="p-4 h-[calc(100vh-76px)]">
            <div className="shadow-xl rounded-xl w-full h-full p-4">

                <span className="text-2xl font-bold">Dashboard</span>

                <div className="flex ">

                    <div className="stats shadow w-1/4 shadow-xl mx-4 mt-4 bg-[#1E4263] justify-center">
                        <div className="stat">
                            <div className="stat-title text-gray-100">Total Trainees</div>
                            <div className="stat-value text-gray-100">2011</div>
                        </div>
                    </div>

                    <div className="stats shadow w-1/4 shadow-xl mx-4 mt-4 bg-[#1E4263] justify-center">
                        <div className="stat">
                            <div className="stat-title text-gray-100">Total Trainings</div>
                            <div className="stat-value text-gray-100">11</div>
                        </div>
                    </div>

                    <div className="stats w-1/4 shadow-xl mx-4 mt-4 bg-[#1E4263] justify-center">
                        <div className="stat">
                            <div className="stat-title text-gray-100">Total Trainers</div>
                            <div className="stat-value text-gray-100">20</div>
                        </div>
                    </div>

                    <div className="stats w-1/4 shadow-xl mx-4 mt-4 bg-[#1E4263] justify-center">
                        <div className="stat">
                            <div className="stat-title text-gray-100">Total Trainees</div>
                            <div className="stat-value text-gray-100">2011</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Dashboard
