import { Subscriber } from 'rxjs';

class MapSubscriber extends Subscriber {
    constructor(sub, fn) {
        super(sub)
        this.fn = fn;
    }  

    // the meat of the implementation boils down to how you implement _next
    _next(value) {
        this.destination.next(this.fn(value));
    }
}

// simply wires pieces together
const map = fn => source => source.lift({
    call(sub, source) {
        source.subscribe(new MapSubscriber(sub, fn));
    }
})

export default map;