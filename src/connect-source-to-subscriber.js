// @ts-check
import { from, Subscriber, Observable } from 'rxjs';
import * as Util from './util';

const observable$ = from(Util.numbers);

// wraps the subscriber and transforms it before passing it on
class DoubleSubscriber extends Subscriber {
  // extend subscriber to override _next
  _next(value) {
    this.destination.next(value * 2);
  }
}

// connect a source to a Subscriber with RxJS 'pipe'
// pipe takes a function which takes a source and returns a source
observable$
  .pipe(source => {
    // shouldn't be doing it this way
    const o$ = new Observable();
    o$.source = source;
    o$.operator = {
      call(sub, source) {
        source.subscribe(new DoubleSubscriber(sub));
      }
    };
    return o$;
  })
  .subscribe(Util.subscriber);
