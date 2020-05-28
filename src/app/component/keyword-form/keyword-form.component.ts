import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-keyword-form',
  templateUrl: './keyword-form.component.html',
})
export class KeywordFormComponent {
  keyword = '';

  @Output() requestSearch = new EventEmitter<string>();

  onClickSearch(keyword: string) {
    this.requestSearch.emit(keyword);
  }
}
