import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faKey,
  faEnvelope,
  faQuestion,
  faCheck
} from '@fortawesome/free-solid-svg-icons';


const createFontAwesomeIcons = () => library.add(
  faUser,
  faKey,
  faEnvelope,
  faQuestion,
  faCheck
);

export default createFontAwesomeIcons;
