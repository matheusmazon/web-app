import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateDeviceComponent } from './create-device/create-device.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  { path: 'create-device', component: CreateDeviceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }