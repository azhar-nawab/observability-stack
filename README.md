
# 📊 Observability Stack: Metrics Monitoring with Prometheus & Grafana

This project demonstrates a complete observability setup for a sample Node.js application using:
- **Prometheus** for metrics collection
- **Grafana** for visualization
- **Docker Compose** for orchestration

---

## 📦 Stack Components

| Component   | Purpose                        | Port   |
|-------------|--------------------------------|--------|
| Node.js App | Generates custom metrics/logs  | 8080   |
| Prometheus  | Scrapes app metrics            | 9090   |
| Grafana     | Dashboards and visualization   | 3000   |

---

## 🛠️ Setup Instructions

### 1. Prerequisites
- EC2 instance (Ubuntu 22.04, t2.medium or higher)
- Open ports: `22`, `8080`, `9090`, `3000`
- Docker and Docker Compose installed

### 2. Clone Repository
```bash
git clone https://github.com/azhar-nawab/observability-stack.git
cd observability-stack

