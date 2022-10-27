import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Recommendation } from 'src/app/models/recommendation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {

  public readonly ALL_RECOMMENDATIONS: number = 0;
  public recommendations: Recommendation[] = [];
  public categories: Category[] = [];
  public currentCategory: number = this.ALL_RECOMMENDATIONS;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecommendations;
  }

  public loadCategories() {

  }

  public loadRecommendations() {

  }

  public filter(categoryId: number) {

  }

}
