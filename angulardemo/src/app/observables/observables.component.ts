import { Component, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnDestroy{
  ngOnDestroy(): void {
    this.subscribe.unssubscribe();
  }
  publisher: Observable<string> | null | undefined;
  fruits: Array<string> = [];
  anyErrors: boolean = false;
  finished: boolean = false;

  subscribe: any;

  //https://rxjs.dev/deprecations/subscribe-arguments
  start() {
    alert('start called');
    this.publisher = new Observable(this.subscriber);
    // this.subscribe = this.publisher.subscribe(
    //   (fruit) => this.fruits.push(fruit),
    //   (error) => {
    //     this.anyErrors = true;
    //     console.log(error);
    //   },
    //   () => (this.finished = true)
    // );
    this.subscribe = this.publisher.subscribe({
      next:(fruit) => this.fruits.push(fruit),
      error: (error) => {
        this.anyErrors = true;
        console.log(error);
      },
      complete: () => (this.finished = true)
  });

    // recommended
    of([1, 2, 3]).subscribe((v) => console.info(v));
    // also recommended
    of([1, 2, 3]).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  subscriber(observer: any) {
    console.log('starts producing stream of data');
    setTimeout(() => observer.next('Apple'), 1000);
    setTimeout(() => observer.next('Oranges'), 2000);
    setTimeout(() => observer.next('Mangoes'), 3000);
    setTimeout(() => observer.next('Bananas'), 4000);
    setTimeout(() => observer.next('Chickoo'), 5000);
    // setTimeout(() => observer.error('Went wrong'), 6000);
    setTimeout(() => observer.next('Grapes'), 6000);
    setTimeout(() => observer.complete(), 6000);
    setTimeout(() => observer.next('aslkdj'), 7000);
  }

  title: string = 'Some title';
  // main and queue threads
  getUsers() {
    // for(let i=1;i<=1000000;i++){
    //   console.log(i)

    // }
    this.title = 'changes';
    // rest api call - asynchronous
    setTimeout(() => {
      this.title = 'async call';
      console.log(this.title);
    }, 5000);
    // promise => asynchronpus : eager
    // then catch, single => GET => fetch list of items[mobile]
    // reactive programming
    // real time processing, observables => real time stream of data
  }
}
