import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const confirmAction = (title, message, actionYes) => {
    
  confirmAlert({
      title,
      message,
      buttons: [
        {
          label: 'Yes',
          onClick: () => actionYes()
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })
}

// export default confirmAction