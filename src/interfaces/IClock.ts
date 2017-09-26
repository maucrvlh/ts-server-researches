interface IClock {
    currentTime: Date,
    setTime(d: Date): Date
}

export default IClock;