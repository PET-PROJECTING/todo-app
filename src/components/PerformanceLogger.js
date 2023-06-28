import reportWebVitals from '../reportWebVitals';

export const PerformanceLogger = ({ allowLogging = false }) => {
  if (allowLogging) { return reportWebVitals(console.log) }
}
