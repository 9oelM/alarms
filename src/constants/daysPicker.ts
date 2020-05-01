import { Days } from "@/typings";

export const IdxToDay: Readonly<{
  [key: number]: Days,
}> = Object.freeze({
  0: `Mon`,
  1: `Tue`,
  2: `Wed`,
  3: `Thu`,
  4: `Fri`,
  5: `Sat`,
  6: `Sun`,
});
