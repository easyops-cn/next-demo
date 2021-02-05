import React from "react";
import { ReactComponent as CarSvg } from "./car.svg";

export interface RunningCarProps {
  print?: string;
}

export function RunningCar({ print }: RunningCarProps): React.ReactElement {
  return (
    <div style={{ color: print ?? "#98c8e7" }}>
      <CarSvg />
    </div>
  );
}
