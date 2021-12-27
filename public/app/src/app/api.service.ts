import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDevices() {
    return this.http.get("http://localhost:8888/devices");
  }

  postDevice(color: string, partNumber: number, categoryId: number) {
    return this.http.post("http://localhost:8888/devices", {
      color,
      partNumber,
      categoryId
    });
  }

  deleteDevice(deviceId: number) {
    return this.http.delete("http://localhost:8888/device/" + deviceId);
  }

  getCategories() {
    return this.http.get("http://localhost:8888/categories");
  }

  postCategory(name: string) {
    return this.http.post("http://localhost:8888/categories", {
      name
    });
  }

  deleteCategory(categoryId: number) {
    return this.http.delete("http://localhost:8888/category/" + categoryId);
  }
}
