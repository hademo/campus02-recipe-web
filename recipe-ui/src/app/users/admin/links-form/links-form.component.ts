import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { getErrors } from '../../../../lib/get-errors';

@Component({
  selector: 'app-links-form',
  templateUrl: './links-form.component.html',
  styleUrls: ['./links-form.component.scss'],
})
export class LinksFormComponent {
  @ViewChild('form') public form?: NgForm;

  @Input() links?: string[] = [];
  @Output() linksChange = new EventEmitter<string[]>();

  public deleteLink(index: number) {
    const links = [...(this.links ?? [])];
    links.splice(index, 1);
    this.linksChange.emit(links);
  }

  public addLink(event: Event) {
    event.preventDefault();
    const links = [...(this.links ?? []), ''];
    this.linksChange.emit(links);
  }

  public updateLink(event: any, linkIndex: number) {
    const links = [...(this.links ?? [])];
    links[linkIndex] = event;
    this.linksChange.emit(links);
  }

  public track(index: number, item: string) {
    return index;
  }

  public getErrors(control: NgModel) {
    return getErrors(control);
  }

  public get invalid() {
    return this.form?.invalid;
  }
}
