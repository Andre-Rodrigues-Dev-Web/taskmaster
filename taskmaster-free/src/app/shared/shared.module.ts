import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './components/topo/topo.component';
import { SharedServicesModule } from './services/shared-services.module';
import { MenuModule } from './components/menu/menu.module';

@NgModule({
  declarations: [
    TopoComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  providers: [
    SharedServicesModule
  ],
  exports: [
   TopoComponent,
   MenuModule
  ],
})
export class SharedModule {}
