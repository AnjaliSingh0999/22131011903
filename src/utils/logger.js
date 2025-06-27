// src/utils/logger.js
export const logger = (message) => {
  const log = `[${new Date().toISOString()}] ${message}`;
  const logs = JSON.parse(localStorage.getItem('app_logs')) || [];
  logs.push(log);
  localStorage.setItem('app_logs', JSON.stringify(logs));
};
