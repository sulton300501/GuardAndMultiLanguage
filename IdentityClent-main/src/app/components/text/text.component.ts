import { AfterViewChecked, AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { DataComponent } from '../dataName/data.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent{

  @Input() h!: string;

}
