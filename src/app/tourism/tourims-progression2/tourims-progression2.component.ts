import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTab, MatTabChangeEvent, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { FinEtape1Component } from "../tourims-progression1/fin-etape1/fin-etape1.component";
import { ImagesEtablissementComponent } from "../tourims-progression2/images-tourism/images-etablissement.component";

@Component({
  selector: 'app-tourims-progression2',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    MatProgressBar,
    CommonModule,
    MatIcon,
    FinEtape1Component,
    ImagesEtablissementComponent
],
  templateUrl: './tourims-progression2.component.html',
  styleUrl: './tourims-progression2.component.css'
})
export class TourimsProgression2Component implements AfterViewInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex: number = 0; 

  // ngAfterViewInit() { 
  //   setTimeout(() => {
  //     const savedIndex = localStorage.getItem('activeTabIndex');
  //     this.activeTabIndex = savedIndex ? +savedIndex : 0;
  //     this.selectTab(this.activeTabIndex);
  //   });
  // }

  onTabChange(event: MatTabChangeEvent) {
    this.activeTabIndex = event.index;
    localStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
    localStorage.setItem('activeTabIndex', index.toString());
    this.tabGroup.selectedIndex = index;
  }

  previousTab() {
    if (this.activeTabIndex > 0) {
      this.selectTab(this.activeTabIndex - 1);
    }
  }

  nextTab() {
    if (this.activeTabIndex < this.tabGroup._tabs.length - 1) {
      this.selectTab(this.activeTabIndex + 1);
    }
  }


}
 