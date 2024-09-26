import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [traineeCount, setTraineeCount] = useState(0);
  const [trainingCount, setTrainingCount] = useState(0);
  const [trainerCount, setTrainerCount] = useState(0);

  const [displayUserCount, setDisplayUserCount] = useState(0);
  const [displayTraineeCount, setDisplayTraineeCount] = useState(0);
  const [displayTrainingCount, setDisplayTrainingCount] = useState(0);
  const [displayTrainerCount, setDisplayTrainerCount] = useState(0);

  // Function to implement the counting effect
  const countUp = (start, target, setDisplayCount) => {
    const duration = 500; // 2 seconds for the counting animation
    const incrementTime = Math.floor(duration / target);
    let currentCount = start;

    const counter = setInterval(() => {
      currentCount += 1;
      setDisplayCount(currentCount);

      if (currentCount >= target) {
        clearInterval(counter);
      }
    }, incrementTime);
  };

  useEffect(() => {
    // Fetch user and trainee data
    axios.get('http://localhost:3000/api/users')
      .then(res => {
        const totalUsers = res.data.length;
        const totalTrainees = res.data.filter(datum => datum.role.name === 'USER').length;

        setUserCount(totalUsers);
        setTraineeCount(totalTrainees);

        // Start the counting effect after setting the values
        countUp(0, totalUsers, setDisplayUserCount);
        countUp(0, totalTrainees, setDisplayTraineeCount);
      })
      .catch(err => {
        console.log(err);
      });

    // Fetch training data
    axios.get('http://localhost:3000/api/trainings')
      .then(res => {
        const totalTrainings = res.data.length;
        setTrainingCount(totalTrainings);

        // Start the counting effect for trainings
        countUp(0, totalTrainings, setDisplayTrainingCount);
      })
      .catch(err => {
        console.log(err);
      });

    // Fetch trainer data
    axios.get('http://localhost:3000/api/trainers')
      .then(res => {
        const totalTrainers = res.data.length;
        setTrainerCount(totalTrainers);

        // Start the counting effect for trainers
        countUp(0, totalTrainers, setDisplayTrainerCount);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-6">
      <div className="w-full h-[49rem] bg-white shadow-2xl p-4">
        <span className="text-2xl font-bold">Dashboard</span>
        <div className="flex">
          <div className="stats shadow w-1/4 shadow-xl mx-4 mt-4 bg-[#1E4263] justify-center">
            <div className="stat">
              <div className="stat-title text-gray-100">Total Users</div>
              <div className="stat-value text-gray-100 text-center">{displayUserCount}</div>
            </div>
          </div>

          <div className="stats shadow w-1/4 shadow-xl mx-4 mt-4 bg-[#1E4263] justify-center">
            <div className="stat">
              <div className="stat-title text-gray-100">Total Trainings</div>
              <div className="stat-value text-gray-100 text-center">{displayTrainingCount}</div>
            </div>
          </div>

          <div className="stats w-1/4 shadow-xl mx-4 mt-4 bg-[#1E4263] justify-center">
            <div className="stat">
              <div className="stat-title text-gray-100">Total Trainers</div>
              <div className="stat-value text-gray-100 text-center">{displayTrainerCount}</div>
            </div>
          </div>

          <div className="stats w-1/4 shadow-xl mx-4 mt-4 bg-[#1E4263] justify-center">
            <div className="stat">
              <div className="stat-title text-gray-100">Total Trainees</div>
              <div className="stat-value text-gray-100 text-center">{displayTraineeCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
