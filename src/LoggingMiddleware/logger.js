const logs = [];

export const logEvent = (type, message, metadata = {}) => {
  const timestamp = new Date().toISOString();
  const entry = { timestamp, type, message, metadata };
  logs.push(entry);

  // Optional: Persist logs
  localStorage.setItem("log_data", JSON.stringify(logs));
};

export const getLogs = () => {
  return logs.length ? logs : JSON.parse(localStorage.getItem("log_data") || "[]");
};

export const clearLogs = () => {
  localStorage.removeItem("log_data");
};
