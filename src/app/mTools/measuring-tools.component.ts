import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-measuring-tools',
  templateUrl: './measuring-tools.component.html',
  styleUrls: ['./measuring-tools.component.scss']
})
export class MeasuringToolsComponent implements OnInit {

  measuringTools: UtensilsList = {
    Cups: [],
    Tablespoons: [],
    Teaspoons: []
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  measurerSelected(tool: string): void {
    // if (tool.includes("cup")) {
    //   this.measuringTools.Cups[tool] = !this.measuringTools.Cups[tool]
    // }

    console.log('tools', this.measuringTools)
  }

}