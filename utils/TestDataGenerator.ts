import { faker } from '@faker-js/faker';

export class TestDataGenerator {

    static getFirstName(): string {
        return faker.person.firstName();
    }

    static getLastName(): string {
        return faker.person.lastName();
    }

    static getFullName(): string {
        return `${faker.person.firstName()} ${faker.person.lastName()}`;;
    }

    static getEmail(): string {
        return faker.internet.email().toLowerCase();
    }

    static getUniqueEmail(): string {
        return `user_${Date.now()}@gmail.com`;
    }

    static getPassword(): string {
        return faker.internet.password({
            length: 10,
            memorable: false
        });
    }

    static getMobileNumber(): string {
        return faker.string.numeric(10);
    }

    static getCompanyName(): string {
        return faker.company.name();
    }

    static getCity(): string {
        return faker.location.city();
    }

    static getState(): string {
        return faker.location.state();
    }

    static getCountry(): string {
        return faker.location.country();
    }

    static getZipCode(): string {
        return faker.location.zipCode();
    }

    static getAddress(): string {
        return faker.location.streetAddress();
    }

    static getRandomNumber(min: number, max: number): number {
        return faker.number.int({ min, max });
    }

    static getDOB(): { day: string; month: string; year: string } {

        const dob = faker.date.birthdate({
            min: 18,
            max: 60,
            mode: 'age'
        });

        return {
            day: String(dob.getDate()),
            month: String(dob.getMonth() + 1),
            year: String(dob.getFullYear())
        };
    }

    static getRandomText(): string {
        return faker.lorem.sentence();
    }
}