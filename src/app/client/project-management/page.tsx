"use client"

import { Navbar } from '@/app/shared/components/widgets/Navbar';
import { 
    RiCalendarScheduleLine,
    RiArticleLine,
    RiBriefcase5Line 
} from "react-icons/ri";
import { Button } from '@/app/shared/components/ui/button';

import { GanttProps, Task } from "@wamra/gantt-task-react";
import Typography from '@/app/shared/components/ui/Typography';
import { ToggleGroupItem, ToggleGroup } from '@/components/ui/toggle-group';
import dynamic from 'next/dynamic';
import AddTaskDialog from './components/AddTaskDialog';
import { useRef, useState } from 'react';
import { useAddTaskDialog } from './hooks/AddTaskHook';
import { DialogProps } from '@radix-ui/react-dialog';

// Dynamic import with loading state
const GanttChart = dynamic(() => import('./GanttChart'), {
  loading: () => (
    <div className="p-3 flex items-center justify-center">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <Typography className="sr-only">Loading...</Typography>
    </div>
  ),
  ssr: false // Disable server-side rendering if it causes issues
});

const ClientProjectManagement= () => {
    const {isOpen, selectedTask, openAddDialog, openEditDialog, closeDialog} = useAddTaskDialog();
    const currentDate = new Date();
    const tasks: Task[] = [
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            name: "Some Project",
            id: "ProjectSample",
            progress: 25,
            type: "project",
            hideChildren: false,
            styles: { progressColor: '#1b0cb8ff', progressSelectedColor: '#47fa01ff' },
            isDisabled: true
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                2,
                12,
                28
            ),
            name: "Idea",
            id: "Idea",
            progress: 45,
            type: "task",
            parent: "ProjectSample"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
            name: "Research",
            id: "Research",
            progress: 25,
            dependencies: [
                {
                    sourceId: "Idea",
                    sourceTarget: "endOfTask",
                    ownTarget: "startOfTask"
                }
            ],
            type: "task",
            parent: "ProjectSample"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Discussion with team",
            id: "Discussion",
            progress: 10,
            dependencies: [
                {
                    sourceId: "Research",
                    sourceTarget: "endOfTask",
                    ownTarget: "startOfTask"
                }
            ],
            type: "task",
            parent: "ProjectSample"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                10,
                0,
                0
            ),
            name: "Developing",
            id: "developing",
            progress: 50,
            dependencies: [
                {
                    sourceId: "Discussion",
                    sourceTarget: "endOfTask",
                    ownTarget: "startOfTask"
                }
            ],
            type: "project",
            parent: "ProjectSample",
            isDisabled: true,
            hideChildren: true
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
            name: "Code",
            id: "code",
            type: "task",
            progress: 40,
            parent: "developing"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
            name: "Frontend",
            id: "frontend",
            type: "task",
            progress: 40,
            parent: "code",
            assignees: ["Bob", "Peter"]
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
            name: "Backend",
            id: "backend",
            type: "task",
            progress: 40,
            parent: "code",
            assignees: ["Marc"]
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
            name: "Review",
            id: "review",
            type: "task",
            progress: 70,
            parent: "developing"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
            name: "Release",
            id: "release",
            progress: currentDate.getMonth(),
            type: "milestone",
            dependencies: [
                {
                    sourceId: "review",
                    sourceTarget: "endOfTask",
                    ownTarget: "startOfTask"
                }
            ],
            parent: "ProjectSample"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
            name: "Party Time",
            id: "party",
            progress: 0,
            isDisabled: true,
            isRelationDisabled: true,
            type: "task"
        }
    ]

      // ✅ Create ref to access child methods
    const ganttRef = useRef<DialogProps | null>(null);
    const handleAddTask = () => {
        // ganttRef.current?
    }

    return (
        <>
            <Navbar />
            <AddTaskDialog
                open={isOpen}
                closeDialog={closeDialog}
            />
            <div className='flex'>
                <div className='w-64 bg-gray-100'>
                    <Typography className='m-4 text-lg font-semibold'>Hustle Space</Typography>
                    <Typography className='m-4 text-lg font-semibold'>Project 1</Typography>

                    <Button variant="ghost">Add Projects</Button>
                </div>
                <div className='w-full'>
                    <ToggleGroup type="single" className="m-4 space-x-2">
                        <ToggleGroupItem value="a"><RiBriefcase5Line  />All Projects</ToggleGroupItem>
                        <ToggleGroupItem value="b"><RiCalendarScheduleLine />Gantt Chart</ToggleGroupItem>
                        <ToggleGroupItem value="c"><RiArticleLine  />By Status</ToggleGroupItem>
                    </ToggleGroup>
                    <GanttChart 
                        tasks={tasks} 
                        columnWidth={10} 
                        onDelete={(id) => console.log("delete this item", id)} 
                        onDateChange={(task) => console.log("Task updated:", task)} 
                        onAddTask={(task: Task) => {
                            openAddDialog(); 
                            // handleAddTask();
                            return Promise.resolve(task);
                        }}
                        onResizeColumn={() => {console.log("Resize Column")}}
                        onChangeTasks={() => {console.log("Tasks Changed")}}

                        onEditTask={(task: Task) => {console.log("Add Task clicked", ); return Promise.resolve(task);}}

                        arrowColor={"#ff0000"}
                        rowHeight={100}
                        milestoneBackgroundColor={"#000000"}
                        projectBackgroundColor={"#06193cff"}
                        barBackgroundColor={"#9dc62aff"}
                        barProgressColor={"#16a34a"}
                    />
                        
                </div>
            </div>
        </>
    );
}

export default ClientProjectManagement;
