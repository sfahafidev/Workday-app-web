import { Employee } from "./employee";
import { Shift } from "./shift";

export interface Workdays {
    id: number;
    shift: Shift;
    date: string; 
    timeOfArrival: string;
    departureTime: string; 
    totalHours: number;
    approved: string; 
    employee: Employee;
  
  }