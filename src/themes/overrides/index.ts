import { Theme } from '@mui/material';
import Tabs from './Tabs';
import Card from './Card';
import Table from "./Table";
import Dialog from "./Dialog";
import Button from "./Button";
import Popover from "./Popover";
import MenuItem from "./MenuItem";
import Checkbox from './Checkbox';
import Typography from './Typography';
import DatePicker from './DatePicker';
import Autocomplete from './Autocomplete';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Tabs(theme),
    Card(theme),
    Table(theme),
    Dialog(theme),
    Button(theme),
    Popover(theme),
    MenuItem(theme),
    Checkbox(theme),
    Typography(theme),
    DatePicker(theme),
    Autocomplete(theme),
  )
}
