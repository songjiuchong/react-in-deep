import { fibonacciWithTime } from './utils';

let count = 0;

const $root = document.getElementById('root');

function render(times) {
  setTimeout(() => {
    let currentCount = 0;
    while (count < times && currentCount < 10) {
      fibonacciWithTime(25);
      count++;
      currentCount++;
      $root.innerText = '当前计算个数：' + count;
    }
    render(times);
  }, 15);
}

render(10000);