import t from 'tap'
import { ms } from '../dist/esm/ms.js'
t.equal(ms(0.123), '123µs')
t.equal(ms(3), '3ms')
t.equal(ms(3.333345678), '3.333ms')
t.equal(ms(15.43), '15ms')
t.equal(ms(154.3), '154ms')
t.equal(ms(1543), '1.543s')
t.equal(ms(5435), '5.435s')
t.equal(ms(15435), '15s')
t.equal(ms(1000 * 60 * 60), '1h')
