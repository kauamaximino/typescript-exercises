export function names(
  name: string,
  lastName?: string,
): {
  name: string;
  lastName?: string;
} {
  return {
    name,
    lastName,
  };
}

console.log(names('John', 'Doe'));

const squareOf = (x: number) => x * x;

console.log(squareOf(6));
