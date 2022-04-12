import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule, MatRippleModule } from "@angular/material/core";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";
import { ProductComponent } from "./product/product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatButtonModule,
    MatRippleModule,

    MatRadioModule,
    MatSliderModule,

    FormsModule,

    // IconModule,
  ],
})
export class ProductsModule {}
