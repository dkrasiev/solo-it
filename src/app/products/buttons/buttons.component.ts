import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "vex-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"],
})
export class ButtonsComponent implements OnInit {
  @Input() data = [];

  constructor() {}

  ngOnInit(): void {}
}
