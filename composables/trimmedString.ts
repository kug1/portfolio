export const trimmedString = (str: string | null, length: number) => {
  if (str) {
    return str.length > length
      ? str.substring(0, length - 3) + "..."
      : str.substring(0, length);
  } else {
    return null;
  }
};
