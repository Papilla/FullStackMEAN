class Car {
    constructor(carProperties) {
    }
}

export class CarBuilder {
    withEngine(type, brand, model) {
        this.engineType = type;
        this.engineBrand = brand;
        this.engineModel = model;
        return this;
    }

    withSuspension(type) {
        this.suspesionType = type;
        return this;
    }

    withSits(count) {
        this.sitsCount = count;
        return this;
    }

    withDoors(count) {
        this.doorsCount = count;
        return this;
    }

    withAirbags(count, brand, material) {
        this.hasAirBags = true;
        this.airBagsCount = count;
        this.airBagsBrand = brand;
        this.airBagsMaterial = material;
        return this;
    }

    withSpireTire(brand) {
        this.hasSpareTire = true;
        this.spareTireBrand = brand;
        return this;
    }

    withChassisColor(color) {
        this.chassisColor = color;
        return this;
    }

    build() {
        return new Car({
            engineType: this.engineType,
            engineBrand: this.engineBrand,
            engineModel: this.engineModel,
            suspesionTtype: this.suspesionTtype,
            doorsCount: this.doorsCount,
            sitsCount: this.sitsCount,
            hasAirBags: this.hasAirBags,
            airBagsCount: this.airBagsCount,
            airBagsBrand: this.airBagsBrand,
            airBagsMaterial: this.airBagsMaterial,
            hasSpareTire: this.hasSpareTire,
            spareTireBrand: this.spareTireBrand,
            chassisColor: this.chassisColor,
        })
    }
}

const saedan = new CarBuilder()
    .withEngine('in line', 'mercedez', 'MFJ465')
    .withSuspension('hybrid')
    .withSits(4)
    .withDoors(4)
    .withAirbags(6, 'mercedez', 'nylon')
    .withSpireTire('firestone')
    .withChassisColor('gray')
    .build()
    ;

const sport = new CarBuilder()
    .withEngine('electric', 'ferrari', 'FE807')
    .withSuspension('hybrid')
    .withSits(2)
    .withDoors(2)
    .withChassisColor('red')
    .build()
    ;