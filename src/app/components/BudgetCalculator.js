'use client';

import React, { useState } from 'react';
import { PlusCircle, MinusCircle, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BudgetCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([{ name: '', amount: '' }]);
  const [total, setTotal] = useState({ income: 0, expenses: 0, balance: 0 });

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleExpenseChange = (index, field, value) => {
    const newExpenses = [...expenses];
    newExpenses[index][field] = value;
    setExpenses(newExpenses);
  };

  const addExpense = () => {
    setExpenses([...expenses, { name: '', amount: '' }]);
  };

  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const calculateTotal = () => {
    const incomeTotal = parseFloat(income) || 0;
    const expensesTotal = expenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0);
    const balance = incomeTotal - expensesTotal;

    setTotal({
      income: incomeTotal,
      expenses: expensesTotal,
      balance: balance
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Budget Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <label className="block mb-2">Income</label>
            <div className="flex items-center">
              <DollarSign className="mr-2" />
              <Input
                type="number"
                value={income}
                onChange={handleIncomeChange}
                placeholder="Enter your income"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2">Expenses</label>
            {expenses.map((expense, index) => (
              <div key={index} className="flex items-center mb-2">
                <Input
                  className="mr-2"
                  placeholder="Expense name"
                  value={expense.name}
                  onChange={(e) => handleExpenseChange(index, 'name', e.target.value)}
                />
                <Input
                  className="mr-2"
                  type="number"
                  placeholder="Amount"
                  value={expense.amount}
                  onChange={(e) => handleExpenseChange(index, 'amount', e.target.value)}
                />
                <Button variant="outline" size="icon" onClick={() => removeExpense(index)}>
                  <MinusCircle className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" className="mt-2" onClick={addExpense}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Expense
            </Button>
          </div>
          <Button className="mt-4" onClick={calculateTotal}>Calculate</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Budget Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Income: ${total.income.toFixed(2)}</p>
          <p>Total Expenses: ${total.expenses.toFixed(2)}</p>
          <p className={`font-bold ${total.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            Balance: ${total.balance.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetCalculator;