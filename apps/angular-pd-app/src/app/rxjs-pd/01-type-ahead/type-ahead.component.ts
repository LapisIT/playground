import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, of, Subscription, switchMap, tap, timer } from "rxjs";

@Component({
  selector: 'playground-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent implements OnInit {

  @ViewChild('typeahead') typeahead: ElementRef | undefined;
  // @ViewChild('output') output: ElementRef | undefined;

  keyup$$: Subscription | undefined;
  public outputResult: string[] = [];

  constructor() { }

  getContinents = (keys: string) => [
    'africa',
    'antarctica',
    'asia',
    'australia',
    'europe',
    'north america',
    'south america'
  ].filter(e => e.indexOf(keys.toLowerCase()) > -1);

  // function to fake continent request
  fakeContinentsRequest = (keys: string) => {
    return of(this.getContinents(keys)).pipe(
      tap(() => console.log(`API Call at ${new Date()}`))
    );
  }

  ngOnInit(): void {
    console.log('init')
  }

  // The approach when you don't use 'keyup'
  // ngAfterViewInit(): void {
  //   this.keyup$$ = timer(1000).pipe(
  //     switchMap(() => fromEvent(this.typeahead?.nativeElement, 'keyup')),
  //     tap(() => console.log(this.typeahead?.nativeElement.value)),
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map((e: any) => e.target.value),
  //     switchMap(this.fakeContinentsRequest),
  //     tap(c => this.outputResult = c),
  //   ).subscribe();
  // }

  searchContinent($event: KeyboardEvent) {
    this.keyup$$ = timer(1000).pipe(
      tap(() => console.log($event)),
      debounceTime(200),
      distinctUntilChanged(),
      map((e: any) => (<HTMLInputElement>$event.target).value),
      switchMap(this.fakeContinentsRequest),
      tap(c => this.outputResult = c),
    ).subscribe();

  }


}
