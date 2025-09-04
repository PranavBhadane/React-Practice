import React from 'react';
import { Helmet } from 'react-helmet';

const Timetable = () => {
  const headers = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const rows = [
    ["7:00 - 11:00", "PRACTICAL", "MODULE", "MODULE", "MODULE", "PRACTICAL", "PRACTICAL", ""],
    ["12:00 - 1:00", "DSA", "DSA", "DSA", "DSA", "DSA", "DSA", "DSA"],
    ["1:30 - 6:00", "SEED", "SEED", "SEED", "SEED", "SEED", "SEED", "INTERVIEW PREP"],
    ["6:30 - 9:00", "MODULE", "MODULE", "MODULE", "MODULE", "MODULE", "MODULE", "APTITUDE"],
    ["9:30 - 12:00", "DSA", "DSA", "DSA", "DSA", "DSA", "DSA", ""],
  ];

  return (
    <>
      <Helmet>
        <title>My Daily Timetable</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Poppins', sans-serif;
            background-color: #FDF6EC;
            color: #6B4F4F;
            overflow: hidden;
          }
          .bg-theme-bg { background-color: #FDF6EC; }
          .bg-theme-header { background-color: #EED6D3; }
          .bg-theme-cell { background-color: #FFF8F3; }
          .text-theme-title { color: #523A28; }
          .text-theme-body { color: #6B4F4F; }
          table {
            border-collapse: separate;
            border-spacing: 0.5rem 0.75rem;
          }
          th, td {
            padding: 1rem 0.5rem;
            text-align: center;
            vertical-align: middle;
            border-radius: 0.75rem;
            border: 1px solid #EADCDA;
          }
          tbody td.bg-theme-header {
            font-weight: 700;
            color: #4A2E1D;
          }
          .decoration {
            position: absolute;
            z-index: 0;
            user-select: none;
            opacity: 0.6;
          }
          .leaf { fill: #D5E8D4; }
          .petal-light { fill: #F8CECC; }
          .petal-dark { fill: #E1D5E7; }
          .petal-yellow { fill: #FFF2CC; }
        `}</style>
      </Helmet>

      <div className="bg-theme-bg min-h-screen flex items-center justify-center p-4 relative">
        {/* SVG Decorations */}
        <div className="decoration top-0 left-0 w-48 h-48 -translate-x-1/4 -translate-y-1/4">
          <svg viewBox="0 0 200 200">
            <g transform="rotate(-30 100 100)">
              <path className="leaf" d="M100 0 C50 50, 50 150, 100 200 C150 150, 150 50, 100 0 Z" transform="translate(20 50) scale(0.4)" />
              <path className="petal-light" d="M100 20 A60 60 0 0 1 100 180 A60 60 0 0 1 100 20" transform="translate(-20 20) scale(0.35)" />
              <circle className="petal-yellow" cx="85" cy="85" r="15" />
              <path className="leaf" d="M100 0 C50 50, 50 150, 100 200 C150 150, 150 50, 100 0 Z" transform="translate(60 -10) scale(0.3) rotate(45)" />
            </g>
          </svg>
        </div>

        <div className="decoration top-0 right-0 w-40 h-40 translate-x-1/4 -translate-y-1/4">
          <svg viewBox="0 0 200 200">
            <g transform="rotate(20 100 100)">
              <path className="leaf" d="M100 0 C50 50, 50 150, 100 200 C150 150, 150 50, 100 0 Z" transform="translate(30 60) scale(0.5) rotate(10)" />
              <path className="leaf" d="M100 0 C50 50, 50 150, 100 200 C150 150, 150 50, 100 0 Z" transform="translate(70 20) scale(0.3) rotate(-30)" />
            </g>
          </svg>
        </div>

        <div className="decoration bottom-0 left-0 w-32 h-32 -translate-x-1/4 translate-y-1/4">
          <svg viewBox="0 0 200 200">
            <g transform="rotate(45 100 100)">
              <path className="leaf" d="M100 0 C50 50, 50 150, 100 200 C150 150, 150 50, 100 0 Z" transform="scale(0.6)" />
            </g>
          </svg>
        </div>

        <div className="decoration bottom-0 right-0 w-52 h-52 translate-x-1/4 translate-y-1/4">
          <svg viewBox="0 0 200 200">
            <g transform="rotate(150 100 100)">
              <path className="petal-dark" d="M100 20 A60 60 0 0 1 100 180 A60 60 0 0 1 100 20" transform="translate(0 0) scale(0.5)" />
              <circle className="petal-yellow" cx="100" cy="100" r="20" transform="scale(0.5)" />
              <path className="leaf" d="M100 0 C50 50, 50 150, 100 200 C150 150, 150 50, 100 0 Z" transform="translate(50 50) scale(0.4) rotate(-20)" />
              <path className="leaf" d="M100 0 C50 50, 50 150, 100 200 C150 150, 150 50, 100 0 Z" transform="translate(-10 60) scale(0.3) rotate(30)" />
            </g>
          </svg>
        </div>

        {/* Timetable Table */}
        <div className="w-full max-w-7xl mx-auto bg-theme-cell p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-title text-center mb-8">
            MY DAILY Timetable
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr>
                  {headers.map((day, i) => (
                    <th key={i} className="bg-theme-header w-[12.5%]">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-theme-body font-semibold">
                {rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={`${j === 0 ? "bg-theme-header font-bold text-[#4A2E1D]" : "bg-white"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timetable;