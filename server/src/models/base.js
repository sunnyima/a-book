class Base {
    constructor() {
        this.id = {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        };
    }
}

class Person extends Base {
    constructor() {
        super();
        this.name = {
            type: DataTypes.STRING,
            allowNull: false
        };
    ...
    }
}

// using separate class for attributes
const person = sequelize.define('person', new Person());

// possible destructuring of attributes/options
const someModel= sequelize.define('someModel', (new SomeModel()).attributes, (new SomeModel()).options);