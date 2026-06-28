export interface Printer {

  id: string;

  name: string;

  model: string;

  status: "online" | "offline";

  printHours: number;

}