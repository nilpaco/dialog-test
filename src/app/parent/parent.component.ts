import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "./modal/modal.component";
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

}
