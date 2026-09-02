# Ujjwal Tamang — CEH v12 Certified Ethical Hacker & SOC Analyst Portfolio

Official cybersecurity portfolio and interactive Security Operations Center (SOC) arsenal for **Ujjwal Tamang** (CEH v12, CSA, CompTIA Security+).

---

## 🚀 Features

- **Command Arsenal & Interactive Log Analyzer**: Local SOC analyzer for inspecting HTTP requests, syslog logs, and firewall traffic.
- **Audit Methodology**: Step-by-step ethical hacking framework covering Reconnaissance, Vulnerability Assessment, Exploitation, and Incident Reporting.
- **Live Search Grounded Cybersecurity Insights**: Live threat feed powered by Gemini and Google Search Grounding with built-in caching.
- **SEO & Social Metadata**: Optimized with JSON-LD Schema.org structured data, OpenGraph, and Twitter cards for "Ujjwal Tamang".

---

## 🛠️ Quick Start (Local Development)

### Prerequisites

- Node.js 20+ installed
- npm or bun

### 1. Installation

```bash
git clone https://github.com/YOUR_USERNAME/ujjwal-tamang-portfolio.git
cd ujjwal-tamang-portfolio
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY="your_gemini_api_key_here"
PORT=3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deployment Options

### Option 1: Exporting from AI Studio
1. Open the top-right **Settings / Export** menu in Google AI Studio.
2. Select **Export to GitHub** or **Download ZIP**.

### Option 2: Deploying with Docker (Render / Railway / Cloud Run)

Build and run the Docker container locally or deploy to any cloud container host:

```bash
docker build -t ujjwal-portfolio .
docker run -p 3000:3000 -e GEMINI_API_KEY="your_key" ujjwal-portfolio
```

---

## 📜 License

MIT License © Ujjwal Tamang
