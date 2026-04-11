export interface VehicleTechnicalDetails {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  kilometers: number;
  motorType: string;
  gearboxType: string;
  numberOfDoors: number;
  numberOfSeats: number;
  equipments: string[];
  fuelType: string;
  finishType: string;
  description: string;
}

export interface Vehicle {
    id: string;
    isSold: boolean;
    imgUrl?: string;
    name: string;
    subtitle: string;
    details: VehicleTechnicalDetails;
}