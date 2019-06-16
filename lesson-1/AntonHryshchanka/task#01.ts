export function IsInArray<T>(arr: T[], ...search: T[]): boolean {
  const isValidArray: (arg: T[]) => boolean = (arg: T[]): boolean => {
    if (!arg || arg.length === 0) {
      return false;
    }
    if (arg.length === 1 && (search[0] === null || search[0] === undefined)) {
      return false;
    }

    return true;
  };

  if (!isValidArray(arr) || !isValidArray(search)) {
    return false;
  }

  const a: Set<T> = new Set(arr);
  const b: Set<T> = new Set(search);
  const intersection: Set<T> = new Set([...a].filter((x: T) => b.has(x)));

  return intersection.size === b.size;
}
