import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-keyword-form',
  templateUrl: './keyword-form.component.html',
  styleUrls: ['./keyword-form.component.less']
})
export class KeywordFormComponent {
  keyword = '';

  @Output() requestSearch = new EventEmitter<String>();

  onClickSearch(keyword: string) {
    this.requestSearch.emit(keyword);
  }
}
