import React from "react";

const MobileFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[340px]">
      {/* Dynamic Island (pill-shaped notch) */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-full z-20"></div> */}
      
      {/* Side buttons */}
      <div className="h-[100px] w-[3px] bg-gray-700 absolute -left-[17px] top-[120px] rounded-l-lg"></div>
      <div className="h-[80px] w-[3px] bg-gray-700 absolute -right-[17px] top-[170px] rounded-r-lg"></div>
      
      {/* Main screen */}
      <div className="rounded-[2rem] overflow-hidden w-[312px] h-[672px] bg-white dark:bg-gray-800">
        {/* Status bar */}
        {/* Dynamic Island (pill-shaped notch) */}
        {/* <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-full z-20"></div> */}
        
        {/* Content area */}
        <div className="w-full h-[628px] mt-10 overflow-hidden">{children}</div>
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[134px] h-[5px] bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default MobileFrame;
