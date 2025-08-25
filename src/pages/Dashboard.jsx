import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import CountUp from "../components/CountUp";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Home,
  CreditCard,
  PieChart,
  BarChart3,
  Settings,
  User,
  Bell,
  Calendar,
} from "lucide-react";
import "./Dashboard.css";

// amCharts Pie Chart Component
const AmChartsPieChart = ({ data }) => {
  const chartRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    // Load amCharts scripts dynamically
    const loadScript = (src) => {
      return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        document.head.appendChild(script);
      });
    };

    const loadAmCharts = async () => {
      try {
        await loadScript('https://cdn.amcharts.com/lib/5/index.js');
        await loadScript('https://cdn.amcharts.com/lib/5/percent.js');
        await loadScript('https://cdn.amcharts.com/lib/5/themes/Animated.js');

        // Wait a bit for scripts to fully initialize
        setTimeout(() => {
          if (window.am5 && chartRef.current) {
            createChart();
          }
        }, 100);
      } catch (error) {
        console.error('Error loading amCharts:', error);
      }
    };

    const createChart = () => {
      if (rootRef.current) {
        rootRef.current.dispose();
      }

      const root = window.am5.Root.new(chartRef.current);
      rootRef.current = root;

      root.setThemes([
        window.am5themes_Animated.new(root)
      ]);

      const chart = root.container.children.push(
        window.am5percent.PieChart.new(root, {
          endAngle: 270
        })
      );

      const series = chart.series.push(
        window.am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "name",
          endAngle: 270
        })
      );

      // Customize colors to match your categories
      series.get("colors").set("colors", [
        window.am5.color("#6366f1"),
        window.am5.color("#8b5cf6"),
        window.am5.color("#06b6d4"),
        window.am5.color("#10b981"),
        window.am5.color("#f59e0b")
      ]);

      series.states.create("hidden", {
        endAngle: -90
      });

      series.data.setAll(data);
      series.appear(1000, 100);

      // Add labels
      series.labels.template.setAll({
        fontSize: 12,
        fill: window.am5.color("#ffffff")
      });

      // Add tooltips
      series.slices.template.set("tooltipText", "{category}: ${value}");
    };

    loadAmCharts();

    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
      }
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

