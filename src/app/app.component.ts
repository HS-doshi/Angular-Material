import {CommonModule } from '@angular/common';
import {AfterViewInit, Component, OnInit , ViewChild } from '@angular/core';
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
import {FormControl, ReactiveFormsModule } from '@angular/forms';
import {Observable, filter, map, startWith } from 'rxjs';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatRadioModule} from '@angular/material/radio'
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'
import {Action } from 'rxjs/internal/scheduler/Action';
import {MatDialog, MatDialogModule } from '@angular/material/dialog';
import {DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableModule} from '@angular/material/table'
import {MatTableDataSource} from '@angular/material/table'
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  standalone: true,
  // entryComponents : [CustomSnackBarComponent],
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
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ScrollingModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit , AfterViewInit {
  title = 'Material';
  numbers : number[]=[];
  selectedValue : string = ''
  options : string [] =['Angular' , 'React' , 'Vue']

  displayedColumns: string[] = ['position', 'name', 'symbol', 'weight' ];
  displayedColumnsData: string[] = ['position', 'name', 'symbol' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSortModule) sort!: MatSort;
  @ViewChild(MatPaginatorModule)
  paginator: any = MatPaginatorModule;

  constructor(private snackBar : MatSnackBar,
    public dialog : MatDialog){
      for(let i=0;i<1000;i++){
          this.numbers.push(i);
      }
    }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=> this._filter(value))
    )
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
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


  openSnackBar(message:string , action : any) {
    let snackBarRef =  this.snackBar.open(message, action,{duration:2000});

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('The Snackbar was dismissed!')
    });

    // on action is an observable.
    snackBarRef.onAction().subscribe(()=>{
      console.log('The snackbar was trigeered!')
    });
  }
  // onShowSnackbar(){
  //   this.snackBar.openFromComponent(CustomSnackBarComponent , {duration : 2000})
  //   console.log('Custom component rendered!')
  // }
  openDialog(){
    let dialogRef =  this.dialog.open(DialogExampleComponent , {data:{name :['Diya', 'Heet']}});

    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog Result : ${result}`)
    });
  }
  logData(row : any){
    console.log(row)
  }
  applyFilter(filterValue : string | null){
    if(filterValue!==null)
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    else
      this.dataSource.filter = ''
  }
}
