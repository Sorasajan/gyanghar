import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-full justify-center flex flex-col items-center p-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-30 -35 190 250" // added padding on all sides
        role="img"
        aria-label="Gyanghar Logo"
        style={{
          height: "150px",
          animation: "fadeIn 1s ease-out forwards",
          transformOrigin: "center",
        }}
      >
        <defs>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }

            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.2); opacity: 0.1; }
            }

            .cls-1 {
              font-family: CenturyGothic-Bold, 'Century Gothic';
              font-size: 92px;
              font-weight: 700;
            }

            .cls-1, .cls-2 {
              fill: #313970;
            }

            .cls-3 {
              fill: #414042;
              font-family: CenturyGothic, 'Century Gothic';
              font-size: 34px;
            }

            .cls-4 {
              fill: #6b74db;
            }

            .cls-2, .cls-4 {
              stroke-width: 0;
              animation: pulse 2s ease-in-out infinite;
              transform-origin: center;
            }
          `}</style>
        </defs>
        <g>
          <path
            className="cls-2"
            d="M67.03,41.42c-2.83-1.61-3.96-4.94-1.14-6.54h0c2.81-1.59,7.59.46,10.42,2.05l32.45,17.68c2.29,1.3,5.66.78,7.88-.53l21.76-11.92c2.18-1.28,1.84-4.92-.42-6.19L73.82,1.2c-2.25-1.27-4.62-1.7-6.86-.47L2.19,35.83c-2.37,1.31-2.63,5.09-.33,6.4l64.27,35.89c2.33,1.32,6.16.93,8.47-.42l25.73-15.04c2.26-1.32,1.26-2.74-1.04-4.04l-32.27-17.2Z"
          />
          <path
            className="cls-2"
            d="M93.25,90.23c0,.87-.61,1.65-1.47,1.8-7.54,1.31-18.07,11.74-23.24,9.47-4.64-2.04-20.47-12.01-33.66-14.43-3.12-.57-5.37-3.29-5.37-6.46v-14.69c4.52.99,28.73,18.85,39.25,20.4,3.67.54,15.2-8.01,21.91-9.35,1.54-.31,2.98.87,2.96,2.44-.06,5.25-.33,5.05-.37,10.82Z"
          />
          <path
            className="cls-2"
            d="M66.56,196.5c-7.41-4.31-14.98-8.3-23.36-10.52-14.4-3.81-27.07-6.08-39.93-10.31-1.78-.59-3-2.24-3-4.12C.25,145.92.03,120.23,0,94.59c0-2.63,2.36-4.8,4.94-4.26,9.77,2.02,22.89,4.06,36.42,7.28,4.48,1.07,16.47,5.53,23.72,10.82,1.85,1.35,1.65,1.97,1.65,4.27l-.17,83.81Z"
          />
          <path
            className="cls-4"
            d="M73.93,196.5c7.41-4.31,14.98-8.3,23.36-10.52,14.4-3.81,27.07-6.08,39.93-10.31,1.78-.59,3-2.24,3-4.12.02-25.64.24-51.33.27-76.97,0-2.63-2.36-4.8-4.94-4.26-9.77,2.02-22.89,4.06-36.42,7.28-4.48,1.07-16.47,5.53-23.72,10.82-1.85,1.35-1.65,1.97-1.65,4.27l.17,83.81Z"
          />
          <path
            className="cls-2"
            d="M121.73,108.2l-7.11-19.43c2.09-1.07,3.51-3.11,3.51-5.46,0-2.6-1.73-4.83-4.19-5.77v-25.11h-5.12v25.08c-2.52.92-4.3,3.17-4.3,5.81,0,2.16,1.19,4.06,3.01,5.19l-7.21,19.71c-.39,1.06.4,2.18,1.52,2.18h18.39c1.13,0,1.91-1.12,1.52-2.18Z"
          />
        </g>
      </svg>
      <p className="text-center text-sm dark:text-purple-300 mt-5">
        Loading ...
      </p>
    </div>
  );
}
