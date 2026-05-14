// project-imports
import { handlerCustomerDialog } from 'api/customer';
import { NavActionType } from 'config';

// assets
import {
  Add,
  DirectInbox,
  Link1,
  KyberNetwork,
  Messages2,
  Calendar1,
  Kanban,
  Profile2User,
  Bill
} from 'iconsax-reactjs';

// icons
const icons = {
  applications: KyberNetwork,
  chat: Messages2,
  calendar: Calendar1,
  kanban: Kanban,
  customer: Profile2User,
  invoice: Bill,
  add: Add,
  link: Link1,
  mail: DirectInbox
};

// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

const applications = {
  id: 'group-applications',
  title: 'applications',
  icon: icons.applications,
  type: 'group',
  children: [
    {
      id: 'chat',
      title: 'chat',
      type: 'item',
      url: '/apps/chat',
      icon: icons.chat,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: 'calendar',
      type: 'item',
      icon: icons.calendar,
      url: '/apps/calendar',
      actions: [
        {
          type: NavActionType.LINK,
          label: 'Full Calendar',
          icon: icons.link,
          url: 'https://fullcalendar.io/docs/react',
          target: true
        }
      ]
    },
    {
      id: 'kanban',
      title: 'kanban',
      type: 'item',
      icon: icons.kanban,
      url: '/apps/kanban/board',
      link: '/apps/kanban/:tab',
      breadcrumbs: false
    },
    {
      id: 'customer',
      title: 'customer',
      type: 'collapse',
      icon: icons.customer,
      children: [
        {
          id: 'customer-list',
          title: 'list',
          type: 'item',
          url: '/apps/customer/customer-list',
          actions: [
            {
              type: NavActionType.FUNCTION,
              label: 'Add Customer',
              function: () => handlerCustomerDialog(true),
              icon: icons.add
            }
          ]
        },
        {
          id: 'customer-card',
          title: 'cards',
          type: 'item',
          url: '/apps/customer/customer-card'
        }
      ]
    },
    {
      id: 'invoice',
      title: 'invoice',
      url: '/apps/invoice/dashboard',
      type: 'collapse',
      icon: icons.invoice,
      breadcrumbs: false,
      children: [
        {
          id: 'create',
          title: 'create',
          type: 'item',
          url: '/apps/invoice/create',
          breadcrumbs: false
        },
        {
          id: 'details',
          title: 'details',
          type: 'item',
          url: '/apps/invoice/details/1',
          link: '/apps/invoice/details/:id',
          breadcrumbs: false
        },
        {
          id: 'list',
          title: 'list',
          type: 'item',
          url: '/apps/invoice/list',
          breadcrumbs: false
        },
        {
          id: 'edit',
          title: 'edit',
          type: 'item',
          url: '/apps/invoice/edit/1',
          link: '/apps/invoice/edit/:id',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default applications;
