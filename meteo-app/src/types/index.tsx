import { ReactNode } from "react";

export type optionType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};
export interface weatherDataType {
  name: string;
  main: {
    feels_like: ReactNode;
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}
