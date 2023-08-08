import { modalController } from '@ionic/core';
import { Component, ComponentInterface, Prop,State, h } from '@stencil/core';
import { ShowIonicAlert, ShowIonicEdit } from '../../utils/util';
import { CloudStorage } from '../../services/cloudStorage.service';

@Component({
  tag: 'app-calendar-detail',
  styleUrl: 'app-calendar-detail.css',
})
export class AppCalendarDetail implements ComponentInterface {

  @Prop() date: string;
  @State() notes: {id:string, data:{date: string; note: string}}[] = [];
  private noteText: string = ''; // Für die Notiz-Eingabe
  private textAreaElement: HTMLIonTextareaElement;
  private cloudStorage: CloudStorage;

  async componentWillLoad() {
     this.cloudStorage = new CloudStorage("notes");
     this.notes = await this.cloudStorage.getDocs() || [];
  }
  private async saveNote(ev){
      ev.preventDefault();
      await this.cloudStorage.createDoc(await this.cloudStorage.createKey(),{date: this.date , note: this.noteText})
      this.notes = await this.cloudStorage.getDocs() || [];
      this.notes = [...this.notes];
      this.noteText = '';
      this.textAreaElement.value = this.noteText;
      this.notes = [...this.notes];
  }

  private async deleteNote(id){
    await this.cloudStorage.deleteDoc(id);
    this.notes = await this.cloudStorage.getDocs() || [];
    this.notes = [...this.notes];
  }

  private async editNote(id: string, newNoteText: string) {
    await this.cloudStorage.updateDoc(id,{date: this.date , note: newNoteText});
    this.notes = await this.cloudStorage.getDocs() || [];
    this.notes = [...this.notes];
  }

  private async editItem(event, id: string) {
    event.preventDefault();
    const editObject = this.notes.filter(note => note.id === id).pop();
    const result = await ShowIonicEdit("Edit Note", "Edit your note:", editObject.data.note);
    if (result && result.data && result?.data?.values?.note) {
      const newNoteText = result.data.values.note;
      this.editNote(id, newNoteText); 
    } 
  }
  
  private async deleteItem(event,id){
      event.preventDefault();
      await ShowIonicAlert('Löschen?',"Willst du wirklich diesen eintrag löschen?",() => {
       this.deleteNote(id);
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
        this.notes.filter(note => this.date === note.data.date).map((note) =>
          <ion-item> 
            <ion-label>{note.data.note}</ion-label>
            <ion-buttons slot="end">
              <ion-button onClick={ev => this.editItem (ev,note.id )}>
                <ion-icon slot="icon-only" name="create-outline"></ion-icon>
              </ion-button>
              <ion-button onClick={ev => this.deleteItem(ev,note.id)}>
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
