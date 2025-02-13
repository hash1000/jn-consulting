import React from "react";

export default function SingleImageMask({ imgWidth = 56, imgHeight = 56, imgUrl = "" }: any) {
  const centerX = imgWidth / 2;
  const centerY = imgHeight / 2;

  return (
    <div className="mb-4 w-full max-w-[260px] mx-auto">
      <svg
        width={imgWidth}
        height={imgHeight}
        viewBox={`0 0 ${imgWidth} ${imgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="hexClip">
            <path
              transform={`rotate(90, ${centerX}, ${centerY})`}
              d={`M ${imgWidth * 0.15} ${imgHeight * 0.75} 
                L ${imgWidth * 0.425} ${imgHeight * 0.93} 
                C ${imgWidth * 0.475} ${imgHeight * 0.96} 
                ${imgWidth * 0.525} ${imgHeight * 0.96} 
                ${imgWidth * 0.575} ${imgHeight * 0.93} 
                L ${imgWidth * 0.85} ${imgHeight * 0.75} 
                C ${imgWidth * 0.905} ${imgHeight * 0.725} 
                ${imgWidth * 0.925} ${imgHeight * 0.7} 
                ${imgWidth * 0.925} ${imgHeight * 0.625} 
                L ${imgWidth * 0.925} ${imgHeight * 0.35} 
                C ${imgWidth * 0.925} ${imgHeight * 0.275} 
                ${imgWidth * 0.905} ${imgHeight * 0.25} 
                ${imgWidth * 0.85} ${imgHeight * 0.225} 
                L ${imgWidth * 0.575} ${imgHeight * 0.07} 
                C ${imgWidth * 0.525} ${imgHeight * 0.04} 
                ${imgWidth * 0.475} ${imgHeight * 0.04} 
                ${imgWidth * 0.425} ${imgHeight * 0.07} 
                L ${imgWidth * 0.15} ${imgHeight * 0.225} 
                C ${imgWidth * 0.095} ${imgHeight * 0.25} 
                ${imgWidth * 0.075} ${imgHeight * 0.275} 
                ${imgWidth * 0.075} ${imgHeight * 0.35} 
                L ${imgWidth * 0.075} ${imgHeight * 0.625} 
                C ${imgWidth * 0.075} ${imgHeight * 0.7} 
                ${imgWidth * 0.095} ${imgHeight * 0.725} 
                ${imgWidth * 0.15} ${imgHeight * 0.75} Z`}
            />
          </clipPath>

          {/* Add shadow filter */}
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset in="blur" dx="3" dy="3" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Image clipped inside the rotated hexagon */}
        {/* <image
          href={imgUrl}
          width={imgWidth}
          height={imgHeight}
          clipPath="url(#hexClip)"
          preserveAspectRatio="xMidYMid slice"
        /> */}

        {/* Rotated Hexagon Border with Shadow */}
        <path
          transform={`rotate(90, ${centerX}, ${centerY})`}
          d={`M ${imgWidth * 0.15} ${imgHeight * 0.75} 
                L ${imgWidth * 0.425} ${imgHeight * 0.93} 
                C ${imgWidth * 0.475} ${imgHeight * 0.96} 
                ${imgWidth * 0.525} ${imgHeight * 0.96} 
                ${imgWidth * 0.575} ${imgHeight * 0.93} 
                L ${imgWidth * 0.85} ${imgHeight * 0.75} 
                C ${imgWidth * 0.905} ${imgHeight * 0.725} 
                ${imgWidth * 0.925} ${imgHeight * 0.7} 
                ${imgWidth * 0.925} ${imgHeight * 0.625} 
                L ${imgWidth * 0.925} ${imgHeight * 0.35} 
                C ${imgWidth * 0.925} ${imgHeight * 0.275} 
                ${imgWidth * 0.905} ${imgHeight * 0.25} 
                ${imgWidth * 0.85} ${imgHeight * 0.225} 
                L ${imgWidth * 0.575} ${imgHeight * 0.07} 
                C ${imgWidth * 0.525} ${imgHeight * 0.04} 
                ${imgWidth * 0.475} ${imgHeight * 0.04} 
                ${imgWidth * 0.425} ${imgHeight * 0.07} 
                L ${imgWidth * 0.15} ${imgHeight * 0.225} 
                C ${imgWidth * 0.095} ${imgHeight * 0.25} 
                ${imgWidth * 0.075} ${imgHeight * 0.275} 
                ${imgWidth * 0.075} ${imgHeight * 0.35} 
                L ${imgWidth * 0.075} ${imgHeight * 0.625} 
                C ${imgWidth * 0.075} ${imgHeight * 0.7} 
                ${imgWidth * 0.095} ${imgHeight * 0.725} 
                ${imgWidth * 0.15} ${imgHeight * 0.75} Z`}
          fill="none"
          stroke="#06263E"
          strokeWidth="4"
          filter="url(#dropShadow)"
        />
      </svg>
     </div>
  );
}