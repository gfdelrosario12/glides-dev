/**
 * Performance monitoring utilities
 * Helps track and optimize application performance
 */

/**
 * Measure the execution time of a function
 */
export function measurePerformance<T>(
  name: string,
  fn: () => T
): T {
  if (typeof window === 'undefined') return fn();

  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  console.log(`⚡ ${name}: ${(end - start).toFixed(2)}ms`);
  
  return result;
}

/**
 * Measure async function execution time
 */
export async function measurePerformanceAsync<T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> {
  if (typeof window === 'undefined') return fn();

  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  
  console.log(`⚡ ${name}: ${(end - start).toFixed(2)}ms`);
  
  return result;
}

/**
 * Log Web Vitals metrics
 */
export function logWebVitals(metric: {
  id: string;
  name: string;
  value: number;
  label: string;
}): void {
  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 ${metric.name}:`, {
      value: metric.value,
      id: metric.id,
      label: metric.label,
    });
  }
}

/**
 * Create a performance observer for specific metrics
 */
export function observePerformance(
  types: string[],
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof window === 'undefined' || !window.PerformanceObserver) {
    return null;
  }

  const observer = new PerformanceObserver((list) => {
    callback(list.getEntries());
  });

  try {
    observer.observe({ entryTypes: types });
    return observer;
  } catch (e) {
    console.warn('Performance observer not supported', e);
    return null;
  }
}

/**
 * Get current memory usage (Chrome only)
 */
export function getMemoryUsage(): {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
} | null {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }

  const memory = (performance as any).memory;
  return {
    usedJSHeapSize: Math.round(memory.usedJSHeapSize / 1048576), // MB
    totalJSHeapSize: Math.round(memory.totalJSHeapSize / 1048576), // MB
    jsHeapSizeLimit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
  };
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
