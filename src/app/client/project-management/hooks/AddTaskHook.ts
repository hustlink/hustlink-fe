// hooks/useTaskDialog.ts
import { useState } from 'react';
import type { Task } from '@wamra/gantt-task-react';

export function useAddTaskDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const openAddDialog = () => {
    setSelectedTask(null);
    setIsOpen(true);
  };

  const openEditDialog = (task: Task) => {
    setSelectedTask(task);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedTask(null);
  };

  return {
    isOpen,
    selectedTask,
    isDirty,
    openAddDialog,
    openEditDialog,
    closeDialog,
    setIsOpen,
    setIsDirty
  };
}