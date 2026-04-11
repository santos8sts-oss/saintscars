import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle-detail-models';
import { VehicleDetailService } from 'src/app/services/vehicle-detail.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  public vehicle: Vehicle | undefined;
  private readonly route = inject(ActivatedRoute);
  private readonly vehicleDetailService = inject(VehicleDetailService);
  private vehicleId: string | null = null;

  ngOnInit(): void {
    this.vehicleId = this.route.snapshot.paramMap.get('id');
    if (this.vehicleId) {
      this.vehicle = this.vehicleDetailService.getVehicleDetails(this.vehicleId);
    }
  }

}
