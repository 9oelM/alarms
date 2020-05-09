export interface SoundFile {
  displayedName: string;
  fileName: string;
}

export const ALARM_SOUNDS: Readonly<Array<SoundFile>> = [
  // https://onlineclock.net/sounds/?sound=Default
  {
    displayedName: `Quartz`,
    fileName: `quartz.mp3`,
  },
  // http://soundbible.com/2197-Analog-Watch-Alarm.html
  {
    displayedName: `Analog`,
    fileName: `analog.mp3`,
  },
  // http://soundbible.com/2206-Tolling-Bell.html
  {
    displayedName: `Tolling bell`,
    fileName: `tolling_bell.mp3`,
  },
  {
    displayedName: `None`,
    fileName: `None`,
  },
];
