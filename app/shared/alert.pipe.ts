import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "alert" })
export class AlertPipe implements PipeTransform {
   transform(memory: number, instance: number) {
      const total = memory * instance * 1024 * 1024;
      if (total > 1000000000000) {
         return "RED ALERT";
      } else {
         return "AMBER ALERT";
      }
   }
}
