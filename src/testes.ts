import IStringArray from './interfaces/IStringArray';

class C {
    p = 12;
    m(): Array<IStringArray> {
        let numbers: Array<IStringArray> = ["a", "b"];
        return numbers;
    }
}   
export default C;