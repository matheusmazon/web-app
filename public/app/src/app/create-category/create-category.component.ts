import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  name: string = "";

  constructor(private _api: ApiService, private _router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.name.length > 128){
      alert("The category name must not have more than 128 chars");
      return;
    }
    
    this._api.postCategory(this.name).subscribe(() => {
      alert("Your category has been created!");
    });

    this._router.navigate(["/categories"]);
  }

}
