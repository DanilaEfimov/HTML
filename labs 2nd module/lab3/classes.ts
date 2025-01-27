// Danila type script file (c). All rights recerved

interface Owner {
    getLastName(): string;
    getFirstName(): string;
    getMiddleName(): string;
    getDateOfBirth(): Date;
    getType(): DocumentType;
    getSeries(): string;
    getNumber(): string;

    printDetails(): void;
}

class OwnerImpl implements Owner {
    private lastName: string;
    private firstName: string;
    private middleName: string;
    private dateOfBirth: Date;
    private documentType: DocumentType;
    private documentSeries: string;
    private documentNumber: string;

    public getLastName(){ return this.lastName};
    public getFirstName(){ return this.firstName};
    public getMiddleName(){ return this.middleName};
    public getDateOfBirth(){ return this.dateOfBirth};
    public getType(){ return this.documentType};
    public getSeries(){ return this.documentSeries};
    public getNumber(){ return this.documentNumber};

    protected setLastName(newLastName : string){ this.lastName = newLastName};
    protected setFirstName(newFirstName : string){ this.firstName = newFirstName};
    protected setMiddleName(newMiddleName : string){ this.middleName = newMiddleName};
    protected setDateOfBirth(newDate : Date){ this.dateOfBirth = newDate};
    protected setType(newDocumentType : DocumentType){ this.documentType = newDocumentType};
    protected setSeries(newSeries : string){ this.documentSeries = newSeries};
    protected setNumber(newNumber : string){ this.documentNumber = newNumber};

    constructor(
        lastName: string,
        firstName: string,
        middleName: string,
        dateOfBirth: Date,
        documentType: DocumentType,
        documentSeries: string,
        documentNumber: string
    ) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.dateOfBirth = dateOfBirth;
        this.documentType = documentType;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }

    printDetails(): void {
        console.log(`Фамилия: ${this.lastName}`);
        console.log(`Имя: ${this.firstName}`);
        console.log(`Отчество: ${this.middleName}`);
        console.log(`Дата рождения: ${this.dateOfBirth.toLocaleDateString()}`);
        console.log(`Тип документа: ${this.documentType}`);
        console.log(`Серия документа: ${this.documentSeries}`);
        console.log(`Номер документа: ${this.documentNumber}`);
    }
}

interface Vehicle {
    getMake(): string;               
    getModel(): string;
    getYear(): number;
    getVin(): string;
    getRegistrationNumber(): string;
    getOwnerInfo(): string;

    // Метод для вывода сведений о транспортном средстве
    displayInfo(): void;
}

class Car implements Vehicle {
    private make: string;
    private model: string;
    private year: number;
    private vin: string;
    private registrationNumber: string;
    private ownerInfo: string;

    public getMake(){return this.make};               
    public getModel(){return this.model};
    public getYear(){return this.year};
    public getVin(){return this.vin};
    public getRegistrationNumber(){return this.registrationNumber};
    public getOwnerInfo(){return this.ownerInfo};

    protected setMake(newMake : string){ this.make = newMake};               
    protected setModel(newModel : string){ this.model = newModel};
    protected setYear(newYear : number){ this.year = newYear};
    protected setVin(newVin : string){ this.vin = newVin};
    protected setRegistrationNumber(newNumber : string){ this.registrationNumber = newNumber};
    protected setOwnerInfo(newOwnerInfo : string){ this.ownerInfo = newOwnerInfo};

    constructor(make: string, model: string, year: number, vin: string, registrationNumber: string, ownerInfo: string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.ownerInfo = ownerInfo;
    }

    // Определяем метод вывода информации о транспортном средстве
    displayInfo(): void {
        console.log(`Марка: ${this.make}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
    }
}

enum type {
    sportCar,
    track,
    cringe
}

enum bodywork {
    solid,
    carbone,
}

interface Auto extends Vehicle {
    getType() : type;
    getBodywork() : bodywork;
}

class SportCar implements Auto {
    private Type : type;
    private Bodywork : bodywork;
    private make: string;
    private model: string;
    private year: number;
    private vin: string;
    private registrationNumber: string;
    private ownerInfo: string;

    constructor(
        make: string, 
        model: string, 
        year: number, 
        vin: string, 
        registrationNumber: string, 
        ownerInfo: string,
        type: type,
        bodywork: bodywork
    ){
        this.make = make;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.ownerInfo = ownerInfo;
        this.Bodywork = bodywork;
        this.Type = type;
    }

    public getType(){return this.Type};
    public getBodywork(){return this.Bodywork};
    public getMake(){return this.make};               
    public getModel(){return this.model};
    public getYear(){return this.year};
    public getVin(){return this.vin};
    public getRegistrationNumber(){return this.registrationNumber};
    public getOwnerInfo(){return this.ownerInfo};

    public displayInfo(){
        console.log(`Марка: ${this.make}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
        console.log(`Тип: ${this.Type}`);
        console.log(`Кузов: ${this.Bodywork}`);
    }

    protected setType(newType : type) {this.Type = newType};
    protected setBodywork(newBodywork : bodywork) {this.Bodywork = newBodywork};
}

enum frame{
    aluminium,
    carbone,
    paper,
}

interface Bike extends Vehicle {
    getFrame(): frame;
    isSport(): boolean;
}

class SportBike implements Bike{
    private make: string;
    private model: string;
    private year: number;
    private vin: string;
    private registrationNumber: string;
    private ownerInfo: string;
    private frame: frame;
    private sport: boolean;

    constructor(
        make: string, 
        model: string, 
        year: number, 
        vin: string, 
        registrationNumber: string, 
        ownerInfo: string,
        frame: frame,
        sport: boolean
    ){
        this.make = make;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.ownerInfo = ownerInfo;
        this.frame = frame;
        this.sport = sport;
    }

    public getMake(){return this.make};               
    public getModel(){return this.model};
    public getYear(){return this.year};
    public getVin(){return this.vin};
    public getRegistrationNumber(){return this.registrationNumber};
    public getOwnerInfo(){return this.ownerInfo};
    public getFrame(){return this.frame};
    public isSport(){return this.sport};

    public displayInfo(){
        console.log(`Марка: ${this.make}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
        console.log(`Каркас: ${this.frame}`);
        console.log(`Спортивный: ${this.sport}`);
    }

    protected setFrame(newFrame : frame) {this.frame = newFrame};
    protected setSport() {this.sport = true};
}

// storage interface s
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;     // Дата создания хранилища
    vehicles: T[];          // Массив T

    getAllVehicles(): T[];  // Метод, возвращающий все элементы массива типа T
}

class Garage<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];

    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }

    // Метод для получения всех элементов массива типа T
    getAllVehicles(): T[] {
        return this.vehicles;
    }

    // Метод для добавления нового транспортного средства (по желанию)
    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }
}