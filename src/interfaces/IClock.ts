interface IClock {
    currentTime: string,
    setTime(d: Date): Date
}

export default IClock;