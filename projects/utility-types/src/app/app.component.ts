import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }

interface Person {
  name: string;
  age: number;
}

/* Partial<T>: convierte todos los atributos de un tipo en opcionales. Ejemplo */
type PartialPerson = Partial<Person>;
// equivalente a:
// type PartialPerson = {
//   name?: string;
//   age?: number;
// }

/* Readonly<T>: convierte todos los atributos de un tipo en de solo lectura */
type ReadonlyPerson = Readonly<Person>;
// equivalente a:
// type ReadonlyPerson = {
//   readonly name: string;
//   readonly age: number;
// }

/* Pick<T, K>: extrae un subconjunto de un tipo seleccionando solo algunos de sus atributos. */
type PickPerson = Pick<Person, 'name'>;
// equivalente a:
// type PickPerson = {
//   name: string;
// }

/* Omit<T, K>: extrae un subconjunto de un tipo eliminando algunos de sus atributos.  */
type OmitPerson = Omit<Person, 'age'>;
// equivalente a:
// type OmitPerson = {
//   name: string;
// }

/*Record<K, T>: crea un tipo con un conjunto de campos clave y un tipo de valor común  */
type PhoneBook = Record<'Alice' | 'Bob', string>;
// equivalente a:
// type PhoneBook = {
//   Alice: string;
//   Bob: string;
// }

/* Exclude<T, U>: obtiene un tipo que excluye de T aquellos elementos que también están en U */
type ExcludeNumbers = Exclude<'a' | 'b' | 'c' | 1 | 2 | 3, 1 | 2 | 3>;
// equivalente a:
// type ExcludeNumbers = 'a' | 'b' | 'c'

/* Extract<T, U>: obtiene un tipo que extrae de T aquellos elementos que también están en U. */
type ExtractNumbers = Extract<'a' | 'b' | 'c' | 1 | 2 | 3, 1 | 2 | 3>;
// equivalente a:
// type ExtractNumbers = 1 | 2 | 3

/* NonNullable<T> es un utility type de TypeScript que elimina la posibilidad de valores nulos y undefined de un tipo. Por ejemplo: */
type NonNullablePerson = NonNullable<Person | null | undefined>;
// equivalente a:
// type NonNullablePerson = Person

/* ReturnType<T>: obtiene el tipo de retorno de una función */
function add(x: number, y: number): number {
  return x + y;
}
type AddReturnType = ReturnType<typeof add>;
// equivalente a:
// type AddReturnType = number

/* InstanceType<T>: obtiene el tipo de instancia de una clase o constructor function. */
class PersonClass {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
type PersonInstanceType = InstanceType<typeof PersonClass>;
// equivalente a:
// type PersonInstanceType = Person


/* Required<T>: convierte todos los atributos opcionales de un tipo en requeridos */
type RequiredPerson = Required<Person>;
// equivalente a:
// type RequiredPerson = {
//   name: string;
//   age: number;
// }


/* ThisType<T>: convierte una función en una función con el tipo this especificado */
type PersonFunction = ThisType<(this: Person, name: string) => void>;
// equivalente a:
// type PersonFunction = (this: Person, name: string) => void

