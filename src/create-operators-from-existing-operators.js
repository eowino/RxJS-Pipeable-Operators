// @ts-check
import { map } from 'rxjs/operators';

// the proper way to create new operators is to use ones that you know work
// and have built in error handling, subscribers and unsubscribing

// use 'lift' to connect a 'source' to a 'subscriber'
const multiply = number => map(value => value * number);

export default multiply;
