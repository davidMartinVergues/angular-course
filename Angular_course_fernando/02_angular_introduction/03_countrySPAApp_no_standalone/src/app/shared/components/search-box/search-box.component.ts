import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { CountryService } from '../../../countries/services/country.service';
import { debounceTime, Subject, Subscription } from 'rxjs';



@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private debouncer = new Subject<string>()
  private debouncerSubscription? : Subscription;

  @Input() public placeholder:string = '';
  @Output() public inputData: EventEmitter<string> =  new EventEmitter()
  @Output() public inputData_from_debounce: EventEmitter<string> =  new EventEmitter()
  @Input() public initialvalue! : string;
  //@Output() public inputData =  new EventEmitter<string>();

  @ViewChild('txtInput') public input! : ElementRef<HTMLInputElement>

constructor(
  private _countryService: CountryService
){}

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe(value=>{
      console.log('desde el debounce', value);
      this.inputData_from_debounce.emit(value)

    })
  }
  // SIN USAR VIEWCHILD
  onSearchBoxText(event:Event){

    // let element = event.target as HTMLInputElement

    // let data = element.value

    // this.inputData.emit(data)

    // element.value = ''

  }

  // USANDO VIEWCHILD
  onSearchBoxText2(value:string){

    this.inputData.emit(value)

    this.input.nativeElement.value = ''

  }

  onKeyPress(searchTerm:string){

    this.debouncer.next(searchTerm)

  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()

  }
}
