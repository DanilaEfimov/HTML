import {transport} from './classes'

let car = new transport.Car("Moskvich", "2024", 2024, "H123BH", "1", "Me");
let bike = new transport.SportBike("Yamaha", "passifica", 2024, "A234BH", "2", "Me too", transport.frame.carbone, true);

console.log("\nabout my car:");
car.displayInfo();
console.log("\nabout my bike:");
bike.displayInfo();

let docs = new transport.DocumentType("OSAGO");
let owner = new transport.OwnerImpl("Ivanov", "Ivan", "Ivanovich", new Date('December 17, 2021 04:28:00'),
                                    docs, "036VU", "3");

console.log("\nabout me: ");
owner.printDetails();