import {CommonModule } from '@angular/common';
import {Component, OnInit } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule } from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list'
import {MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import {MatStepperModule} from '@angular/material/stepper'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatRadioModule} from '@angular/material/radio'
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'
import { Action } from 'rxjs/internal/scheduler/Action';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet ,
    CommonModule ,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Material';
  selectedValue : string = ''
  options : string [] =['Angular' , 'React' , 'Vue']

  objectoptions :{name:string}[] = [
    {name : 'Angular'},
    {name : 'Angular Material'},
    {name : 'React'},
    {name : 'Vue'}
  ]

  notification  = 1
  showSpinner = false

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    },2000)
  }
  logChange(index : number| null){
      console.log(index)
  }
  displayFn(subject : {name : string } ){
      return subject ? subject.name : ''
  }
  myControl = new FormControl();
  filteredOptions: Observable<{name : string}[]> = new Observable<{name : string}[]>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=> this._filter(value))
    )
  }
  private _filter(value: string) : {name : string}[]{
      const filtervalue = value.toLowerCase()
      return this.objectoptions.filter(option=>{
        option.name.toLowerCase().includes(filtervalue)
      })
  }

  mindate=  new Date()
  maxDate = new Date(2024,20,2)

  dateFilter = (date: any) =>{
    const dat = date.getDay();
    return dat != 0 && dat != 6;
  }

  constructor(private snackBar : MatSnackBar){}

  openSnackBar(message:string , action : any) {
    let snackBarRef =  this.snackBar.open(message, action);

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('The Snackbar was dismissed!')
    });
    snackBarRef.onAction().subscribe(()=>{
      console.log('The snackbar was trigeered!')
    })
  }
}
