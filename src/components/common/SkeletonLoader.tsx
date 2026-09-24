import React from 'react';

export const CourseCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-5 space-y-4 animate-pulse shadow-sm">
    <div className="w-full h-44 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
    <div className="space-y-2">
      <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-md w-3/4" />
      <div className="h-3.5 bg-slate-200 dark:bg-slate-800 rounded-md w-full" />
      <div className="h-3.5 bg-slate-200 dark:bg-slate-800 rounded-md w-2/3" />
    </div>
    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-md w-24" />
      <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-full w-28" />
    </div>
  </div>
);

export const BatchCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-5 animate-pulse shadow-sm">
    <div className="flex justify-between items-center">
      <div className="h-6 bg-slate-200 rounded-full w-28" />
      <div className="h-6 bg-slate-200 rounded-full w-16" />
    </div>
    <div className="h-7 bg-slate-200 rounded-md w-4/5" />
    <div className="h-14 bg-slate-100 rounded-2xl w-full" />
    <div className="space-y-2">
      <div className="h-4 bg-slate-200 rounded-md w-full" />
      <div className="h-4 bg-slate-200 rounded-md w-5/6" />
      <div className="h-4 bg-slate-200 rounded-md w-4/6" />
    </div>
    <div className="h-12 bg-slate-200 rounded-full w-full" />
  </div>
);
