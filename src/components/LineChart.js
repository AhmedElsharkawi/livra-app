import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import jsPDF from "jspdf";
import { GrDownload } from "react-icons/gr";
import dot from "../assets/dot2.png";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Data for the chart
  const data = {
    labels: ["FEB", "MAR", "AVR", "MAI", "JUN"],
    datasets: [
      {
        label: "Nombre de colis",
        data: [3, 5, 5, 7,9], // Data points for each month
        backgroundColor: "rgba(247, 106, 0, 0.2)", // Orange background
        borderColor: "#F76A00", // Orange border color
        pointBackgroundColor: "#F76A00", // Orange points
        borderWidth: 2, // Line width
        tension: 0.4, // Makes the line curve slightly
        fill: false, // No background fill
      },
    ],
  };

  // Chart options to customize the look
  const options = {
    responsive: true,
    // animation: {
    //   duration: 400, // Set animation duration to 300 milliseconds
    // },
    scales: {
      y: {
        grid: {
          drawOnChartArea: true, // This will remove Y-axis grid lines
        },
        ticks: {
          display: false, // Optionally hide Y-axis labels if you don't need them
        },
      },
      x: {
        grid: {
          display: false, // This removes the X-axis grid lines if you want to hide them
        },
        ticks: {
          color: "#000", // X-axis labels color
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
  };

  // Function to export the chart as a PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const chartElement = document.getElementById("chart");

    doc.text("Chart Export", 20, 10); // Title in the PDF
    doc.addImage(chartElement.toDataURL(), "PNG", 20, 20, 160, 90); // Add chart image to the PDF
    doc.save("chart.pdf"); // Save the PDF
  };

  return (
    <div className="chart-container bg-white rounded-xl py-2 px-4 h-[300px]">
      <div className="flex justify-between items-center mb-1">
        <div>
          <img src={dot} alt="dot-icon" className="inline mr-1" />
          <p className="text-[12px] text-[#8C8888] inline">Nombre de colis</p>
        </div>
        <button
          className="text-[12px] text-[#000000] font-light "
          onClick={exportToPDF}
        >
          Exporter en PDF
          <GrDownload className="inline ml-1 mb-1" />
        </button>
      </div>
      <Line data={data} options={options} id="chart" />
    </div>
  );
};

export default LineChart;
