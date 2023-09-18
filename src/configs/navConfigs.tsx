import { ReactNode } from "react";
import SvgIconStyle from "../components/SvgIconStyle"
import { NavConfig } from "./types";
import { PATH_APP } from "../routes/paths";

const getIcon = (name: string): ReactNode => <SvgIconStyle
  src={`/assets/icons/nav/${name}.svg`}
  sx={{ width: 24, height: 24 }}
/>

const ICONS = {
  home: getIcon('ic_home'),
  products: getIcon('ic_products'),
  settings: getIcon('ic_settings'),
}

export const NAV_CONFIGS: NavConfig[] = [
  {
    name: 'home',
    label: 'Home',
    path: PATH_APP.home,
    icon: ICONS.home,
  },
  {
    name: 'products',
    label: 'Products',
    path: PATH_APP.products.index,
    icon: ICONS.products,
    children: [
      {
        name: 'list',
        label: 'List',
        path: PATH_APP.products.list,
      },
      {
        name: 'create',
        label: 'Create',
        path: PATH_APP.products.create,
      },
      {
        name: 'edit',
        label: 'Edit',
        path: PATH_APP.products.edit,
      },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    path: PATH_APP.settings,
    icon: ICONS.settings,
  },
]
