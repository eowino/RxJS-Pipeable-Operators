// @ts-check
import { from, Subscriber } from 'rxjs';
import * as Util from './util';

const observable$ = from(Util.numbers);

// wraps the subscriber and transforms it before passing it on
class DoubleSubscriber extends Subscriber {
  // extend subscriber to override _next
  _next(value) {
    this.destination.next(value * 2);
  }
}

// use 'lift' to connect a 'source' to a 'subscriber'
const double = source =>
  source.lift({
    call(sub, source) {
      source.subscribe(new DoubleSubscriber(sub));
    }
  });

// connect a source to a Subscriber with RxJS 'pipe'
// pipe takes a function which takes a source and returns a source
observable$.pipe(double).subscribe(Util.subscriber);
