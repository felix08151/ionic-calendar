import { Component, Prop,State, h } from '@stencil/core';

@Component({
  tag: 'app-calendar-detail',
  styleUrl: 'app-calendar-detail.css',
})
export class AppCalendarDetail {

  @Prop() selectedDate: Date;
  @State() notes: { date: string; note: string }[] = [];
  @State() noteText: string = ''; // Für die Notiz-Eingabe

  private saveNote(ev){
      ev.preventDefault();
      this.notes =  JSON.parse(localStorage.getItem("notes")) || [];
      this.notes.push({date: this.selectedDate.toDateString() , note: this.noteText});
      localStorage.setItem("notes",JSON.stringify(this.notes));
  }

  private getNotes(date:Date):{date: string,note: string}[]{
     const notes =  JSON.parse(localStorage.getItem("notes")) || [];
     console.log(notes);
     this.notes = notes;
     console.log(date);
     const filteredNotes = this.notes.filter(note => (note.date === date.toDateString()));
      console.log(filteredNotes);
     return filteredNotes;
  }



  render() {
    return [
      <ion-header>
      <ion-toolbar>
        <ion-title>{this.selectedDate.toDateString()}</ion-title>
      </ion-toolbar>
    </ion-header>,
    <ion-content>
      <ion-item>
        <ion-textarea 
          placeholder="Notiz eingeben"
          value={this.noteText}
          onInput={(e) => this.noteText = (e.target as HTMLInputElement).value}
        ></ion-textarea>
        <ion-button onClick={ev => this.saveNote(ev)}>speichern</ion-button>
      </ion-item>
    <ion-list>
      {
        this.getNotes(this.selectedDate).map(note => <ion-item>{note.note}</ion-item>)
      }
    </ion-list>
    </ion-content>
    ]
  }

}
