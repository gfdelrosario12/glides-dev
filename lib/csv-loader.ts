/**
 * CSV Data Loader Utility
 * Provides efficient CSV loading with caching and error handling
 */

import Papa from 'papaparse';

// Cache to prevent redundant fetches
const cache = new Map<string, any[]>();

/**
 * Generic CSV loader with type safety and caching
 * @param url - The URL of the CSV file to load
 * @param options - Optional configuration
 * @returns Promise resolving to parsed CSV data
 */
export async function loadCSV<T>(
  url: string,
  options: {
    skipCache?: boolean;
    transform?: (item: any) => T;
    validate?: (item: T) => boolean;
  } = {}
): Promise<T[]> {
  const { skipCache = false, transform, validate } = options;

  // Return cached data if available
  if (!skipCache && cache.has(url)) {
    return cache.get(url)!;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch CSV: ${response.status} ${response.statusText}`
      );
    }

    const text = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse<any>(text, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim(),
        complete: (results) => {
          try {
            let data = results.data;

            // Apply transformation if provided
            if (transform) {
              data = data.map(transform);
            }

            // Apply validation if provided
            if (validate) {
              data = data.filter(validate);
            }

            // Cache the result
            cache.set(url, data);

            resolve(data as T[]);
          } catch (error) {
            reject(error);
          }
        },
        error: (error: Error) => {
          reject(new Error(`CSV parsing error: ${error.message}`));
        },
      });
    });
  } catch (error) {
    console.error(`Error loading CSV from ${url}:`, error);
    throw error;
  }
}

/**
 * Clear the CSV cache
 * @param url - Optional specific URL to clear, or clear all if not provided
 */
export function clearCache(url?: string): void {
  if (url) {
    cache.delete(url);
  } else {
    cache.clear();
  }
}

/**
 * Preload CSV data for faster initial render
 * @param urls - Array of CSV URLs to preload
 */
export async function preloadCSVs(urls: string[]): Promise<void> {
  await Promise.all(urls.map((url) => loadCSV(url).catch(() => null)));
}
