import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getCategories().subscribe(data => {
      this.categories = data as any[];
    });
  }

  deleteCategory(id: number) {
    if(confirm("Are you sure you want to delete this category?")) {
      this._api.deleteCategory(id).subscribe();
      window.location.reload();
    }
  }
}
