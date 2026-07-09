// Prefix a root-absolute path ("/foo") with the site's configured base, so
// links and assets resolve when served from a subpath like /mrinal-dot-com/.
//
// import.meta.env.BASE_URL comes from `base` in astro.config.mjs:
//   base "/mrinal-dot-com"  -> BASE_URL "/mrinal-dot-com/"  -> withBase("/x") = "/mrinal-dot-com/x"
//   no base (root / domain)  -> BASE_URL "/"                 -> withBase("/x") = "/x"  (no-op)
const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // "" or "/mrinal-dot-com"

export function withBase(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
}
