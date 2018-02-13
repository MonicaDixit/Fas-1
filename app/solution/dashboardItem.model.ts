export class DashboardItem {
   public id: string;
   public name: string;
   public description: string;
   public memoryAllocation: number;
   public instances: number;
   public totalMemoryAllocation: number;
   public state: "HEALTHY" | "ERROR";

   constructor(
      id: string,
      name: string,
      description: string,
      memoryAllocation: number,
      instances: number,
      state: "HEALTHY" | "ERROR",
      totalMemoryAllocation: number
   ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.memoryAllocation = memoryAllocation;
      this.instances = instances;
      this.state = state;
      this.totalMemoryAllocation = totalMemoryAllocation;
   }
}
