import React from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const MobileFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DeviceFrameset device="iPhone X" color="black" className="pt-10">
      {children}
    </DeviceFrameset>
  );
};

export default MobileFrame;
