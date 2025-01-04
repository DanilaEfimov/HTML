// Efimov Danila TypeScript file (c) 2025
// make function, which returns sum of three nums:

interface Entity {
id: number;
}
interface ToJsonStringify extends
Entity {
e1?: number;
e2: string;
}
const data: ToJsonStringify = {
id: 3,
e1: 12345,
e2: "Поле 2",
}

console.log(JSON.stringify(data));

// {"id":3,"e1":12345,"e2":"Поле 2"} - OK
// Oh mein Gott, was is das fur eine schone!
// It's like C++ ;)