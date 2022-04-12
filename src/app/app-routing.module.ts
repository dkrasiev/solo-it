import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { VexRoutes } from "src/@vex/interfaces/vex-route.interface";
import { CustomLayoutComponent } from "./custom-layout/custom-layout.component";

const routes: VexRoutes = [
  {
    path: "",
    component: CustomLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "products",
        pathMatch: "full",
      },
      {
        path: "products",
        loadChildren: () =>
          import("./products/products.module").then((m) => m.ProductsModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      relativeLinkResolution: "corrected",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
