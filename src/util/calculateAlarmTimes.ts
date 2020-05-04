export const calculateAlarmTimes = (startTime: Date, endTime: Date, intervalInMins = 10) => {
  const SECONDS_IN_MIN = 60;

  const numAlarmsInMiddle = (endTime.getTime() - startTime.getTime()) / (intervalInMins * SECONDS_IN_MIN * 1000)

  const alarmsInMiddle: Array<Date> = []
  for (let i = 1; i < numAlarmsInMiddle + 1; i++) {
    alarmsInMiddle.push(new Date(startTime.getTime() + i * intervalInMins * SECONDS_IN_MIN * 1000));
  }
  
  return [
    startTime,
    ...alarmsInMiddle,
    endTime,
  ]
}