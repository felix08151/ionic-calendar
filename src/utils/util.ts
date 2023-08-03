import { alertController } from '@ionic/core';

export const ShowIonicAlert = async (header, message, okay = () => {}) => {
  const alert = await alertController.create({
    header,
    message,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {}
      },
      {
        text: 'OK',
        handler: okay
      }
    ]
  });

  await alert.present();
}

export const RemoveItemFromArray = (array: any[], index: number): any[] => {
    if (index >= 0 && index < array.length) {
      array.splice(index, 1);
    }
    return array;
  }