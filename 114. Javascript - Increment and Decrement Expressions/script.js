// The ++ operator does two things. It increments a variable and it returns the value of the variable.


// pre increment
var x = 5; // 5
++x;       // x = 6 in console
x;         // x = 6 in console

// pre decrement
var x = 5; // 5
--x;       // x = 4 in console
x;         // x = 4 in console

// post increment
var x = 5; // 5
x++;       // x still 5 in console
x;         // x = 6 in console

// post decrement
var x = 5; // 5
x--;       // x still 5 in console
x;         // x = 4 in console

/*
Short Hand  // arti */
x = f() 	// x = f()
x += f() 	// x = x + f()
x -= f() 	// x = x - f()
x *= f() 	// x = x * f()
x /= f() 	// x = x / f()
x %= f() 	// x = x % f()
x **= f() 	// x = x ** f()
x <<= f() 	// x = x << f()
x >>= f() 	// x = x >> f()
x >>>= f() 	// x = x >>> f()
x &= f() 	// x = x & f()
x ^= f() 	// x = x ^ f()
x |= f() 	// x = x | f()
x &&= f() 	// x && (x = f())
x ||= f() 	// x || (x = f())
x ??= f() 	// x ?? (x = f())