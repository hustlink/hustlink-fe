'use client';

import { Gantt, ViewMode, Task } from '@wamra/gantt-task-react';
import React from 'react';
import type { GanttProps } from '@wamra/gantt-task-react';

export default function GanttChart({ 
  tasks, 
  viewMode = ViewMode.Day, 
  onDelete,
  onDateChange,
  onAddTask,
  onResizeColumn,
  onChangeTasks,
  onEditTask,
  arrowColor,
  milestoneBackgroundColor,
  projectBackgroundColor,
  barBackgroundColor,
  barProgressColor,
}: GanttProps) {
  return (
    <Gantt
      tasks={tasks} 
      viewMode={viewMode}
      onDelete={onDelete}
      onDateChange={onDateChange}
      onAddTask={onAddTask}
      onResizeColumn={onResizeColumn}
      onChangeTasks={onChangeTasks}
      onEditTask={onEditTask}
      fontSize = "12px"
      TooltipContent={({task}) => {
        return (
          <div style={{ padding: '10px', backgroundColor: 'white', border: '1px solid #ccc' }}>
            <h3>{task.name}</h3>
            <p>
              Start: {task.start.toDateString()} <br /> End: {task.end.toDateString()}
            </p>
          </div>
        );
      }}
      distances={{
        // columnWidth: 15, // set timeline column width
        actionColumnWidth: 30, // set the width of the action (delete, edit, and add) column
        titleCellWidth: 250,
        dependenciesCellWidth: 50,
        dateCellWidth: 50,
      }}
      colors={{
        milestoneBackgroundColor,
        projectBackgroundColor,
        barBackgroundColor,
        barProgressColor,
        arrowColor
      }}
    />
  );
}

// Export types for convenience
export { ViewMode };
export type { Task as TaskType };