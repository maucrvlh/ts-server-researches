import IClock from '../interfaces/IClock';

class Clock implements IClock {
    currentTime = new Date();
    setTime(newDate: Date) {
        return this.currentTime;
    }
}

export default Clock;