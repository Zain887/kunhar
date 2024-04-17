import { writable } from 'svelte/store';

export const pageWidth = writable(0);
export const pageHeight = writable(0);
export const pageDimension = writable(0);
export const loading = writable(null);
