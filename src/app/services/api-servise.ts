'use server'

import axios from "axios";

type Car = {
    brand: string;
    price: number;
    year: number;
}


const axiosInstance =  axios.create({
baseURL: 'http://owu.linkpc.net/carsAPI/v1'
})

export const addCar = async (infoFromForm: FormData) => {
const car: Car = {
    brand: infoFromForm.get('brand') as string ,
    price: Number(infoFromForm.get('price')),
    year:Number(infoFromForm.get('year')),
}
axiosInstance.post('/cars', car) }




export const getCar = async (): Promise<Car[]> => {
  const {data} = await axiosInstance.get<Car[]>('/cars')
  return data;
}