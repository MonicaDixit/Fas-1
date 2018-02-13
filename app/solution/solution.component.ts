import { Component } from "@angular/core";
import { FaasPlatformService } from "../api/faasPlatform.service";
import { OnInit, OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { IFaasInfo } from "../api/FaasInfo";
import { IFaasUsage } from "../api/FaasUsage";
import { DashboardItem } from "./dashboardItem.model";
import { Subscription } from "rxjs/Subscription";

@Component({
   moduleId: __moduleName,
   selector: "my-solution",
   templateUrl: "solution.component.html",
   providers: [FaasPlatformService]
})
export class SolutionComponent implements OnInit, OnDestroy {
   private faasListForDash: IFaasInfo[] = [];
   private faasObjForDash: {} = {};
   private subscription: Subscription;
   private idList: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];

   constructor(private faasPService: FaasPlatformService) {}
   ngOnInit() {
      this.faasListForDash = [];
      for (let id of this.idList) {
         let combinedSrc = this.faasPService
            .getFaasInfo$(id)
            .combineLatest(this.faasPService.getFaasUsage$(id))
            .map(([val1, val2]) => {
               return this.getDashboardData(val1, val2);
            });

         this.subscription = combinedSrc.subscribe(data => {
            this.faasObjForDash[id] = data;
            this.faasListForDash = [];
            for (let key in this.faasObjForDash) {
               // this.faasListForDash = [];
               this.faasListForDash.push(this.faasObjForDash[key]);
            }
         });
      }
   }

   getDashboardData(faasInfo: IFaasInfo, faasUsage: IFaasUsage) {
      // this.faasListForDash = [];
      const dashItem: DashboardItem = {
         id: faasInfo.id as string,
         name: faasInfo.name as string,
         description: faasInfo.description as string,
         memoryAllocation: faasInfo.memoryAllocation as number,
         instances: faasUsage.instances as number,
         state: faasUsage.state
      };
      return dashItem;
   }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }
}
