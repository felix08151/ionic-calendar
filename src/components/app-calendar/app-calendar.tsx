import { modalController } from '@ionic/core';
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-calendar',
  styleUrl: 'app-calendar.css',
})
export class AppCalendar {
  @State() currentDate: Date;
  @State() selectedDate: Date | null = null;
  @State() isDarkMode: boolean = false;

  componentWillLoad() {
    this.currentDate = new Date();
  }

  render() {
    const monthsToShow = 12; // Anzahl der Monate, die gleichzeitig angezeigt werden sollen

    return (
      <ion-content>
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="end">
              <ion-toggle onIonChange={(ev) => this.toggleDarkMode(ev)}>
                {this.isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </ion-toggle>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <div class="calendar-wrapper">
          <div class="calendar-container">
            {this.renderMonths(monthsToShow)}
          </div>
        </div>
      </ion-content>
    );
  }

  private renderMonths(numMonths: number) {
    const months: any[] = [];
    const startDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);

    for (let i = 0; i < numMonths; i++) {
      const currentMonth = new Date(startDate);
      currentMonth.setMonth(startDate.getMonth() + i);

      months.push(
        <div class="month">
          <ion-list>
            <ion-list-header>
              {this.getMonthName(currentMonth)} {currentMonth.getFullYear()}
            </ion-list-header>
            <ion-item-divider>Mo</ion-item-divider>
            <ion-row>
              {this.renderDays(currentMonth)}
            </ion-row>
          </ion-list>
        </div>
      );
    }

    return months;
  }

  private renderDays(date: Date) {
    const days: any[] = [];
    const firstDayOfWeek = this.getFirstDayOfWeek(date);
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 0; i < daysInMonth; i++) {
      const currentDay = new Date(firstDayOfWeek);
      currentDay.setDate(firstDayOfWeek.getDate() + i);

      const isSelected = this.isSameDay(currentDay, this.selectedDate);
      const isToday = this.isSameDay(currentDay, this.currentDate);

      console.log(currentDay.toDateString())

      days.push(
        <ion-col>
          <ion-item onClick={(event) => this.openModal(event, currentDay.toDateString())}>
            <ion-label 
              class={{
                'selected-day': isSelected,
                'today': isToday
              }}
            >
              {this.getDayName(currentDay)}
            </ion-label>
          </ion-item>
        </ion-col>
      );
    }

    return days;
  }

  private getFirstDayOfWeek(date: Date): Date {
    const dayOfWeek = date.getDay();
    const firstDayOfWeek = new Date(date);
    firstDayOfWeek.setDate(date.getDate() - dayOfWeek);
    return firstDayOfWeek;
  }

  private getMonthName(date: Date): string {
    const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    return monthNames[date.getMonth()];
  }

  private isSameDay(date1: Date, date2: Date | null) {
    if (!date2) return false;
    return date1.toDateString() === date2.toDateString();
  }

  private getDayName(date: Date): string {
    const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    return dayNames[date.getDay()];
  }

  private async openModal(event: any, date: string){
    event.preventDefault();
    console.log(date);
    const modal = await modalController.create({
      component: "app-calendar-detail",
      componentProps:{date}
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    console.log(data,role);
  }
  private toggleDarkMode(ev) {
    console.log();
    const isDarkMode = ev.detail.checked;
    document.body.classList.toggle('dark', isDarkMode);
  }

}