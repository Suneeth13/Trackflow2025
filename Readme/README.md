# Welcome to your Lovable project

## Project info

**URL**: [https://www.tinyurl.com/trackflow2025]

## What technologies are used for this project?

This project is built with:

* Vite
* TypeScript
* React
* shadcn-ui
* Tailwind CSS

---

# TrackFlow – Lightweight CRM & Operations Process Automation App

### Internship Assignment 3 - Full Stack Developer & Web Automation

**Release:** 16\_MAY\_2025\_ver1.0
**Company:** [Alfaleus Tech](https://alfaleus.in/)

## Objective

TrackFlow is a web application designed to help organizations manage:

* **Sales Leads Lifecycle:** capture → qualify → close
* **Order Lifecycle:** receive → build → dispatch → track

## Features

### ✅ Core Features

#### 📌 Lead Management

* Add new leads (name, contact, company, product interest)
* Assign lead stage: New, Contacted, Qualified, Proposal Sent, Won, Lost
* Follow-up reminder system (date-based)
* View leads in Kanban or list view

#### 📌 Order Management

* Link closed leads to an "Order"
* Define stages: Order Received → In Development → Ready to Dispatch → Dispatched
* Update order status manually
* Store dispatch details (courier, tracking number)

#### 📌 Dashboard

* View total leads, open leads, conversions
* Track orders in various stages
* Weekly follow-ups pending

### 🌟 Bonus Features (Optional but Implemented)

* Set reminders/notifications for follow-ups or order updates
* Upload documents (e.g., invoices, proposal PDFs)
* Basic automation (e.g., auto-create Order on "Won" lead)
* Responsive design for mobile

## Tools & Tech Stack

* **Frontend:** Vite, React, TypeScript, Tailwind CSS, shadcn-ui
* **Backend:** FastAPI (or chosen backend stack)
* **Database:** PostgreSQL / Supabase / SQLite
* **Hosting:** Vercel (Frontend), Render / Railway (Backend)
* **Optional:** Chart.js for dashboard, FullCalendar for follow-ups

## Setup Instructions

1. Clone the repo: `git clone https://github.com/your-username/trackflow`
2. Install dependencies:

   ```bash
   cd trackflow
   npm install
   ```
3. Run the frontend locally:

   ```bash
   npm run dev
   ```
4. Setup backend (FastAPI):

   ```bash
   uvicorn main:app --reload
   ```
5. Connect frontend and backend URLs (configure CORS if necessary).

## Folder Structure (Example)

```
trackflow/
├── client/                # React frontend
│   ├── components/
│   ├── pages/
│   └── ...
├── server/                # FastAPI backend
│   ├── models/
│   ├── routes/
│   └── ...
└── README.md
```



## Project Timeline (7 Days)

| Day | Focus                      | Output                                        |
| --- | -------------------------- | --------------------------------------------- |
| 1   | Planning & Setup           | Stack, DB schema, project structure           |
| 2   | Lead Management - Backend  | API endpoints + sample data                   |
| 3   | Lead Management - Frontend | Lead form + Kanban/List + API integration     |
| 4   | Order Workflow - Backend   | Order model + status flow + DB linkage        |
| 5   | Order Workflow - Frontend  | UI for status tracking + courier input        |
| 6   | Dashboard & Follow-ups     | Metrics screen + follow-up calendar/reminders |
| 7   | Final Touch & Submission   | Polishing, bug fix, video, flowchart          |

## Evaluation Criteria

| Criteria                   | Weightage |
| -------------------------- | --------- |
| Lead & Order Tracking Flow | 30%       |
| UI/UX & Data Entry         | 20%       |
| Backend & DB Design        | 20%       |
| Dashboard & Usability      | 15%       |
| Bonus Features             | 15%       |

## License

This project is part of an internship assignment by Alfaleus Tech and is meant for educational and demonstrational purposes.

---
