# Chainova: AI Supply Chain Optimization (Frontend Experiment)

This project is a frontend design and architecture experiment, building a landing page for a fictional enterprise AI platform called **Chainova**. The platform specializes in continuous supply chain optimization, predictive routing, and anomaly detection.

## 🎨 Design Aesthetic

The project explores a **Technical / Brutalist** design language, evoking the feeling of a professional-grade tool, scientific instrument, or "mission control" dashboard. 

Key design characteristics include:

- **Visible Grid Structure**: Extensive use of 1px borders to create a strict, visible grid layout that organizes information densely and logically.
- **High-Contrast Palette**: A stark palette of white, light grays, and deep blacks, punctuated by a vibrant, pure blue (`#0000ff`) for primary accents and interactive elements.
- **Typography**: A deliberate mix of clean sans-serif fonts for primary reading and monospace fonts for technical data, system logs, and micro-labels. Frequent use of uppercase, wide-tracked text (`tracking-widest`) for section headers and metadata.
- **Technical Motifs**: Use of architectural hatch patterns, animated SVG data flows, scanning planes, and terminal-like live telemetry feeds to reinforce the "machine" and "data-driven" narrative.

## 🏗️ Architecture & Refactoring

The project was iteratively refactored from a monolithic single-page structure into a clean, modular component-based architecture to improve maintainability and readability. 

Key components include:
- `Header` & `CTA`: Navigation and conversion points.
- `Hero`: High-impact entry with animated SVG data cubes.
- `Features`: Core capabilities overview.
- `Engine`: Visualization of the continuous optimization loop with animated bar charts.
- `Topology`: Global node synchronization map with animated SVG network routing.
- `Telemetry`: A simulated live terminal feed of system logs.
- `Testimonials`, `FAQ`, & `Pricing`: Standard SaaS landing page sections styled to match the technical aesthetic.

## 🛠️ Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Native CSS keyframes and SVG animations
