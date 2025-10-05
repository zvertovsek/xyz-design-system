export interface DateParserUtilityInterface {
  /**
   * Formats the passed date to the specified format. By default it prints the date in ISO format (keeps time zone offset).
   */
  format: (date: Date, format?: string) => string;
  /**
   * Creates a string that indicates the time difference with the passed date and now.
   */
  fromNow: (date: Date) => string;
  /**
   * Checks whether the passed date is valid.
   */
  isValid: (date: Date) => boolean;
  /**
   * Checks whether the passed date is in the future.
   */
  isFuture: (date: Date) => boolean;
  /**
   * Subtracts the specified amount of days from the passed date.
   */
  subDays: (date: Date, amount: number) => Date;
  /**
   * Subtracts the specified amount of months from the passed date.
   */
  subMonths: (date: Date, amount: number) => Date;
  /**
   * Subtracts the specified amount of years from the passed date.
   */
  subYears: (date: Date, amount: number) => Date;
  /**
   * Calculates the date on the first day of the month of the passed date.
   */
  startOfMonth: (date: Date) => Date;
  /**
   * Calculates the date on the first day of the year of the passed date.
   */
  startOfYear: (date: Date) => Date;
  /**
   * Parses the date in specified format and returnes the representing Date.
   */
  parse: (date: string, format: string) => Date;
  /**
   * Parses the date in ISO format and returnes the representing Date.
   */
  parseISO: (date: string) => Date;
  /**
   * Gets the month number (zero indexed) of the passed date.
   */
  getMonth: (date: Date) => number;
  /**
   * Compares two passed dates and returns a number indicating which one is greater based on the specificied sort type.
   */
  compare: (date1: Date, date2: Date, type?: "asc" | "desc") => number;
  /**
   * Return the current ISO date.
   */
  currentISO: () => string;
  /**
   * Creates a duration from a received interval.
   */
  intervalToDuration: (start: Interval["start"], end: Interval["end"]) => Duration;
  /**
   * Differentiates the second date from the first date given and it returns the result in seconds.
   */
  differenceInSeconds: (dateLeft: Date, dateRight: Date) => number;
}
