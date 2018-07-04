
export interface ITask{
    id: number;
    title: string;
    description: string;
    url: string;
    canGoTo: number[];
}

// export class Task implements ITask{
//     id: number;
//     title: string;
//     description: string;
//     url: string;
//     canGoTo: number[];
// }