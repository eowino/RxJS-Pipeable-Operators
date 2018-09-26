// @ts-check
import { Subscriber } from 'rxjs';

// wraps the subscriber and transforms it before passing it on
class MultiplySubscriber extends Subscriber {
  constructor(subscriber, number) {
    super(subscriber);
    this.number = number;
  }

  // extend subscriber to override _next
  _next(value) {
    this.destination.next(value * this.number);
  }
}

// use 'lift' to connect a 'source' to a 'subscriber'
const multiply = number => source =>
  source.lift({
    call(sub, source) {
      source.subscribe(new MultiplySubscriber(sub, number));
    }
  });

export default multiply;
