import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ToysComponent } from "./toys/toys.component";
import { ToysDetailComponent } from "./toys-detail/toys-detail.component";
import { ToysCreateComponent } from "./toys-create/toys-create.component";

const routes: Routes = [
  {
    path: "",
    component: ToysComponent,
    data: { title: "Toys List" }
  },
  {
    path: "toys",
    component: ToysComponent,
    data: { title: "Toys List" }
  },
  {
    path: "toys/:id/show",
    component: ToysDetailComponent,
    data: { title: "Toys Details" }
  },
  {
    path: "toys/create",
    component: ToysCreateComponent,
    data: { title: "Create Toys" }
  },
  {
    path: "toys/:id/edit",
    component: ToysCreateComponent,
    data: { title: "Edit Toys" }
  },
  { path: "toyss", redirectTo: "/toys", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
