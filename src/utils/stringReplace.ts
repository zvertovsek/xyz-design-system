export const stringReplace = (text: string, separator: string, cb: (match: string, index: number) => JSX.Element) => {
  const esc = separator.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
  const regexString = `(${esc})`;
  const textArray = text.split(new RegExp(regexString, "ig"));
  let matchIndex = 0;

  return textArray.map((str) => {
    if (str.toLowerCase() === separator.toLowerCase()) {
      return cb(str, matchIndex++);
    }
    return str;
  });
};
