'use client';

import React, { useState } from 'react';
import MonthlyCalendar from './MonthlyCalendar';
import BudgetCalculator from './BudgetCalculator';
import { Button } from "../ui/button";

const BudgetApp = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">My Budget App</h1>
      {!selectedMonth ? (
        <MonthlyCalendar onMonthSelect={handleMonthSelect} />
      ) : (
        <div>
          <Button 
            onClick={() => setSelectedMonth(null)} 
            className="mb-4"
            variant="outline"
          >
            Back to Calendar
          </Button>
          <BudgetCalculator selectedMonth={selectedMonth} />
        </div>
      )}
    </div>
  );
};

export default BudgetApp;