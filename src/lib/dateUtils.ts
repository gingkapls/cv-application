type DateString = `${string}-${string}-${string}`;

function formatDate(date: Date): DateString {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0 indexed month
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseDate(dateString: DateString): Date {
  // Handle cleared dates
  return dateString.length === 0 ? new Date() : new Date(dateString);
}

function shortenDate(date: Date) {
  const userLocale = navigator.languages[0];
  const formatter = new Intl.DateTimeFormat(userLocale, {
    month: 'short',
    year: 'numeric',
  });

  const [month, year] = formatter.format(date).split(' ');
  return `${month}. ${year}`;
}

function getDuration(startDate: Date, endDate: Date) {
  const start = `${shortenDate(startDate)}`;
  const endMonth = endDate.getMonth();
  const endYear = endDate.getFullYear();

  const presentDate = new Date();
  const thisMonth = presentDate.getMonth();
  const thisYear = presentDate.getFullYear();

  const end =
    endMonth === thisMonth && endYear === thisYear
      ? 'Present'
      : `${shortenDate(endDate)}`;

  return [start, end];
}

export type { DateString };

export { parseDate, formatDate, shortenDate, getDuration };
