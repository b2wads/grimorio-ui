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
import Beacon from './components/beacon';
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
import SideModal from './components/side-modal';
import Table from './components/table';
import TableFixed from './components/table-fixed';
import TablePanel from './components/table-panel';
import Loader from './components/loader';
import DatePicker from './components/date-picker';
import Calendar from './components/calendar';
import Tooltip from './components/tooltip';
import TooltipSticky from './components/tooltip-sticky';
import Slider from './components/slider';
import Alert from './components/alert';
import LineGraph from './components/line-graph';
import Error from './components/error';
import Popover from './components/popover';
import SelectPopover from './components/select-popover';
import PieChart from './components/pie-chart';
import Tag from './components/tag';
import Toggle from './components/toggle';
import Pager from './components/pager';
import Steps from './components/steps';
import Feedback from './components/feedback';
import EditableValue from './components/editable-value';
import TabMenu, { Tab } from './components/tab';

// HELPERS
import { fieldsValidation } from './helpers/validation';
import { fieldsMask, masks } from './helpers/mask';
import { debounced, throttle } from './helpers';

export const validation = fieldsValidation;
export const mask = fieldsMask;
export const maskPattens = masks;
export const utils = {
  debounced,
  throttle,
};

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
  Beacon,
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
  TableFixed,
  TablePanel,
  Loader,
  Modal,
  SideModal,
  DatePicker,
  Calendar,
  Tooltip,
  TooltipSticky,
  Slider,
  Alert,
  Feedback,
  LineGraph,
  Error,
  Popover,
  SelectPopover,
  PieChart,
  Tag,
  Toggle,
  Steps,
  Pager,
  EditableValue,
  TabMenu,
  Tab,
};
