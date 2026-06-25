# Atomity Cloud Orchestrator

A frontend engineering challenge project built for Atomity.  
This application simulates a cloud optimization dashboard that visualizes multi-cloud performance, providers, and optimization insights in a structured UI.

---

## 🚀 Live Demo

[https://atomity-cloud-orchestrator.vercel.app/]

## 📂 GitHub Repository

[https://github.com/annah331/atomity-cloud-orchestrator]

---

## 🎯 Project Overview

This project focuses on building a clean, structured, and responsive frontend dashboard that represents a multi-cloud optimization system.

The goal was not only visual design, but also:

- clear component separation
- logical UI hierarchy
- scalable layout structure
- clean state/data flow

---

## 🧠 My Approach

I approached the challenge by first breaking the UI into logical systems rather than screens:

### 1. UI Structure Thinking

I divided the interface into 3 core layers:

- **Optimizer Hub** → central system representation
- **Metrics Section** → performance indicators
- **Cloud Providers** → external systems visualization

This helped ensure clarity and scalability of the layout.

---

### 2. Component-Based Design

Each UI section was built as an independent component:

- `OptimizerHub`
- `MetricCard`
- `CloudProvider`
- `Providers`
- `FeatureSection`

This keeps the system modular and reusable.

---

### 3. State & Data Handling

A custom hook (`useCloudMetrics`) manages data flow and simulates cloud metrics logic in a clean, isolated way.

Utility files were separated into:

- `/lib` for API and query logic
- `/hooks` for reusable state logic

---

### 4. Design Decisions

I focused on:

- clear visual hierarchy
- minimal but functional UI
- strong spacing and alignment
- readability over visual noise

Some decorative text elements were intentionally reduced to improve clarity of the interface.

---

## ⚙️ Tech Stack

- Next.js
- React
- TypeScript
- CSS Modules / Tailwind

---

## 📌 Key Features

- Multi-cloud dashboard layout
- Central optimization hub visualization
- Metrics-based UI cards
- Cloud provider section
- Modular reusable components
- Responsive frontend structure

---

## 🧩 What I Would Improve Next

Given more time, I would:

- add real API integration for live cloud data
- improve animation transitions between metrics
- enhance responsiveness for ultra-wide screens
- add deeper analytics visualization (charts/graphs)

---

## 🧠 What This Project Demonstrates

This project demonstrates:

- ability to break down complex UI systems
- structured component architecture thinking
- clean frontend organization
- attention to usability and hierarchy
- ability to complete a full working UI system within a time constraint

---

