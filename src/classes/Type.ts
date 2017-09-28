type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

export default class {
    static test() {
        var people: LinkedList<Person>;
        var s = people.name;
        var x = people.next.name;
        var z = people.next.next.next.next.next;
    }
}