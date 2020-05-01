export interface SoundFile {
  displayedName: string;
  fileName: string;
}

export const ALARM_SOUNDS: Readonly<Array<SoundFile>> = [
  {
    displayedName: `None`,
    fileName: `None`,
  },
  {
    displayedName: `Blink`,
    fileName: `blink.mp3`,
  },
  {
    displayedName: `Brass`,
    fileName: `brass.mp3`,
  },
  {
    displayedName: `Blazor`,
    fileName: `blazor.mp3`,
  },
];
