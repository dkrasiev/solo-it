import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger80ms } from "src/@vex/animations/stagger.animation";
import { Offer } from "../offer.model";
import { Product } from "../product.model";
import { ProductsService } from "../products.service";

@Component({
  selector: "vex-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  animations: [stagger80ms, fadeInUp400ms],
})
export class ProductComponent implements OnInit {
  product: Product;
  selectedOffer: Offer;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedOffer = null;
      this.product = this.productsService.products.find((product) => {
        return product.name == params["id"];
      });
    });
  }

  setOffer(offer: Offer) {
    this.selectedOffer = offer;
  }
}
