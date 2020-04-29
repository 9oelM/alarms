function add0IfOneDigit(num: number): string {
  return num.toString().length === 1 ? `0${num}` : num.toString();
}

export function formatHHMM({ date }: { date: Date }): string {
  return `${add0IfOneDigit(date.getHours())}:${add0IfOneDigit(
    date.getMinutes(),
  )}`;
}
