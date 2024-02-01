import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent implements OnInit {
  numbers: string;
  sortedNumber: string;

  constructor() {}

  ngOnInit() {}

  sortNumber() {
    this.numbers = document.getElementById("inputData").textContent;
    this.sortedNumber = this.numbers.split(",").sort().join(",");
    document.getElementById("result").textContent = this.sortedNumber;
  }
}
