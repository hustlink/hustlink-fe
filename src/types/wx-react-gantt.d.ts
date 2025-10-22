// types/gantt-task-react.d.ts
declare module '@wamra/gantt-task-react' {
  export interface Task {
    id: string;
    name: string;
    start: Date;
    end: Date;
    progress: number;
    isDisabled?: boolean;
    // styles; 
    dependencies?: Array<{
      sourceId: string;
      sourceTarget: 'startOfTask' | 'endOfTask';
      ownTarget: 'startOfTask' | 'endOfTask';
    }>;
    type?: 'task' | 'milestone' | 'project' | 'empty';
    parent?: string;
    hideChildren?: boolean;
    assignees?: string[];
    isRelationDisabled?: boolean;
    styles?: any;
    arrowColor?: string;
    rowHeight?: number;
    // Add other properties as needed
  }

  export enum ViewMode {
    Hour = 'Hour',
    QuarterDay = 'Quarter Day',
    HalfDay = 'Half Day',
    Day = 'Day',
    Week = 'Week',
    Month = 'Month',
    Year = 'Year',
  }

  export interface GanttProps {
    // Add other props as needed
    tasks: Task[];
    viewMode?: ViewMode;
    
    // Dimensions
    listCellWidth?: string;
    columnWidth?: number;
    rowHeight?: number;
    headerHeight?: number;
    ganttHeight?: number;
    ganttWidth?: number;
    taskListCellWidth?: string;
    distances?: any
    
    // Localization
    locale?: string;
    rtl?: boolean;
    
    // Styling
    barBackgroundColor?: string;
    barBackgroundSelectedColor?: string;
    barProgressColor?: string;
    barProgressSelectedColor?: string;
    projectBackgroundColor?: string;
    projectBackgroundSelectedColor?: string;
    projectProgressColor?: string;
    projectProgressSelectedColor?: string;
    milestoneBackgroundColor?: string;
    milestoneBackgroundSelectedColor?: string;
    fontSize?: string;
    fontFamily?: string;
    arrowColor?: string;
    arrowIndent?: number;
    todayColor?: string;
    colors?: any;
    
    // Event handlers
    onDateChange?: (task: Task) => void | boolean | Promise<void | boolean>;
    onProgressChange?: (task: Task) => void | boolean | Promise<void | boolean>;
    onDoubleClick?: (task: Task) => void;
    onClick?: (task: Task) => void;
    onDelete?: (task: Task) => boolean | void | Promise<boolean | void>;
    onSelect?: (task: Task, isSelected: boolean) => void;
    onExpanderClick?: (task: Task) => void;
    onAddTask?: (task: Task) => Promise<Task | void>;
    onResizeColumn?: (newColumnWidth: number) => void;
    onChangeTasks?: (tasks: Task[]) => void;
    onEditTask?: (task: Task) => Promise<Task | void>;

    TaskListHeader?: React.FC<{ 
      headerHeight: number; 
      rowWidth: string; 
      fontFamily: string; 
      fontSize: string;
    }>;

    TaskListTable?: React.FC<{ 
      rowHeight?: number; 
      rowWidth?: string; 
      fontFamily?: string; 
      fontSize?: string; 
      locale?: string; 
      tasks: Task[]; 
      selectedTaskId?: string; 
      setSelectedTask?: (taskId: string) => void; 
    }>;

    TooltipContent?: React.FC<{ task: Task }>;
  }

  export const Gantt: React.FC<GanttProps>;
}