function createCounter() {
    let count = 0; 

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
console.log(counter.getCount()); 





function memoizedFibonacci() {
    let cache = {};
    
    function fib(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n <= 1) {
            return n;
        }
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }
    
    return fib;
}

const fibonacci = memoizedFibonacci();
console.log(fibonacci(10));
console.log(fibonacci(15)); 
console.log(fibonacci(20)); 