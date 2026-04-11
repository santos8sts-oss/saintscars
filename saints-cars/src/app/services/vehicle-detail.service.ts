import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle-detail-models';

@Injectable({
  providedIn: 'root'
})
export class VehicleDetailService {
  private vehicles: Vehicle[];

  public constructor() {
    this.vehicles = this.getAllVehicles();
  }

  public getVehicleDetails(vehicleId: string): Vehicle | undefined {
    return this.vehicles.find(vehicle => vehicle.id === vehicleId);
  }

  private getAllVehicles(): Vehicle[] {
    return [{
      id: '1',
      isSold: true,
      name: 'Ford Ecosport',
      subtitle: '1.0 EcoBoost 125ch ST-Line',
      details: {
        make: 'Ford',
        model: 'Ecosport',
        year: 2019,
        color: 'Red',
        price: 8000,
        kilometers: 15000,
        motorType: '1.0 EcoBoost 125ch',
        gearboxType: 'Manual',
        numberOfDoors: 5,
        numberOfSeats: 5,
        equipments: ['Bluetooth', 'Backup Camera'],
        fuelType: 'Gasoline',
        finishType: 'ST-Line',
        description: `Le Ford EcoSport ST-Line de 2019 est un SUV compact sportif et élégant, parfait pour la conduite urbaine et les escapades du week-end. Son moteur EcoBoost 1.0 litre turbo de 125 chevaux offre un excellent compromis entre performances et économie de carburant.

La finition ST-Line apporte une touche sportive avec ses éléments de design distinctifs, ses jantes en alliage de 17 pouces et son intérieur premium. Ce véhicule a été entretenu avec soin et est en excellent état.

Idéal pour une utilisation quotidienne, ce véhicule combine praticité, confort et plaisir de conduite. Tous nos véhicules sont contrôlés et garantis pour votre tranquillité d'esprit.`
      }
    },
    {
      id: '2',
      isSold: true,
      name: 'Hyundai Ioniq',
      subtitle: '141ch Executive Hybride',
      details: {
        make: 'Hyundai',
        model: 'Ioniq',
        year: 2020,
        color: 'Black',
        price: 30000,
        kilometers: 10000,
        motorType: '1.6 GDi Hybride 141ch',
        gearboxType: 'Automatic',
        numberOfDoors: 5,
        numberOfSeats: 5,
        equipments: ['Bluetooth', 'Backup Camera'],
        fuelType: 'Gasoline/Electric',
        finishType: 'Executive',
        description: `Le Hyundai Ioniq Executive Hybride de 2020 est un véhicule électrique hybride élégant et performant, parfait pour la conduite urbaine et les déplacements quotidiens. Son moteur hybride offre un excellent compromis entre performances et économie de carburant.

La finition Executive apporte un style moderne avec ses éléments de design élégants, ses jantes en alliage de 17 pouces et son intérieur premium. Ce véhicule a été entretenu avec soin et est en excellent état.

Idéal pour une utilisation quotidienne, ce véhicule combine praticité, confort et plaisir de conduite. Tous nos véhicules sont contrôlés et garantis pour votre tranquillité d'esprit.`
      }
    }
    ];
  }
}

