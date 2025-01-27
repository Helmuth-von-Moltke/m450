import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { feedbackType } from '../types/feedbackType';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  feedbacks: feedbackType[] = [];

  constructor(private feedbackService: FeedbackServiceService) {}

  ngOnInit(): void {
    this.feedbacks = this.getFeedbacks();
  }

  getFeedbacks(): feedbackType[] {
    return this.feedbackService.getFeedbacks();
  }
}
