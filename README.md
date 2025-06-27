 # URL Shortener – Frontend Test Submission

This project is a simple **React-based URL Shortener Web App** built as part of the **Frontend Track** submission. It allows users to shorten URLs, view statistics, and log client-side activity.

 

  Tech Stack

- **React (JavaScript)**
- **Vanilla CSS** (with inline styles and gradients)
- **No External Algorithm Libraries**
- **Logging Middleware** (custom-built and integrated)
- **Local Storage** for persistence

---

  Features

### 🔗 URL Shortener Page
- Shorten up to **5 URLs concurrently**
- Optional **validity period** in minutes
- Optional **custom shortcode**
- **Client-side validation** for all fields
- Displays:
  - Shortened URL
  - Expiry countdown timer
  - Creation timestamp

#  Statistics Page
- Shows list of all shortened URLs
- Tracks:
  - Total click count
  - Click timestamp
  - Click source (referrer)
  - Approx. location (mocked / placeholder)

 

#  Logging Middleware
- All important client events (shorten request, errors, theme toggle) are logged with timestamp, type, and metadata
- Logs are viewable in the UI (Logs Viewer)

---

#  Folder Structure

FrontendTestSubmission/
└── my-app/
├── public/
├── src/
│ ├── components/
│ │ ├── ShortenerForm.js
│ │ ├── StatsPage.js
│ │ ├── LogsViewer.js
│ ├── pages/
│ │ └── Home.js
│ ├── LoggingMiddleware/
│ │ └── logger.js
│ ├── App.js
│ └── index.js
└── README.md


---

#  How to Run the App

```bash
* Navigate to the app folder
cd FrontendTestSubmission/my-app

# Install dependencies
npm install

# Start the development server
npm start
Screenshots
Desktop View
(Add screenshot here)

Mobile View
(Add screenshot here)

🧠 Notes
This project meets all Affordmed submission requirements:

No Affordmed mentions in repo name, commits, or code.

Custom-built logging middleware

Vanilla CSS only

React used (no frameworks like Bootstrap, etc.)

👩‍💻 Author
Roll No: 22131011903
GitHub: @AnjaliSingh0999**
