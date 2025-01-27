import { Injectable } from '@angular/core';
import { feedbackType } from '../types/feedbackType';

import feedbacks from '../../dataStorage/userFeedback.json';

@Injectable({
  providedIn: 'any'
})
export class FeedbackServiceService {

  constructor() {}

  getFeedbacks(): feedbackType[] {
    return feedbacks;
  }
}
