declare module objects {
    export class Person {
        /**
         * Creates an instance of Person.
         * @param {string} name
         * @param {number} age
         */
        constructor(name: string, age: number);

        /**
         * This method outputs _name and " says Hello!" to the console
         * @returns {void}
         */
        saysHello():void;
    }
}