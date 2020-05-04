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
    fileName: `tolling_bell.mp3`,
  },
  {
    displayedName: `Brass`,
    fileName: `tolling_bell.mp3`,
  },
  {
    displayedName: `Blazor`,
    fileName: `tolling_bell.mp3`,
  },
];
