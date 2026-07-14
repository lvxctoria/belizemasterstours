// Lovable CDN assets are served from /__l5e/ on Lovable hosting.
// When the app is deployed elsewhere (e.g. GitHub Pages, Vercel), those relative
// paths 404. Prefix them with the Lovable published origin so images resolve
// from the CDN regardless of where the site is hosted.
const LOVABLE_CDN_ORIGIN = "https://belizemasterstours.lovable.app";

export function assetUrl(url: string): string {
  if (url.startsWith("/__l5e/")) return LOVABLE_CDN_ORIGIN + url;
  return url;
}