const FinanceDashboard = () => {
  // Sample data
  const recentTransactions = [
    {
      id: 1,
      description: "Grocery Shopping",
      amount: -85.5,
      date: "2025-08-22",
      type: "expense",
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: 3200.0,
      date: "2025-08-21",
      type: "income",
    },
    {
      id: 3,
      description: "Gas Station",
      amount: -45.0,
      date: "2025-08-20",
      type: "expense",
    },
    {
      id: 4,
      description: "Coffee Shop",
      amount: -12.75,
      date: "2025-08-20",
      type: "expense",
    },
    {
      id: 5,
      description: "Freelance Work",
      amount: 450.0,
      date: "2025-08-19",
      type: "income",
    },
  ];

  const expenseCategories = [
    { name: "Food", value: 450, color: "#6366f1" },
    { name: "Transport", value: 280, color: "#8b5cf6" },
    { name: "Entertainment", value: 180, color: "#06b6d4" },
    { name: "Utilities", value: 220, color: "#10b981" },
    { name: "Shopping", value: 320, color: "#f59e0b" },
  ];

  const incomeCategories = [
    { name: "Salary", value: 3200, color: "#3b82f6" },
    { name: "Freelance", value: 450, color: "#10b981" },
    { name: "Investments", value: 280, color: "#f59e0b" },
    { name: "Side Business", value: 320, color: "#8b5cf6" },
  ];

  const incomeData = [
    { month: "Jan", income: 2800 },
    { month: "Feb", income: 3200 },
    { month: "Mar", income: 2950 },
    { month: "Apr", income: 3400 },
    { month: "May", income: 3100 },
    { month: "Jun", income: 3650 },
  ];

  const totalIncome = 15650;
  const totalExpenses = 8945;
  const totalBalance = totalIncome - totalExpenses;

  const [activeNav, setActiveNav] = useState("dashboard");

  const NavItem = ({ icon: Icon, label, id }) => (
    <button
      onClick={() => setActiveNav(id)}
      className={`dashboard-nav-item ${
        activeNav === id ? "dashboard-active" : ""
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="dashboard-container">
      
      <div className="dashboard-flex">
        {/* Sidebar Navigation */}
        <div className="dashboard-sidebar">
          <div className="dashboard-sidebar-header">
            <div className="logo1">
              <span className="logo-icon1">🏁</span>
              <span className="logo-text">QNTUM</span>
              <span className="logo-subtitle">Finance</span>
            </div>
          </div>

          <nav className="dashboard-nav-container">
            <NavItem icon={Home} label="Dashboard" id="dashboard" />
            <NavItem icon={CreditCard} label="Income" id="transactions" />
            <NavItem icon={PieChart} label="Expense" id="analytics" />
            <NavItem icon={BarChart3} label="Analysis" id="reports" />
            <NavItem icon={Calendar} label="AI Chat" id="budget" />
            <NavItem icon={Bell} label="Goal" id="alerts" />
          </nav>
        </div>

        {/* Main Content */}
        <div className="dashboard-main-content">
          {/* Header Greeting */}
          <div className="dashboard-header-greeting">
            <h1 className="dashboard-greeting-title">
              Hi Bhavith, Welcome to Finance Tracker
            </h1>
            <p className="dashboard-greeting-subtitle">
              Here's your financial overview for today
            </p>
          </div>

          {/* Top Stats Row */}
          <div className="dashboard-stats-grid">
            <div className="dashboard-stat-card">
              <div className="dashboard-stat-content">
                <div className="dashboard-stat-text">
                  <p className="dashboard-stat-label">Total Balance</p>
                  <CountUp
                    from={0}
                    to={6342}
                    separator=","
                    direction="up"
                    duration={1}
                    className="dashboard-stat-value dashboard-positive"
                  />
                </div>
                <div className="dashboard-stat-icon dashboard-positive">
                  <DollarSign className="text-green-400" size={24} />
                </div>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-content">
                <div className="dashboard-stat-text">
                  <p className="dashboard-stat-label">Total Income</p>
                  <CountUp
                    from={0}
                    to={15630}
                    separator=","
                    direction="up"
                    duration={1}
                    className="dashboard-stat-value dashboard-income"
                  />
                </div>
                <div className="dashboard-stat-icon dashboard-income">
                  <TrendingUp className="text-blue-400" size={24} />
                </div>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-content">
                <div className="dashboard-stat-text">
                  <p className="dashboard-stat-label">Total Expenses</p>
                  <CountUp
                    from={0}
                    to={7324}
                    separator=","
                    direction="up"
                    duration={1}
                    className="dashboard-stat-value dashboard-expense"
                  />
                </div>
                <div className="dashboard-stat-icon dashboard-expense">
                  <TrendingDown className="text-red-400" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row - Recent Transactions & Expense Pie Chart */}
          <div className="dashboard-middle-grid">
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3 className="dashboard-card-title">Recent Transactions</h3>
                <button 
                  className="dashboard-show-more-btn"
                  onClick={() => setActiveNav('transactions')}
                >
                  Show More
                </button>
              </div>
              <div className="dashboard-transactions-list">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="dashboard-transaction-item"
                  >
                    <div className="dashboard-transaction-details">
                      <p className="dashboard-transaction-description">
                        {transaction.description}
                      </p>
                      <p className="dashboard-transaction-date">
                        {transaction.date}
                      </p>
                    </div>
                    <p
                      className={`dashboard-transaction-amount dashboard-${transaction.type}`}
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3 className="dashboard-card-title">Expenses by Category</h3>
                <button 
                  className="dashboard-show-more-btn"
                  onClick={() => setActiveNav('analytics')}
                >
                  Show More
                </button>
              </div>
              <div className="dashboard-chart-container">
                <AmChartsPieChart data={expenseCategories} />
              </div>
              <div className="dashboard-pie-legend">
                {expenseCategories.map((category, index) => (
                  <div key={index} className="dashboard-legend-item">
                    <div
                      className="dashboard-legend-color"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="dashboard-legend-label">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row - Expense Track */}
          <div className="dashboard-bottom-grid">
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3 className="dashboard-card-title">Expense Track</h3>
                <button 
                  className="dashboard-show-more-btn"
                  onClick={() => setActiveNav('analytics')}
                >
                  Show More
                </button>
              </div>
              <div className="dashboard-expense-stats">
                <div className="dashboard-expense-row">
                  <span className="dashboard-expense-label">This Month</span>
                  <span className="dashboard-expense-value dashboard-current">
                    $2,450
                  </span>
                </div>
                <div className="dashboard-expense-row">
                  <span className="dashboard-expense-label">Last Month</span>
                  <span className="dashboard-expense-value dashboard-previous">
                    $2,180
                  </span>
                </div>
                <div className="dashboard-expense-row">
                  <span className="dashboard-expense-label">Change</span>
                  <span className="dashboard-expense-value dashboard-negative">
                    +12.4%
                  </span>
                </div>
                <div className="dashboard-expense-highlight">
                  <p className="dashboard-expense-highlight-text">
                    Your expenses have increased by $270 compared to last month.
                    Consider reviewing your spending habits.
                  </p>
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3 className="dashboard-card-title">Income Trend</h3>
                <button 
                  className="dashboard-show-more-btn"
                  onClick={() => setActiveNav('reports')}
                >
                  Show More
                </button>
              </div>
              <div className="dashboard-bar-chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={incomeData}>
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9ca3af", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9ca3af", fontSize: 12 }}
                    />
                    <Bar
                      dataKey="income"
                      fill="url(#incomeGradient)"
                      radius={[4, 4, 0, 0]}
                    />
                    <defs>
                      <linearGradient
                        id="incomeGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* New Bottom Row - Income Pie Chart & Income Track */}
          <div className="dashboard-bottom-grid">
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3 className="dashboard-card-title">Income by Source</h3>
                <button 
                  className="dashboard-show-more-btn"
                  onClick={() => setActiveNav('transactions')}
                >
                  Show More
                </button>
              </div>
              <div className="dashboard-chart-container">
                <AmChartsPieChart data={incomeCategories} />
              </div>
              <div className="dashboard-pie-legend">
                {incomeCategories.map((category, index) => (
                  <div key={index} className="dashboard-legend-item">
                    <div
                      className="dashboard-legend-color"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="dashboard-legend-label">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3 className="dashboard-card-title">Income Track</h3>
                <button 
                  className="dashboard-show-more-btn"
                  onClick={() => setActiveNav('transactions')}
                >
                  Show More
                </button>
              </div>
              <div className="dashboard-income-stats">
                <div className="dashboard-income-row">
                  <span className="dashboard-income-label">This Month</span>
                  <span className="dashboard-income-value dashboard-current">
                    $3,650
                  </span>
                </div>
                <div className="dashboard-income-row">
                  <span className="dashboard-income-label">Last Month</span>
                  <span className="dashboard-income-value dashboard-previous">
                    $3,100
                  </span>
                </div>
                <div className="dashboard-income-row">
                  <span className="dashboard-income-label">Growth</span>
                  <span className="dashboard-income-value dashboard-growth">
                    +17.7%
                  </span>
                </div>
                <div className="dashboard-income-highlight">
                  <p className="dashboard-income-highlight-text">
                    Your income has increased by $550 compared to last month.
                    Keep up the great work!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;