"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transport = void 0;
// Danila type script file (c). All rights recerved
var transport;
(function (transport) {
    var DocumentType = /** @class */ (function () {
        function DocumentType(type) {
            this.type = type;
        }
        return DocumentType;
    }());
    transport.DocumentType = DocumentType;
    var OwnerImpl = /** @class */ (function () {
        function OwnerImpl(lastName, firstName, middleName, dateOfBirth, documentType, documentSeries, documentNumber) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.middleName = middleName;
            this.dateOfBirth = dateOfBirth;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }
        OwnerImpl.prototype.getLastName = function () { return this.lastName; };
        ;
        OwnerImpl.prototype.getFirstName = function () { return this.firstName; };
        ;
        OwnerImpl.prototype.getMiddleName = function () { return this.middleName; };
        ;
        OwnerImpl.prototype.getDateOfBirth = function () { return this.dateOfBirth; };
        ;
        OwnerImpl.prototype.getType = function () { return this.documentType; };
        ;
        OwnerImpl.prototype.getSeries = function () { return this.documentSeries; };
        ;
        OwnerImpl.prototype.getNumber = function () { return this.documentNumber; };
        ;
        OwnerImpl.prototype.setLastName = function (newLastName) { this.lastName = newLastName; };
        ;
        OwnerImpl.prototype.setFirstName = function (newFirstName) { this.firstName = newFirstName; };
        ;
        OwnerImpl.prototype.setMiddleName = function (newMiddleName) { this.middleName = newMiddleName; };
        ;
        OwnerImpl.prototype.setDateOfBirth = function (newDate) { this.dateOfBirth = newDate; };
        ;
        OwnerImpl.prototype.setType = function (newDocumentType) { this.documentType = newDocumentType; };
        ;
        OwnerImpl.prototype.setSeries = function (newSeries) { this.documentSeries = newSeries; };
        ;
        OwnerImpl.prototype.setNumber = function (newNumber) { this.documentNumber = newNumber; };
        ;
        OwnerImpl.prototype.printDetails = function () {
            console.log("\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this.lastName));
            console.log("\u0418\u043C\u044F: ".concat(this.firstName));
            console.log("\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ".concat(this.middleName));
            console.log("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(this.dateOfBirth.toLocaleDateString()));
            console.log("\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this.documentType));
            console.log("\u0421\u0435\u0440\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this.documentSeries));
            console.log("\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this.documentNumber));
        };
        return OwnerImpl;
    }());
    transport.OwnerImpl = OwnerImpl;
    var Car = /** @class */ (function () {
        function Car(make, model, year, vin, registrationNumber, ownerInfo) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.ownerInfo = ownerInfo;
        }
        Car.prototype.getMake = function () { return this.make; };
        ;
        Car.prototype.getModel = function () { return this.model; };
        ;
        Car.prototype.getYear = function () { return this.year; };
        ;
        Car.prototype.getVin = function () { return this.vin; };
        ;
        Car.prototype.getRegistrationNumber = function () { return this.registrationNumber; };
        ;
        Car.prototype.getOwnerInfo = function () { return this.ownerInfo; };
        ;
        Car.prototype.setMake = function (newMake) { this.make = newMake; };
        ;
        Car.prototype.setModel = function (newModel) { this.model = newModel; };
        ;
        Car.prototype.setYear = function (newYear) { this.year = newYear; };
        ;
        Car.prototype.setVin = function (newVin) { this.vin = newVin; };
        ;
        Car.prototype.setRegistrationNumber = function (newNumber) { this.registrationNumber = newNumber; };
        ;
        Car.prototype.setOwnerInfo = function (newOwnerInfo) { this.ownerInfo = newOwnerInfo; };
        ;
        // Определяем метод вывода информации о транспортном средстве
        Car.prototype.displayInfo = function () {
            console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.make));
            console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.model));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this.year));
            console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this.vin));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this.registrationNumber));
        };
        return Car;
    }());
    transport.Car = Car;
    var type;
    (function (type) {
        type[type["sportCar"] = 0] = "sportCar";
        type[type["track"] = 1] = "track";
        type[type["cringe"] = 2] = "cringe";
    })(type = transport.type || (transport.type = {}));
    var bodywork;
    (function (bodywork) {
        bodywork[bodywork["solid"] = 0] = "solid";
        bodywork[bodywork["carbone"] = 1] = "carbone";
    })(bodywork = transport.bodywork || (transport.bodywork = {}));
    var SportCar = /** @class */ (function () {
        function SportCar(make, model, year, vin, registrationNumber, ownerInfo, type, bodywork) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.ownerInfo = ownerInfo;
            this.Bodywork = bodywork;
            this.Type = type;
        }
        SportCar.prototype.getType = function () { return this.Type; };
        ;
        SportCar.prototype.getBodywork = function () { return this.Bodywork; };
        ;
        SportCar.prototype.getMake = function () { return this.make; };
        ;
        SportCar.prototype.getModel = function () { return this.model; };
        ;
        SportCar.prototype.getYear = function () { return this.year; };
        ;
        SportCar.prototype.getVin = function () { return this.vin; };
        ;
        SportCar.prototype.getRegistrationNumber = function () { return this.registrationNumber; };
        ;
        SportCar.prototype.getOwnerInfo = function () { return this.ownerInfo; };
        ;
        SportCar.prototype.displayInfo = function () {
            console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.make));
            console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.model));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this.year));
            console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this.vin));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this.registrationNumber));
            console.log("\u0422\u0438\u043F: ".concat(this.Type));
            console.log("\u041A\u0443\u0437\u043E\u0432: ".concat(this.Bodywork));
        };
        SportCar.prototype.setType = function (newType) { this.Type = newType; };
        ;
        SportCar.prototype.setBodywork = function (newBodywork) { this.Bodywork = newBodywork; };
        ;
        return SportCar;
    }());
    transport.SportCar = SportCar;
    var frame;
    (function (frame) {
        frame[frame["aluminium"] = 0] = "aluminium";
        frame[frame["carbone"] = 1] = "carbone";
        frame[frame["paper"] = 2] = "paper";
    })(frame = transport.frame || (transport.frame = {}));
    var SportBike = /** @class */ (function () {
        function SportBike(make, model, year, vin, registrationNumber, ownerInfo, frame, sport) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.ownerInfo = ownerInfo;
            this.frame = frame;
            this.sport = sport;
        }
        SportBike.prototype.getMake = function () { return this.make; };
        ;
        SportBike.prototype.getModel = function () { return this.model; };
        ;
        SportBike.prototype.getYear = function () { return this.year; };
        ;
        SportBike.prototype.getVin = function () { return this.vin; };
        ;
        SportBike.prototype.getRegistrationNumber = function () { return this.registrationNumber; };
        ;
        SportBike.prototype.getOwnerInfo = function () { return this.ownerInfo; };
        ;
        SportBike.prototype.getFrame = function () { return this.frame; };
        ;
        SportBike.prototype.isSport = function () { return this.sport; };
        ;
        SportBike.prototype.displayInfo = function () {
            console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.make));
            console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.model));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this.year));
            console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this.vin));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this.registrationNumber));
            console.log("\u041A\u0430\u0440\u043A\u0430\u0441: ".concat(this.frame));
            console.log("\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439: ".concat(this.sport));
        };
        SportBike.prototype.setFrame = function (newFrame) { this.frame = newFrame; };
        ;
        SportBike.prototype.setSport = function () { this.sport = true; };
        ;
        return SportBike;
    }());
    transport.SportBike = SportBike;
})(transport || (exports.transport = transport = {}));
var Garage = /** @class */ (function () {
    function Garage() {
        this.creationDate = new Date();
        this.vehicles = [];
    }
    // Метод для получения всех элементов массива типа T
    Garage.prototype.getAllVehicles = function () {
        return this.vehicles;
    };
    // Метод для добавления нового транспортного средства (по желанию)
    Garage.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    return Garage;
}());
