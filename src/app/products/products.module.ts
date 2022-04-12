import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatSliderModule } from "@angular/material/slider";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from "@angular/platform-browser/animations";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ProductComponent } from "./product/product.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ButtonsComponent],
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
