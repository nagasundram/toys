import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToysService } from "../services/toys.service";
import { Toy } from "src/app/toy.model";
@Component({
  selector: "app-toys-detail",
  templateUrl: "./toys-detail.component.html",
  styleUrls: ["./toys-detail.component.scss"]
})
export class ToysDetailComponent implements OnInit {
  toy: Toy;
  constructor(
    private toysService: ToysService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getToy(this.route.snapshot.params["id"]);
  }

  getToy(id) {
    this.toysService.show(id).subscribe(data => {
      this.toy = data as Toy;
    });
  }
}
