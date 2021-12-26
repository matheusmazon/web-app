import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.scss']
})

export class CreateDeviceComponent implements OnInit {

  categories: any[] = [];

  color: string = "";
  partNumber: string = "";
  selectedCategory = {
    "id": "",
    "name": ""
  };

  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit(): void {
    this._api.getCategories().subscribe(data => {
      this.categories = data as any[];
      console.log(this.categories);
    });
  }

  validate(color: string, partNumber: number) {
    if (!color.match(/^[A-Za-z]+$/)){
      alert("The color name must only have letters!");
      return false;
    }
    if (color.length > 16){
      alert("The color name must not have more than 16 letters");
      return false;
    }
    if (!Number.isInteger(partNumber) || Number(partNumber) <= 0){
      alert("The part number must be a positive integer");
      return false;
    }

    return true;
  }

  onSubmit(): void {
    let _partNumber: number = Number(this.partNumber);
    let categoryId: number = Number(this.selectedCategory.id);

    if (!this.validate(this.color, _partNumber)){
      return;
    }
    
    this._api.postDevice(this.color, _partNumber, categoryId).subscribe(() => {
      alert("Your device has been created!");
    });

    this._router.navigate(["/devices"]);
  }

}
