import { ITask } from './task';

export interface ITaskList {
    id: number;
    title: string;
    tasks: ITask[];
}