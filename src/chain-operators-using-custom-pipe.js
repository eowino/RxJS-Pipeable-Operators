// @ts-check
import { map, filter } from 'rxjs/operators';
import { pipe } from 'rxjs';

const customPipe = (...fns) => source =>
  fns.reduce((acc, fn) => fn(acc), source);

const multiply = number =>
  pipe(
    map(value => value * number),
    filter(value => value < 10)
  );

export default multiply;
