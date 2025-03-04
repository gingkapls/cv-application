export type Link = `${'http' | 'https'}://${string | never}`;

export function parseLink(link: string): Link {
  if (link.startsWith('https://') || link.startsWith('http://')) {
    return link as Link;
  }

  // String interpolation because TS does not perform string concatenation at the type level
  return `${'https://'}${link}`;
}
