import { Component } from '@angular/core';
import { LabseqService } from './labseq.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Labseq';
  number = 0;
  result = 0n;
  error = "";

  constructor(private labseqService: LabseqService) {
  }

  updateResult() {
    this.labseqService.getSequenceResult(this.number).subscribe((result)=> {
      this.error = "";
      this.result = result;
    }, (error) => {
      this.error = error.error;
    });
  }
}


