// @ts-check
import { from } from 'rxjs';
import multiply from './MultiplySubscriber'
import * as Util from './util';

const observable$ = from(Util.numbers);

// connect a source to a Subscriber with RxJS 'pipe'
// pipe takes a function which takes a source and returns a source
observable$.pipe(multiply(3)).subscribe(Util.subscriber);
observable$.pipe(multiply(10)).subscribe(Util.subscriber);
