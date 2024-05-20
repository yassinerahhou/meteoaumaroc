export type optionType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};
export interface weatherDataType {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}