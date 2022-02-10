**Type ahead**

**Introduction**

This recipe demonstrates the creation of type ahead client side code. The demo aims to create an autocomplecation input field, that once we type keywords in the field,
the results will be shown below on the same page

**Key Codes in pure JavaScript**
```javascript
fromEvent(document.getElementById('01-type-ahead'), 'keyup')
  .pipe(
    debounceTime(200),
    map((e: any) => e.target.value),
    distinctUntilChanged(),
    switchMap(fakeContinentsRequest),
    tap(c => (document.getElementById('output').innerText = c.join('\n')))
  )
  .subscribe();
```
- debounceTime is used to avoid the fast input without 200ms, 
which will cause the API call issue sometimes if without time deboubced
- map is used to create an observable from keyboard input
- distinctUntilChanged used here is to stop emit only when the current value is different 
than the last
- switchMap is used to do the API Call based on the lasted keyboard input and return the
filtered continent list as an observable
- tap is using to make a side effects here to display the result list on the page;

**PS:**
1. when rewrite the vanilla JavaScript code into Angular, we need to use viewChild 
rather than document.getElementById, be careful the id use in viewChild should follow the Anuglar
rule, which is #id
2. Compare with using fromEvent, we can use (keyup) or (change) in HTML Template to call functions
in TypeScript, which is based on the HTMLElement: change event
3. Type assertion: e.g., <HTMLInputElement\>

**PPS**
1. Debugging: 
   1. removing some part and test the rest, for example, cutting off from the half part;
   2. always use console.log to check the bug position;

**Useful Links**
1. [Learn RxJS Demo - Type Ahead](https://www.learnrxjs.io/learn-rxjs/recipes/type-ahead)
2. [Learn RxJS - Operators](https://www.learnrxjs.io/learn-rxjs/operators/complete)
3. [Angular Guide - Type-ahead suggestions](https://angular.io/guide/practical-observable-usage)
4. [Mozilla - HTMLElement: change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
