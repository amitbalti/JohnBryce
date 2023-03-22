// With this class we can create objects
class Person {
  name: string;
  age: number;
  city: string | undefined;
  // smart?: boolean;
  smart: boolean | undefined; // I can write it either with the '?' or with the ' | undefined'. So I won't have to define it
  yearOfBirth: number;

  constructor(name: string, age: number, city?: string, smart?: boolean) {
    // action that occurs when the object is creating.
    this.name = name; // 'this' - the whole class
    this.age = age;
    this.city = city;
    this.smart = smart;
    // if (smart) this.smart = smart; // We will need to write '?' in the constructor, next to the 'smart'.
    this.yearOfBirth = 2023 - age;
  }
}
// We will need to make every line with it's type.
export default Person; // When we want to use the class, we will export our class in this way.

// The name in classes will start with a capital letter!
// Math - is a class.
// random() is a method inside the Math class.
// methods are types of functions.
// properties. For example, log.
