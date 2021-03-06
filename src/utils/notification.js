import iziToast from 'izitoast';
import { NOTIFICATION_TIMEOUT } from 'config';

/**
 * Wrapper for izitoast notification system, which provide
 * displaying small bubble messages at the document
 *
 * @param { object } options - notification options
 * @param { string } options.title - notification title
 * @param { string } options.message - notification message
 * @param { string } options.type - type of notification -  error or info or success or warning
 * @param { number } [options.timeout=NOTIFICATION_TIMEOUT] - time during which the message disappears
 * @param { string } [options.position='topRight'] - position of the notification relative to the screen
 * @returns { function } - if success return function which generate bubble message otherwise return console.error('err')
 */
function notification({ title, type, message, timeout = NOTIFICATION_TIMEOUT, position = 'topRight' } = {}) {
  try {
    if (!title || !message) {
      return console.error(
        'notificationError: params message or type are required! Please redefined func with title and type'
      );
    }
  
    const notificationTypes = ['error', 'info', 'success', 'warning'];
    const idx = notificationTypes.indexOf(type);
  
    return (
      idx >= 0
        ? iziToast[notificationTypes[idx]]({
          title,
          color: type === 'error' ? '#cc302e' : null,
          message,
          timeout,
          position
        })
        : console.error('notificationError: this type of notification does not exist')
    );
  } catch (e) {
  
  }
}

export default notification;
