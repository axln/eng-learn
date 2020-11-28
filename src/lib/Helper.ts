export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reorderArr(arr: any[], from: number, to: number): any[] {
  const newArr = [...arr];
  newArr.splice(to, 0, newArr.splice(from, 1)[0]);
  return newArr;
}

export function equalArrays(arr1: any[], arr2: any[]): boolean {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
