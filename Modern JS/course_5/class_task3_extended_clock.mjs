import Clock from './class_task3_clock.mjs';

class ExtendedClock extends Clock {
    constructor(props) {
        super(props) ;
        let { precision = 1000} = props;
        this.precision = precision;
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision)
    }
}
const clock = new ExtendedClock({ 
    template: 'h:m:s', 
    precision: 10000 })
clock.start();