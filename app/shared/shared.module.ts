import { TotalMemoryPipe } from "./totalMemory.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MemoryFormatPipe } from "./memoryFormat.pipe";
import { AlertPipe } from "./alert.pipe";

@NgModule({
   imports: [CommonModule],
   declarations: [MemoryFormatPipe, TotalMemoryPipe, AlertPipe],
   exports: [MemoryFormatPipe, CommonModule, TotalMemoryPipe, AlertPipe]
})
export class SharedModule {}
