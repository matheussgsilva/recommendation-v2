import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';
import { Recommendation } from 'src/app/models/recommendation';
import { Comment } from '../../models/comment'

@Component({
  selector: 'app-recommendation-details',
  templateUrl: './recommendation-details.component.html',
  styleUrls: ['./recommendation-details.component.scss']
})
export class RecommendationDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  public recommendation!: Recommendation;
  public newComment: string = '';
  public loading: boolean = true;
  public commentsLoading: boolean = false;
  public showDialog: boolean = false;

  public id:number = this.route.snapshot.params['id'];

  public ngOnInit(): void {
    this.loadRecommendation()
  }

  public loadRecommendation() {
    this.loading = true;
    this.apiService.get<Recommendation>(`recommendations/${this.id}`).then( data => {
      this.recommendation = data;
    }).finally( () => {
      this.loading = false;
    })
  }

  public showEditDialog() {
    this.showDialog = true
  }

  public onCloseDialog(reload: boolean) {
    this.showDialog = false;
    if (reload) this.loadRecommendation()
  }

  public async sendComment(): Promise<void> {
    this.commentsLoading = true;
    let url: string = `recommendations/${this.recommendation.id}/comments`
    this.apiService.post<Comment>(url, { content: this.newComment }).then( async () =>{
      let data = await this.apiService.get<Recommendation>(`recommendations/${this.id}`)
      this.recommendation.comments = data.comments
      this.newComment = ''
    }).finally( () => {
      this.commentsLoading = false;
    })
  }

  public deleteRecommendation() {
    let url: string = `recommendations/${this.recommendation.id}`
    this.apiService.delete(url)
    .then(() => this.router.navigateByUrl(''))
  }

}
