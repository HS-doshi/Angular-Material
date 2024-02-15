import { CommonModule } from '@angular/common';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-example',
  standalone: true,
  imports: [DialogExampleComponent  ],
  templateUrl: './dialog-example.component.html',
  styleUrl: './dialog-example.component.css'
})
export class DialogExampleComponent implements OnInit {
  constructor(public dialogRef : MatDialog,
    @Inject(MAT_DIALOG_DATA) public data : any){}

    ngOnInit(){
    }
}
