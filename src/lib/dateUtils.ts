function parseDate(dateString: string): Date {
  // Handle cleared dates
  return dateString.length === 0 ? new Date() : new Date(dateString);
}

function formatDate(dateString: string): string {
  const date = parseDate(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0 indexed month
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function shortenDate(dateString: string) {
  const date = new Date(dateString);

  const userLocale = navigator.languages[0];
  const formatter = new Intl.DateTimeFormat(userLocale, {
    month: 'short',
    year: 'numeric',
  });

  const [month, year] = formatter.format(date).split(' ');
  return `${month}. ${year}`;
}

function getDuration(startDateString: string, endDateString: string): string {
  const start = shortenDate(startDateString);
  const end = shortenDate(endDateString);
  const present = shortenDate(new Date().toJSON());
  console.log({ start, end, present });

  if (start === end) return `${start}`;

  if (end === present) return `${start} - Present`;

  return `${start} -- ${end}`;
}

export { parseDate, formatDate, shortenDate, getDuration };
