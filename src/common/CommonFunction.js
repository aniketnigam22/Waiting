import { showMessage } from 'react-native-flash-message';

export const showSuccess = (message, desc) => {
    showMessage({
        message: message,
        description: desc,
        type: 'success',
    });
};

export const showDanger = (message, desc) => {
    showMessage({
        message: message,
        description: desc,
        type: 'danger',
    });
};

export const showInfo = (message, desc) => {
    showMessage({
        message: message,
        description: desc,
        type: 'info',
    });
};

export const showWarning = (message, desc) => {
    showMessage({
        message: message,
        description: desc,
        type: 'warning',
    });
};



