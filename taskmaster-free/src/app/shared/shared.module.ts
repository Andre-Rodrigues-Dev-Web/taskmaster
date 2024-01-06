import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './components/topo/topo.component';
import { SharedServicesModule } from './services/shared-services.module';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    TopoComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    SharedServicesModule
  ],
  exports: [
   TopoComponent,
   MenuComponent
  ],
})
export class SharedModule {}
