import { Injectable } from '@angular/core';

import { DropDownQuestion } from './dynamic-forms/question-dropdown';
import { TextBoxQuestion } from './dynamic-forms/question-textbox';
import { QuestionBase } from './question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  // TODO: get asyncronously from remote date source
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropDownQuestion({
        key: 'kundalaksei',
        label: 'Paarsnality Koncham kammi',
        options: [
          {key: 'vivek', value: 'sakthi'},
          {key: 'maama', value: 'Goundamani'},
          {key: 'shakti', value: 'Karthik'}
        ],
        order: 3
      }),

      new TextBoxQuestion({
        key: 'Mekanikal Manikam',
        label: 'Thazhuvattumaaeeee ...',
        value: 'Mekanikal',
        required: true,
        order: 1
      }),

      new TextBoxQuestion({
        key: 'Kappal Vela Muthaih',
        label: 'Taeekoooo ....',
        value: 'muthaih',
        required: true,
        order: 2
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

}
