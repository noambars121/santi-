/**
 * PixelYourSite tracking utility functions
 * This file provides wrapper functions for Facebook Pixel events
 */

// Type definitions for standard Facebook Pixel events
export type PixelEvent = 
  | 'AddPaymentInfo'
  | 'AddToCart'
  | 'AddToWishlist'
  | 'CompleteRegistration' 
  | 'Contact'
  | 'CustomizeProduct'
  | 'Donate'
  | 'FindLocation'
  | 'InitiateCheckout'
  | 'Lead'
  | 'Purchase'
  | 'Schedule'
  | 'Search'
  | 'StartTrial'
  | 'SubmitApplication'
  | 'Subscribe'
  | 'ViewContent';

// Type for event parameters
export interface PixelEventParams {
  [key: string]: string | number | object;
}

/**
 * Track a standard Facebook Pixel event
 * @param eventName - Name of the event to track
 * @param params - Optional parameters for the event
 */
export const trackPixelEvent = (eventName: PixelEvent, params?: PixelEventParams): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  } else {
    console.warn('Facebook Pixel not initialized');
  }
};

/**
 * Track a custom Facebook Pixel event
 * @param eventName - Name of the custom event
 * @param params - Optional parameters for the event
 */
export const trackCustomPixelEvent = (eventName: string, params?: PixelEventParams): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
  } else {
    console.warn('Facebook Pixel not initialized');
  }
};

// Convenience functions for common events

/**
 * Track when a user views content
 */
export const trackViewContent = (params?: PixelEventParams): void => {
  trackPixelEvent('ViewContent', params);
};

/**
 * Track when a user adds an item to cart
 */
export const trackAddToCart = (params?: PixelEventParams): void => {
  trackPixelEvent('AddToCart', params);
};

/**
 * Track when a user initiates checkout
 */
export const trackInitiateCheckout = (params?: PixelEventParams): void => {
  trackPixelEvent('InitiateCheckout', params);
};

/**
 * Track when a user completes a purchase
 */
export const trackPurchase = (params?: PixelEventParams): void => {
  trackPixelEvent('Purchase', params);
};

/**
 * Track when a user submits a lead form
 */
export const trackLead = (params?: PixelEventParams): void => {
  trackPixelEvent('Lead', params);
};

/**
 * Track when a user makes contact
 */
export const trackContact = (params?: PixelEventParams): void => {
  trackPixelEvent('Contact', params);
};

// Add TypeScript declarations for the Facebook Pixel
declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: PixelEventParams
    ) => void;
    _fbq: any;
  }
} 