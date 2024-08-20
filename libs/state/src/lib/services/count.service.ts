import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CounterStore } from '../store/count.store';

@Injectable({ providedIn: 'root' })
export class CounterService {
  constructor(
    private counterStore: CounterStore,
    private firestore: AngularFirestore
  ) {}

  init(): Observable<any> {
    return this.firestore.doc('counter/count').valueChanges().pipe(
      tap((data: any) => {
        if (data) {
          console.log("state datacount : ", data.count)
          this.counterStore.update({ count: data.count });
        }
      })
    );
  }

  private updateFirestore(newValue: number): Observable<void> {
    return from(this.firestore.doc('counter/count').set({ count: newValue }));
  }

  add(): Observable<void> {
    const currentValue = this.counterStore.getValue().count;
    this.counterStore.update({ count: currentValue + 1 });
    return this.updateFirestore(currentValue + 1);
  }
  
  subtract(): Observable<void> {
    const currentValue = this.counterStore.getValue().count;
    this.counterStore.update({ count: currentValue - 1 });
    return this.updateFirestore(currentValue - 1);
  }
}