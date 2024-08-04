'use client';

import React from 'react';
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const MonthlyCalendar = ({ onMonthSelect }) => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  return (
    <Card className="max-w-md mx-auto p-4">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-center">Select a Month</h2>
        <div className="grid grid-cols-3 gap-4">
          {months.map((month) => (
            <Button
              key={month}
              onClick={() => onMonthSelect(month)}
              variant="outline"
              className="h-24 text-lg font-semibold"
            >
              {month}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyCalendar;