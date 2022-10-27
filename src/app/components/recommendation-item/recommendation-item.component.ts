import { Component } from '@angular/core';
import { Recommendation } from 'src/app/models/recommendation';

@Component({
  selector: 'app-recommendation-item',
  templateUrl: './recommendation-item.component.html',
  styleUrls: ['./recommendation-item.component.scss']
})
export class RecommendationItemComponent {
  @Input() recommendation!: Recommendation

  constructor() { }


}
