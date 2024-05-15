class Car {
    constructor(
        engineType,
        engineBrand,
        engineModel,
        suspesionType,
        doorsCount,
        sitsCount,
        hasAirBags,
        airBagsCount,
        airBagsBrand,
        airBagsMaterial,
        hasSpareTire,
        spareTireBrand,
    ) {
    }
}

const sport = new Car(
    "electric",
    "ferrari",
    "XFD123",
    "rigid",
    2,
    2,
    true,
    4,
    "ferrari",
    "nylon",
    true,
    "good year"
);

const sedan = new Car(
    "electric",
    "toyota",
    "TRE234",
    "rigid",
    4,
    6,
    true,
    4,
    "ferrari",
    "nylon",
    true,
    "good year"
);

class Car {
    constructor(carProperties) { };
}


const sport2 = new Car({
    engineType: "electric",
    engineBrand: "ferrari",
    engineModel: "XFD123",
    suspesionType: "rigid",
    doorsCount: 2,
    sitsCount: 2,
    hasAirBags: true,
    airBagsCount: 4,
    airBagsBrand: "ferrari",
    airBagsMaterial: "nylon",
    hasSpareTire: true,
    spareTireBrand: "good year",
});