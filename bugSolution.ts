function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, 2); // Correct usage
const result2 = add(parseInt("1", 10), 2); // Correct usage with type conversion
//To enable strictNullChecks and noImplicitAny in your tsconfig.json:
/*
{
  "compilerOptions": {
    "strictNullChecks": true,
    "noImplicitAny": true
  }
}
*/