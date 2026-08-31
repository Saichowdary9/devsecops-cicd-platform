// Thin component wrapper around the icon map — kept in its own file (and
// exporting only this component) so React Fast Refresh works cleanly.
import { iconMap } from './iconMap';

export function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.75 }) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
