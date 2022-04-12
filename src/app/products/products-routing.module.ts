import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { VexRoutes } from "src/@vex/interfaces/vex-route.interface";
import { ProductComponent } from "./product/product.component";
import { ProductsComponent } from "./products.component";

const routes: VexRoutes = [
  {
    path: "",
    component: ProductsComponent,
    data: { toolbarShadowEnabled: true },
    children: [
      {
        path: ":id",
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
