const baseUrl = import.meta.env.BASE_URL ?? '/';
const normalizedBase = baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '');

const untouchedPattern = /^(?:https?:|mailto:|tel:|data:|#)/;

export function withBase(path: string | undefined | null) {
  if (!path || untouchedPattern.test(path)) {
    return path ?? '';
  }

  if (path.startsWith(normalizedBase + '/') || path === normalizedBase) {
    return path;
  }

  if (path.startsWith('/')) {
    return `${normalizedBase}${path}`;
  }

  return normalizedBase ? `${normalizedBase}/${path}` : path;
}

export function stripBase(path: string) {
  if (!normalizedBase) {
    return path;
  }

  if (path === normalizedBase) {
    return '/';
  }

  if (path.startsWith(`${normalizedBase}/`)) {
    return path.slice(normalizedBase.length) || '/';
  }

  return path;
}
