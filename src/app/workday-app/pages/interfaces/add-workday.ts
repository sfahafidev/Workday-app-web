
export interface AddWorkdays {
    idWorkday: number;
    codeShift: string;
    date: string; 
    timeOfArrival: string;
    departureTime: string; 
    idEmployee: number;
  
  }


  export interface AddWorkdaysRespose {
    name: string;
    kindOfShift: string;
    date: string; 
    totalHours: number;
  }