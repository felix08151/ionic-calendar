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
};

export const ShowIonicEdit = async (header, message, defaultValue) => {
    const alert = await alertController.create({
      header,
      message,
      inputs: [
            {
            type: 'textarea',
            value: defaultValue,
            name: "note",
            placeholder: 'Edit this text',
          }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'edit',
          role: 'edit',
        }
      ]
    });
  

    await alert.present();
    return alert.onDidDismiss();
  };

export const RemoveItemFromArray = (array: any[], index: number): any[] => {
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
  }
  return array;
};