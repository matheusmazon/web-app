import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: any[] = [];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getDevices().subscribe(data => {
      this.devices = data as any[];
    });
  }

  deleteDevice(id: number) {
    if(confirm("Are you sure you want to delete this device?")) {
      this._api.deleteDevice(id).subscribe();
      window.location.reload();
    }
  }
}
