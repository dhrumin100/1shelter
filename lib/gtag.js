// lib/gtag.js
export const GA_MEASUREMENT_ID = 'G-XXXXXXX'; // Replace with your ID

export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
