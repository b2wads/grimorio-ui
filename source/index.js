import './styl/style.styl';

import Button from './components/button';
import ButtonUpload from './components/button-upload';
import Icon from './components/icon';
import Panel from './components/panel';
import Svg from './components/svg';
import Product from './components/product';
import Menu, { MenuItem } from './components/menu';
import Accordion, { AccordionTitle, AccordionContent } from './components/accordion';
import Sidebar from './components/sidebar';
import Header from './components/header';
import InfoCard from './components/info-card';
import PageTitle from './components/page-title';
import Breadcrumb from './components/breadcrumb';
import Select, { SelectOption } from './components/select';
import Form, {
  FormGroup,
  FormControl,
  FormLabel,
  FormActions,
  FormControlLabel,
  FormHelpText,
} from './components/form';
import Modal from './components/modal';
import Table from './components/table';
import TablePanel from './components/table-panel';
import Loader from './components/loader';
import DatePicker from './components/date-picker';
import Tooltip from './components/tooltip';
import Slider from './components/slider';
import LinkGenerator from './components/link-generator';
import Alert from './components/alert';
import LineGraph from './components/line-graph';
import Error from './components/error';
import Popover from './components/popover';
import SelectPopover from './components/select-popover';
import PieChart from './components/pie-chart';
import Tag from './components/tag';
import Toggle from './components/toggle';

// HELPERS
import { fieldsValidation } from './helpers/validation';
import { fieldsMask, masks } from './helpers/mask';

export const validation = fieldsValidation;
export const mask = fieldsMask;
export const maskPattens = masks;

export {
  Button,
  ButtonUpload,
  Icon,
  Panel,
  Svg,
  Product,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  FormActions,
  FormControlLabel,
  FormHelpText,
  Accordion,
  AccordionTitle,
  AccordionContent,
  Menu,
  MenuItem,
  Sidebar,
  Header,
  InfoCard,
  PageTitle,
  Breadcrumb,
  Select,
  SelectOption,
  Table,
  TablePanel,
  Loader,
  Modal,
  DatePicker,
  Tooltip,
  LinkGenerator,
  Slider,
  Alert,
  LineGraph,
  Error,
  Popover,
  SelectPopover,
  PieChart,
  Tag,
  Toggle,
};
