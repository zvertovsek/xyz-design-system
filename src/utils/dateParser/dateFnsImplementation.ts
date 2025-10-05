import * as dateFns from "date-fns";
import { DateParserUtilityInterface } from "./dateParserInterface";

export default class DateFnsImplementation implements DateParserUtilityInterface {
  public format(date: Date, format?: string): string {
    if (format) {
      return dateFns.format(date, format);
    }

    return dateFns.format(date, "yyyy-MM-dd'T'HH:mm:ssXXXXX");
  }

  public fromNow(date: Date): string {
    return dateFns.formatDistance(date, new Date(), { addSuffix: true });
  }

  public isValid(date: Date): boolean {
    return dateFns.isValid(date);
  }

  public isFuture(date: Date): boolean {
    return dateFns.isFuture(date);
  }

  public subDays(date: Date, amount: number): Date {
    return dateFns.subDays(date, amount);
  }

  public subMonths(date: Date, amount: number): Date {
    return dateFns.subMonths(date, amount);
  }

  public subYears(date: Date, amount: number): Date {
    return dateFns.subYears(date, amount);
  }

  public startOfMonth(date: Date): Date {
    return dateFns.startOfMonth(date);
  }

  public startOfYear(date: Date): Date {
    return dateFns.startOfYear(date);
  }

  public parse(date: string, format: string): Date {
    return dateFns.parse(date, format, new Date());
  }

  public parseISO(date: string): Date {
    return dateFns.parseISO(date);
  }

  public getMonth(date: Date): number {
    return dateFns.getMonth(date);
  }

  public compare(date1: Date, date2: Date, type: "asc" | "desc" = "asc"): number {
    switch (type) {
      case "asc":
      default:
        return dateFns.compareAsc(date1, date2);
      case "desc":
        return dateFns.compareDesc(date1, date2);
    }
  }

  public currentISO(): string {
    return new Date().toISOString();
  }

  public intervalToDuration(start: Interval["start"], end: Interval["end"]): Duration {
    return dateFns.intervalToDuration({ start, end });
  }

  public differenceInSeconds(dateLeft: Date, dateRight: Date): number {
    return dateFns.differenceInSeconds(dateLeft, dateRight);
  }
}
