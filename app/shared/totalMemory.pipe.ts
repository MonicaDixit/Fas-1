import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "totalMemory" })
export class TotalMemoryPipe implements PipeTransform {
   transform(instances: number, memory: number) {
      return instances * memory;
   }
}
