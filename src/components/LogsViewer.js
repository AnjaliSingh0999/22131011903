//import { getLogs, clearLogs } from "../../LoggingMiddleware/logger";
	import { logEvent, getLogs, clearLogs } from "../LoggingMiddleware/logger";


function LogsViewer() {
  const logs = getLogs();

  return (
    <div style={{ marginTop: '40px' }}>
      <h3>Logs</h3>
      <button onClick={clearLogs} style={{ marginBottom: '10px' }}>Clear Logs</button>
      <pre style={{
        background: '#f5f5f5',
        padding: '10px',
        borderRadius: '6px',
        maxHeight: '300px',
        overflowY: 'scroll'
      }}>
        {JSON.stringify(logs, null, 2)}
      </pre>
    </div>
  );
}

export default LogsViewer;
