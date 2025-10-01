# javascript operators: (1)

<aside>
🧭

A clearer, structured guide to JavaScript operators, equality, type conversion, and a few common pitfalls.

</aside>

---

## Overview

- ECMAScript defines the rules for JavaScript.
- This page covers:
    - Operator categories
    - Equality: == vs ===
    - Type conversion
    - Truthy and falsy values
    - Floating‑point precision (0.1 + 0.2)
    - Comparisons with null and undefined
    - String and number comparisons
    - NaN behavior
    - Logical vs bitwise operators

---

## Operator categories

1. Arithmetic: `+`, `-`, `*`, `/`, `%`
2. Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
3. Comparison: `<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`
4. Logical: `&&`, `||`, `!`
5. Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`

---

## Equality: `==` vs `===`

- `==` performs type coercion before comparison.
- `===` compares both type and value without coercion.

```jsx
let x = 4;
let y = "4";
console.log(x == y);  // true  ("4" coerces to 4)
console.log(x === y); // false (number !== string)
```

Use `===` by default to avoid unintended coercion.

---

## Type conversion

Explicit conversions:

- String → Number
    
    ```jsx
    let z = "10";
    let a = Number(z);
    console.log(a); // 10
    ```
    
- Number → String
    
    ```jsx
    let z = 10;
    let a = String(z);
    console.log(a);        // "10"
    console.log(typeof a); // "string"
    ```
    
- Boolean → Number
    
    ```jsx
    console.log(Number(true));  // 1
    console.log(Number(false)); // 0
    ```
    
- null and undefined to Number
    
    ```jsx
    console.log(Number(null));      // 0
    console.log(Number(undefined)); // NaN
    ```
    
- Boolean → String
    
    ```jsx
    console.log(String(true));       // "true"
    console.log(typeof String(true)); // "string"
    console.log(String(false));      // "false"
    ```
    

Why input is often string by default?

- User input typically arrives as text.
- JavaScript avoids guessing types.
- Strings are a universal interchange format.
- You can convert explicitly (Number, parseInt, Boolean, etc.).

```jsx
let a = "121ac";
let b = Number(a); // NaN (Not a Number)
console.log(typeof b); // "number" (NaN's type is number)
```

---

## Truthy, falsy, and Boolean()

```jsx
console.log(Boolean(0));   // false
console.log(Boolean("")); // false
console.log(Boolean(null)) // false
// Most other numbers and non-empty strings are truthy
```

---

## Floating‑point precision: 0.1 + 0.2

Binary floating‑point cannot represent some decimals exactly (e.g., 0.1, 0.2).

```jsx
let a = 0.1;
let b = 0.2;
let c = a + b;
console.log(c); // 0.30000000000000004
```

Reason: some decimals are repeating in binary (e.g., 0.2 ≈ 0.001100110011…). Computers store approximations, so sums can have small errors.

Common workarounds:

- Scale to integers, then rescale
    
    ```jsx
    const sum = (0.1 * 100 + 0.2 * 100) / 100; // 0.3
    ```
    
- Use toFixed or rounding utilities where display precision matters
    
    ```jsx
    Number((0.1 + 0.2).toFixed(2)); // 0.3
    ```
    
- For critical finance/math, use decimal libraries.

---

## null and undefined in comparisons

Loose equality and ordering behave differently:

```jsx
// Loose equality
console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(null == 0);      // false
console.log(null == "");    // false
console.log(null == true);   // false
console.log(null == false);  // false

// Relational comparisons convert null → 0 and undefined → NaN
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null > 0);  // false
console.log(null < 0);  // false

console.log(null >= undefined); // false (undefined → NaN)
console.log(undefined >= 0);    // false (NaN involved)
```

---

## String, number comparisons, and coercion

```jsx
console.log("Rohit" > "Mohit"); // true (lexicographic, code point order)
console.log(10 >= "10");        // true ("10" → 10)
```

When comparing numbers with strings or booleans, JavaScript often coerces operands to numbers.

```jsx
console.log(null == " "); // false (empty space string is not loosely equal to null)
console.log(NaN == NaN);   // false (NaN is never equal, use Number.isNaN)
```

Prefer `===` and explicit conversion to avoid surprises.

---

## Logical vs bitwise operators

- `&&` and `||` are logical operators. They work with truthiness and short‑circuit.
- `&` and `|` are bitwise operators. They operate on 32‑bit integer representations.

```jsx
console.log(true && false); // false  (logical AND)
console.log(true & false);  // 0      (bitwise AND)
console.log(true || false); // true   (logical OR)
console.log(true | false);  // 1      (bitwise OR)
```

### Bitwise AND `&`

Compares each bit, returns 1 only if both bits are 1.

```jsx
console.log(5 & 3);
// 5 = 0101
// 3 = 0011
//     0001 → 1
```

### Bitwise OR `|`

Compares each bit, returns 1 if at least one bit is 1.

```jsx
console.log(5 | 3);
// 5 = 0101
// 3 = 0011
//     0111 → 7
```

### Practical uses

- Check even or odd via the least significant bit
    
    ```jsx
    let num = 7;
    if (num & 1) console.log("Odd"); else console.log("Even");
    ```
    
- Setting and checking flags
- Low‑level optimizations (rarely needed in modern JS)

---

## Quick tips

- Prefer `===` and `!==` over `==` and `!=`.
- Convert types explicitly with `Number`, `String`, `Boolean`, or parsing functions.
- Be careful with floating‑point math. Round for display and consider scaling or libraries for exactness.
- Avoid relying on coercion in comparisons. Keep operands the same type.
- Use `Number.isNaN(x)` to test for NaN.