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

observable$.subscribe(new DoubleSubscriber(Util.subscriber));