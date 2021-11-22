class Person {
	constructor(protected name: string) {}

	sayHello(): void {
		console.log(`Hello, my name is ${this.name}`);
	}
}

const janeDoe = new Person("Jane");
janeDoe.sayHello();