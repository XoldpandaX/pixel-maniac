import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faKey,
  faEnvelope,
  faQuestion,
  faCheck,
  faLock,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';


const createFontAwesomeIcons = () => library.add(
  faUser,
  faKey,
  faEnvelope,
  faQuestion,
  faCheck,
  faLock,
  faPaperPlane
);

export default createFontAwesomeIcons;
