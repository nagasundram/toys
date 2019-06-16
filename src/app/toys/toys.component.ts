import { Component, OnInit } from "@angular/core";
import { ToysService } from "../services/toys.service";
import { Toy } from "src/app/toy.model";

@Component({
  selector: "app-toys",
  templateUrl: "./toys.component.html",
  styleUrls: ["./toys.component.scss"]
})
export class ToysComponent implements OnInit {
  constructor(private toysService: ToysService) {}
  toys: Toy[];
  ngOnInit() {
    this.getToys();
  }
  getToys() {
    this.toysService.index().subscribe(data => {
      this.toys = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Toy;
      });
    });
  }
  deleteToy(id) {
    this.toysService.deleteToy(id).subscribe(data => {
      this.getToys();
    });
  }
}
