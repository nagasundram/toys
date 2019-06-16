import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { ToysService } from "../services/toys.service";
import { Toy } from "src/app/toy.model";
import { Router, ActivatedRoute } from "@angular/router";

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-toys-create",
  templateUrl: "./toys-create.component.html",
  styleUrls: ["./toys-create.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ToysCreateComponent implements OnInit {
  post: any;
  formGroup: FormGroup;
  toy: Toy;
  mode = "create";
  toy_id: string;
  colors = ["red", "green", "blue", "yellow"];
  files;
  filestring;
  constructor(
    private toysService: ToysService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.toy_id = this.route.snapshot.params["id"];
    if (this.toy_id) {
      this.getSetToy(this.toy_id);
    } else {
      this.createForm({});
    }
  }
  getSetToy(id) {
    this.mode = "fetching";
    this.toysService.show(id).subscribe(data => {
      this.mode = "update";
      this.createForm(data);
    });
  }
  createForm(data) {
    this.formGroup = this.formBuilder.group({
      name: [data.name, [Validators.required]],
      movie: [data.movie, [Validators.required]],
      imageData: [data.imageData, [Validators.required]],
      created_at: [data.created_at]
    });
  }

  getFiles(event) {
    this.files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString); // Converting binary string data.
  }

  onSubmit(toy) {
    if (this.mode != "update" && !this.toy_id) {
      this.post = toy;
      toy.created_at = new Date();
      this.toysService.createToy(toy).subscribe(data => {
        this.router.navigate(["/toys"]);
      });
    } else {
      this.toysService.updateToy(toy, this.toy_id).subscribe(data => {
        this.router.navigate(["/toys/"]);
      });
    }
  }
}
