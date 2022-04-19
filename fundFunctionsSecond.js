//1. Write a JavaScript program to generate a random hexadecimal color code.

//#Source https://bit.ly/2neWfJ2

const random_hex_color_code = () => {
  let number = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + number.slice(0, 6);
};
console.log(random_hex_color_code())

//2. Write a JavaScript program to removes non-printable ASCII characters from a given string.

//#Source https://bit.ly/2neWfJ2

const remove_non_ascii = string => string.replace(/[^\x20-\x7E]/g, '');
console.log(remove_non_ascii('äÄçÇéÉêw3resouröceÖÐþúÚ'));

//3. Write a JavaScript program to convert the length of a given string in bytes.

//#Source https://bit.ly/2neWfJ2

const byte_size = string => new Blob([string]).size;
console.log(byte_size('123456'));  
console.log(byte_size('Hello World'));  
console.log(byte_size('Ã¢')); 

//4. Write a JavaScript program to replace the names of multiple object keys with the values provided.

//#Source https://bit.ly/2neWfJ2 
const rename_keys = (keys_map, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keys_map[key] || key]: obj[key] }
    }),
    {}
  );
const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = rename_Keys({ name: 'firstName', job: 'Actor' }, obj);
console.log("New Object");
console.log(result);

//5. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set comparing rule.

//#Source https://bit.ly/2neWfJ2

const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
console.log(reduceWhich([1, 3, 2])); 
console.log(reduceWhich([10, 30, 20], (a, b) => b - a));  
console.log(reduceWhich(
  [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
  (a, b) => a.age - b.age)); 