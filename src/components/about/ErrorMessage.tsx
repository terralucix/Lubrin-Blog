import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  type?: 'error' | 'warning';
}

export default function ErrorMessage({ message, type = 'error' }: ErrorMessageProps) {
  const styles = {
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      text: 'text-red-600 dark:text-red-400',
      icon: 'text-red-600'
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      text: 'text-yellow-800 dark:text-yellow-200',
      icon: 'text-yellow-600'
    }
  }[type];

  return (
    <div className={`rounded-lg p-4 flex items-center ${styles.bg}`}>
      <AlertCircle className={`h-5 w-5 mr-2 ${styles.icon}`} />
      <p className={styles.text}>{message}</p>
    </div>
  );
}