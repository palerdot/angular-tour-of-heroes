import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';

import { QuestionBase } from '../question-base';
import { QuestionService } from '../question.service';
import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css'],
  providers: [ QuestionControlService, DynamicFormQuestionComponent ]
})
export class DynamicFormsComponent implements OnInit {

  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(
    private questionService: QuestionService,
    private qcs: QuestionControlService
  ) {
    this.questions = this.questionService.getQuestions();
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
