import { from } from 'rxjs';
import * as Util from './util';

const observable$ = from(Util.numbers);
const observable1$ = from(Util.words);
const observable2$ = from(Util.roman);

// example 1
observable$.subscribe(value => console.log(value));

// example 2 - the object passed in is called a subscriber
observable1$.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed!'),
  error: value => console.log(value)
});

// example 3 - subscriber object
observable2$.subscribe(Util.subscriber);
