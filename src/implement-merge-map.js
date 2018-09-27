import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

import * as Util from './util'

const observable$ = fromEvent(
    document,
    'click'
).pipe(scan(i => i + 1, 0));

observable$.subscribe(Util.subscriber);