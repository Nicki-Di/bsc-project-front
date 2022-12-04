export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export function addLeadingZeros(num: number, totalLength: number = 2) {
  return String(num).padStart(totalLength, "0");
}
