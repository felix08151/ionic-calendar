import { modalController } from '@ionic/core';
import { Component, Prop,State, h } from '@stencil/core';
import { RemoveItemFromArray, ShowIonicAlert } from '../../utils/util';

@Component({
  tag: 'app-calendar-detail',
  styleUrl: 'app-calendar-detail.css',
})
export class AppCalendarDetail {

  @Prop() date: string;
  @State() notes: { date: string; note: string }[] = [];


  private noteText: string = ''; // Für die Notiz-Eingabe
  private textAreaElement: HTMLIonTextareaElement;
  private saveNote(ev){
      ev.preventDefault();
      this.notes =  JSON.parse(localStorage.getItem("notes")) || [];
      this.notes.push({date: this.date , note: this.noteText});
      localStorage.setItem("notes",JSON.stringify(this.notes));

      this.notes = [...this.notes];
      this.noteText = '';
      this.textAreaElement.value = this.noteText;
  }

  private deleteNote(itemPos){
    console.log(itemPos);
    const notes =  JSON.parse(localStorage.getItem("notes")) || [];
    this.notes = RemoveItemFromArray(notes,itemPos);
    localStorage.setItem("notes",JSON.stringify(this.notes));
    this.notes = [...this.notes];
  }

  private getNotes(date:string):{date: string,note: string}[]{
     const notes =  JSON.parse(localStorage.getItem("notes")) || [];
     console.log(notes);
     this.notes = notes;
     console.log(date);
     const filteredNotes = this.notes.filter(note => (note.date === date));
      console.log(filteredNotes);
     return filteredNotes;
  }




  private async deleteItem(event,itemPos){
      event.preventDefault();
      await ShowIonicAlert('Löschen?',"Willst du wirklich diesen eintrag löschen?",() => {
       this.deleteNote(itemPos);
      })
  }


  private closeModal(ev){
      ev.preventDefault();
      modalController.dismiss(null, 'cancel');
  }

  render() {
    return [
      <ion-header>
      <ion-toolbar>
        <ion-title>{this.date}</ion-title>
        <ion-buttons slot="end">
          <ion-button onClick={ev => this.closeModal(ev)}><ion-icon slot="icon-only" name="close"></ion-icon></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>,
    <ion-content>
      <ion-item>
        <ion-textarea 
          ref={(ref:HTMLIonTextareaElement) => this.textAreaElement = ref}
          placeholder="Notiz eingeben"
          value={this.noteText}
          onInput={(e) => this.noteText = (e.target as HTMLInputElement).value}
        ></ion-textarea>
        <ion-button onClick={ev => this.saveNote(ev)}>speichern</ion-button>
      </ion-item>
    <ion-list>
      {
        this.getNotes(this.date).map((note,index) => 
        <ion-item> 
          <ion-label>{note.note}</ion-label>

          <ion-buttons slot="end">
            <ion-button >
              <ion-icon slot="icon-only" name="create-outline"></ion-icon>
            </ion-button>
            <ion-button onClick={ev => this.deleteItem(ev,index)}>
              <ion-icon slot="icon-only" name="trash-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
         </ion-item>
        )
      }
    </ion-list>
    </ion-content>
    ]
  }

}
