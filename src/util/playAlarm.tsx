import { Player } from "@react-native-community/audio-toolkit";
import { Platform } from "react-native";
import { SoundFile } from '@/constants/sounds';

// eslint-disable-next-line quotes
export function playAlarm(fileName: SoundFile['fileName']): Player | null {
  let p: Player | null = null;

  setTimeout(() => {
    p = new Player(fileName, {  continuesToPlayInBackground: true });
    p.looping = true;
    if (Platform.OS === `android`) {
      p.speed = 0.0;
    }
    p.play((err) => {
      setTimeout(() => p?.destroy(), 30 * 1000);
      console.log(err);
    });
  });

  return p;
}
