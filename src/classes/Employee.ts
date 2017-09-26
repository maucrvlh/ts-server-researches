import Person from './Person';

class Employee extends Person {
    private departament: string;
    constructor(name: string, depto: string) {
        super(name);
        this.departament = depto;
    }
    public getElevatorPitch(): string {
        return `Olá, me chamo ${this.name} e trabalho no ${this.departament}`;
    }
}

export default Employee;