import { ReactNode } from "react";

export type optionType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};
export interface weatherDataType {
  visibility: number;
  name: string;
  main: {
    feels_like: ReactNode;
    temp: number;
    humidity: number;
  };
  weather: {
    [x: string]: any;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}
