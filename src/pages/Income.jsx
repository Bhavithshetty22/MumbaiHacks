import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  Cell,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  Plus,
  DollarSign,
  TrendingUp,
  Home,
  CreditCard,
  PieChart,
  BarChart3,
  Settings,
  User,
  Bell,
  Calendar,
  X,
  Edit2,
  Trash2,
  Download,
} from "lucide-react";
import './Income.css'

const Income = () => {
  const [showModal, setShowModal] = useState(false);
 const [incomes, setIncomes] = useState([
  {
    id: 1,
    source: "Salary",
    amount: 12000,
    date: "12th Feb 2025",
    category: "Salary",
    description: "Monthly salary payment",
    icon: "💼"
  },
  {
    id: 2,
    source: "Interest from Savings",
    amount: 9800,
    date: "13th Jan 2025",
    category: "Investment",
    description: "Savings interest payment",
    icon: "🏦"
  },
  {
    id: 3,
    source: "E-commerce Sales",
    amount: 11900,
    date: "11th Jan 2025",
    category: "Business",
    description: "Online store sales",
    icon: "🛒"
  },
  {
    id: 4,
    source: "Graphic Design",
    amount: 10500,
    date: "10th Jan 2025",
    category: "Freelance",
    description: "Design project payment",
    icon: "🎨"
  },
  {
    id: 5,
    source: "Rental Income",
    amount: 8500,
    date: "5th Jan 2025",
    category: "Investment",
    description: "Monthly rent from property",
    icon: "🏠"
  },
  {
    id: 6,
    source: "YouTube Ad Revenue",
    amount: 3200,
    date: "28th Dec 2024",
    category: "Business",
    description: "Content creator earnings",
    icon: "📺"
  },
  {
    id: 7,
    source: "Stock Dividends",
    amount: 2800,
    date: "25th Dec 2024",
    category: "Investment",
    description: "Quarterly dividend payment",
    icon: "📈"
  },
  {
    id: 8,
    source: "Consulting Services",
    amount: 15000,
    date: "20th Dec 2024",
    category: "Freelance",
    description: "Business strategy consultation",
    icon: "🧑‍💼"
  }
]);

  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: '',
    category: 'Salary',
    description: ''
  });

  const [activeNav, setActiveNav] = useState("income");

  // Chart data with alternating colors
  const dailyIncomeData = [
    { day: "1st Jan", income: 11200, color: "#6366f1", date: "January 1, 2025" },
    { day: "4th Jan", income: 9800, color: "#a5b4fc", date: "January 4, 2025" },
    { day: "6th Jan", income: 9200, color: "#6366f1", date: "January 6, 2025" },
    { day: "7th Jan", income: 14000, color: "#a5b4fc", date: "January 7, 2025" },
    { day: "8th Jan", income: 1800, color: "#6366f1", date: "January 8, 2025" },
    { day: "9th Jan", income: 7600, color: "#a5b4fc", date: "January 9, 2025" },
    { day: "10th Jan", income: 10400, color: "#6366f1", date: "January 10, 2025" },
    { day: "11th Jan", income: 11800, color: "#a5b4fc", date: "January 11, 2025" },
    { day: "13th Jan", income: 9800, color: "#6366f1", date: "January 13, 2025" },
    { day: "12th Feb", income: 12000, color: "#a5b4fc", date: "February 12, 2025" },
  ];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          backgroundColor: 'rgba(17, 25, 40, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          minWidth: '160px'
        }}>
          <p style={{ 
            color: 'white', 
            fontWeight: '600', 
            margin: '0 0 8px 0',
            fontSize: '14px'
          }}>
            {data.date}
          </p>
          <p style={{ 
            color: '#4ade80', 
            fontWeight: '700', 
            margin: 0,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <DollarSign size={16} />
            {payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const thisMonthIncome = 4250;
  const lastMonthIncome = 4100;
  const growthPercentage = ((thisMonthIncome - lastMonthIncome) / lastMonthIncome * 100).toFixed(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.source && formData.amount && formData.date) {
      const newIncome = {
        id: Date.now(),
        source: formData.source,
        amount: parseFloat(formData.amount),
        date: formData.date,
        category: formData.category,
        description: formData.description || `Income from ${formData.source}`,
        icon: "💰"
      };
      
      setIncomes(prev => [newIncome, ...prev]);
      setFormData({
        source: '',
        amount: '',
        date: '',
        category: 'Salary',
        description: ''
      });
      setShowModal(false);
    }
  };

  const deleteIncome = (id) => {
    setIncomes(prev => prev.filter(income => income.id !== id));
  };

  const NavItem = ({ icon: Icon, label, id }) => (
    <button
      onClick={() => setActiveNav(id)}
      className={`dashboard-nav-item ${activeNav === id ? 'dashboard-active' : ''}`}
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
              <div>
                <div className="logo-text">QNTUM</div>
                <div className="logo-subtitle">Finance</div>
              </div>
            </div>
          </div>

          <nav className="dashboard-nav-container">
            <NavItem icon={Home} label="Dashboard" id="dashboard" />
            <NavItem icon={CreditCard} label="Income" id="income" />
            <NavItem icon={PieChart} label="Expense" id="expense" />
            <NavItem icon={BarChart3} label="Analysis" id="analysis" />
            <NavItem icon={Calendar} label="AI Chat" id="chat" />
            <NavItem icon={Bell} label="Goal" id="goal" />
          </nav>
        </div>

        {/* Main Content */}
        <div className="dashboard-main-content">
          {/* Header */}
          <div className="dashboard-header-greeting">
            <h1 className="dashboard-greeting-title">
              Income Overview
            </h1>
            <p className="dashboard-greeting-subtitle">
              Track your earnings over time and analyze your income trends
            </p>
          </div>

          {/* Chart Card */}
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h3 className="dashboard-card-title">
                Income Overview
              </h3>
              <button 
                className="add-income-btn"
                onClick={() => setShowModal(true)}
              >
                <Plus size={16} />
                Add Income
              </button>
            </div>
            
            <div className="income-bar-chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={dailyIncomeData} 
                  barCategoryGap="20%"
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="rgba(156, 163, 175, 0.1)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                    domain={[0, 15000]}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="income"
                    radius={[6, 6, 0, 0]}
                    cursor="pointer"
                  >
                    {dailyIncomeData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        onMouseEnter={(e) => {
                          e.target.style.opacity = '0.8';
                          e.target.style.transform = 'scaleY(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.opacity = '1';
                          e.target.style.transform = 'scaleY(1)';
                        }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Income Sources */}
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 className="dashboard-card-title">
                  Income Sources
                </h3>
              </div>
              <button className="income-action-btn">
                <Download size={14} />
                Download
              </button>
            </div>
            
            <div className="income-grid">
              {incomes.map((income, index) => (
                <div key={income.id} className="income-grid-item">
                  <div className="income-grid-left">
                    <div className="income-icon">
                      {income.icon}
                    </div>
                    <div className="income-info">
                      <div className="income-source-name">
                        {income.source}
                      </div>
                      <div className="income-date-text">
                        {income.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="income-grid-right">
                    <div className="income-amount-display">
                      + ${income.amount.toLocaleString()}
                    </div>
                    <TrendingUp size={16} className="income-trend-icon" />
                    <div className="income-actions">
                      <button className="income-action-btn">
                        <Edit2 size={14} />
                      </button>
                      <button 
                        className="income-action-btn delete-btn"
                        onClick={() => deleteIncome(income.id)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Income Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Income</h2>
              <button 
                className="modal-close-btn"
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="income-form">
              <div className="form-group">
                <label>Income Source</label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  placeholder="e.g., Salary, Freelance, Investment"
                />
              </div>

              <div className="form-group">
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  step="0.01"
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="Salary">Salary</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Investment">Investment</option>
                  <option value="Business">Business</option>
                  <option value="Rental">Rental</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Description (Optional)</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Add a description..."
                  rows="3"
                />
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  className="btn-primary"
                  onClick={handleSubmit}
                >
                  Add Income
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Income;