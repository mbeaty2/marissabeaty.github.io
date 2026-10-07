import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Scrolls to #id, offset by the sticky header's current height. */
export function scrollToId(id: string) {
  const headerOffset = document.querySelector('header')?.getBoundingClientRect().height ?? 0;

  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - headerOffset - 24;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
