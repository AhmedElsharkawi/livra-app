import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import carImage from '../assets/carincircle.png';
import dot1 from '../assets/dot1.png';
import dot22 from '../assets/dot22.png';
import dot3 from '../assets/dot3.png';
import dot4 from '../assets/dot4.png';

// Register the plugin globally
Chart.register(ChartDataLabels);

const DeliveryChart = () => {
  const data = {
    labels: ['Enlevé', 'Confirmé', 'En cours de livraison', 'Non livré'],
    datasets: [
      {
        data: [5, 5, 8, 10],
        backgroundColor: ['#F99D13', '#FF6600', '#C77B08', '#BF530B'],
        borderWidth: 7,
      },
    ],
  };

  const [percentages, setPercentages] = useState([]);

  useEffect(() => {
    const newPercentages = data.datasets[0].data.map(value => ((value / 25) * 100).toFixed(0));
    setPercentages(newPercentages);
  }, [data.datasets]);
  const options = {
    cutout: '50%', // Adjust cutout to make room for the image
    responsive: true,
    animation: {
      duration: 100, // Set animation duration to 300 milliseconds
    },
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: false, // Disable hover tooltips
      },
      datalabels: {
        color: '#FFFFFF', // Change the text color as needed
        formatter: (value, context) => {
          const percentage = ((value / 25) * 100).toFixed(0); // Calculate percentage based on total data
          const label = context.chart.data.labels[context.dataIndex]; // Get label
          
          return [`${percentage}%`, label]; // Return as array to apply different styles
        },
        anchor: 'center', // Position label at the center of the segment
        align: 'center', // Align the label in the center
        offset: 0, // Adjust to zero to ensure no offset from center
        textAlign: 'center', // Ensure text is centered
        font: {
          size: 12, // Adjust font size as needed
          lineHeight: 1.9, // Adjust line height for spacing between lines
        },
        labels: {
          // Separate styles for percentage and label
          value: {
            font: {
              weight: 'normal', // Bold for percentage
            },
          },
          label: {
            font: {
              weight: 'normal', // Normal for label
            },
          },
        },
      },
    },
  };
  

  return (
    <div className='chart-container bg-white rounded-xl py-4 px-4 h-[300px] flex items-center justify-between'>
      {percentages.length > 0 && (
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 items-center'>
            <img src={dot1} alt="dot-icon" className='  text-[#F99D13] w-2 h-2' />
            <span className='text-[#535353]'>{`${percentages[0]}% Enlevé`}</span>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={dot22} alt="dot-icon" className='w-2 h-2 text-[#FF6600]' />
            <span className='text-[#535353]'>{`${percentages[1]}% Confirmé`}</span>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={dot3} alt="dot-icon" className='w-2 h-2 text-[#C77B08]' />
            <span className='text-[#535353] '>{`${percentages[2]}% En cours de livraison`}</span>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={dot4} alt="dot-icon" className='w-2 h-2 text-[#BF530B]' />
            <span className='text-[#535353]'>{`${percentages[3]}% Non livré`}</span>
          </div>
        </div>
      )}
      <div className='flex justify-center items-center relative'>
        <Doughnut data={data} options={options} />
        <img
          src={carImage}
          alt="Car"
          className='absolute w-[120px] h-[120px] rounded-full border-4 py-3 px-5  bg-gray-300 object-contain' // Use rounded-full for a circular border
        />
      </div>
    </div>
  );
};

export default DeliveryChart;
