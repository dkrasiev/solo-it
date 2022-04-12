import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "vex-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  product: number;
  options = [1, 3, 6, 12, 24, 36];
  state;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.product = +params["id"];
    });

    console.log(this.state);
  }

  onValueChange({ source, value }) {
    console.log(value);

    this.state = value;
  }
}
