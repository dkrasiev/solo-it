import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { of, Subscription } from "rxjs";
import { filter, take } from "rxjs/operators";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger80ms } from "src/@vex/animations/stagger.animation";

@Component({
  selector: "vex-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
  animations: [fadeInUp400ms, stagger80ms],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products = ["Bitrix", "Мой Склад"];
  selectedProduct: number;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this._getSelectedProduct();

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        this._getSelectedProduct();
      });

    // this.route.firstChild.params.subscribe((params) => {
    //   if (params["id"]) {
    //     this.selectedProduct = +params["id"];
    //   } else {
    //     this.selectedProduct = null;
    //   }
    // });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  private _getSelectedProduct() {
    if (this.route.firstChild) {
      this.selectedProduct = this.route.snapshot.firstChild.params["id"];
      return;
    }

    this.selectedProduct = null;
  }
}
