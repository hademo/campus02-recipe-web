import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { getErrors } from '../../../lib/get-errors';

@Component({
  selector: 'app-entries-form',
  templateUrl: './entries-form.component.html',
  styleUrls: ['./entries-form.component.scss'],
})
export class EntriesFormComponent {
  @ViewChild('form') public form?: NgForm;

  @Input() entries?: string[] = [];
  @Output() entriesChange = new EventEmitter<string[]>();

  public deleteEntry(index: number) {
    const entries = [...(this.entries ?? [])];
    entries.splice(index, 1);
    this.entriesChange.emit(entries);
  }

  public addEntry(event: Event) {
    event.preventDefault();
    const entries = [...(this.entries ?? []), ''];
    this.entriesChange.emit(entries);
  }

  public updateEntry(event: any, entryIndex: number) {
    const entries = [...(this.entries ?? [])];
    entries[entryIndex] = event;
    this.entriesChange.emit(entries);
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
