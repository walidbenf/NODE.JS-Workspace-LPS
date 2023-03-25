import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {
  agreed = 0;
  diasgreed = 0;
  voters= ['Billy','Paulo','Jeanne','Dybala'];
  onVoted(property) VotetakerComponent.agreed: number agreed ? this.agreed++ : this.disagreed++ );
  constructor() { }

  ngOnInit() {
  }

}
