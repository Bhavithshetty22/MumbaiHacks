"use client"

import { useState } from "react"
import "./ExpenseTracker.css"

const categories = [
  { value: "food", label: "Food 🍕" },
  { value: "transport", label: "Transport 🚗" },
  { value: "entertainment", label: "Entertainment 🎬" },
  { value: "shopping", label: "Shopping 🛍️" },
  { value: "utilities", label: "Utilities ⚡" },
  { value: "healthcare", label: "Healthcare 🏥" },
  { value: "other", label: "Other 📝" },
]

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Good",
      date: "2025-02-04",
      amount: 99.96,
      category: "Food 🍕",
      description: "restaurant",
    },
  ])

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    amount: 0,
    category: "",
    description: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.date || !formData.category) return

    const newExpense = {
      id: expenses.length + 1,
      name: formData.name,
      date: formData.date,
      amount: formData.amount,
      category: formData.category,
      description: formData.description,
    }

    setExpenses([...expenses, newExpense])
    setFormData({
      name: "",
      date: "",
      amount: 0,
      category: "",
      description: "",
    })
  }

  const adjustAmount = (increment) => {
    setFormData((prev) => ({
      ...prev,
      amount: Math.max(0, prev.amount + increment),
    }))
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const clearAllExpenses = () => {
    if (window.confirm("Are you sure you want to delete all expenses?")) {
      setExpenses([])
    }
  }

  return (
    <div className="expense-tracker">
      <div className="container">
        {/* Add Expense Form */}
        <div className="card">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name" className="label">
                Expense Title
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="input"
                placeholder="Enter expense title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date" className="label">
                Date Of Expense
              </label>
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                className="input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount" className="label">
                Amount Spent
              </label>
              <div className="amount-input-group">
                <input
                  id="amount"
                  type="number"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData((prev) => ({ ...prev, amount: Number.parseFloat(e.target.value) || 0 }))}
                  className="input amount-input"
                />
                <button type="button" className="amount-btn" onClick={() => adjustAmount(-1)}>
                  -
                </button>
                <button type="button" className="amount-btn" onClick={() => adjustAmount(1)}>
                  +
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description" className="label">
                Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                className="textarea"
                placeholder="Enter description..."
                rows="5"
              />
              <p className="helper-text">Press Ctrl+Enter to submit form</p>
            </div>

            <div className="form-group">
              <label htmlFor="category" className="label">
                Category of expense
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                className="select"
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category.value} value={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="submit-btn">
              <span className="plus-icon">+</span>
              Add Expense
            </button>
          </form>
        </div>

        {/* View Expenses Table */}
        <div className="card">
          <div className="card-header">
            <div className="table-header">
              <h2 className="card-title">View Expenses</h2>
              {expenses.length > 0 && (
                <button onClick={clearAllExpenses} className="clear-all-btn">
                  Clear All
                </button>
              )}
            </div>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>date</th>
                  <th>amount</th>
                  <th>category</th>
                  <th>description</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.id}</td>
                    <td>{expense.name}</td>
                    <td>{expense.date}</td>
                    <td>{expense.amount.toFixed(2)}</td>
                    <td>{expense.category}</td>
                    <td>{expense.description}</td>
                    <td>
                      <button onClick={() => deleteExpense(expense.id)} className="delete-btn" title="Delete expense">
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {expenses.length === 0 && (
              <div className="empty-state">
                <p>No expenses found. Add your first expense above!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
