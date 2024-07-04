namespace MyNamespace {
  export enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  export const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
  };
}

// Приклади використання
console.log(MyNamespace.isWeekend(MyNamespace.DayOfWeek.Monday)); // false
console.log(MyNamespace.isWeekend(MyNamespace.DayOfWeek.Saturday));// true
console.log(MyNamespace.isWeekend(MyNamespace.DayOfWeek.Thursday));



