import { HoemchildComponent } from './hoemchild/hoemchild.component';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  {
    path:'admin',
    redirectTo:'home'
  }
  ,
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'one',
        component:HoemchildComponent
      },
      {
        path:'two',
        component:FooterComponent
      }
    ]
  },
  {
    path:'products/:id',
    component:ProductsComponent
  },
  {
    path:'**',
    component:FooterComponent
  }
];
