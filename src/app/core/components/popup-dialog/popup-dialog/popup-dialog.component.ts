import { Component, ContentChild, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss'],
  standalone: false
})
export class PopupDialogComponent implements OnInit{

  @Input() isVisible!: boolean;
  @Input() name!: string;
  @Input() template: 'newRecord' | 'newCategory' = 'newRecord';

  @Output() isVisibleChange = new EventEmitter<any>();

  @ContentChild('newRecordContent') newRecord!: TemplateRef<any>;
  @ContentChild('newCategoryContent') newCategory!: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible']) {
      this.initWidget();
    } else if (changes['name']) {
      this.initWidget();
    }
  }

  initWidget() {
  }

  closePopup() {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }

}
