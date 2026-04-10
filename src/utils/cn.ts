// Utility para concatenar clases de Tailwind (como clsx/ cn de shadcn)
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
