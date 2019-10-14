
import { GroundRules, RecommendForm, RecommendCount } from '../containers/Recommend';
import Discover from '../containers/Discover';
import {
  AdminUserList,
  AdminAddUser,
  AdminEditUser,
  AdminGroupList,
  AdminAddGroup,
  AdminEditGroup
} from '../containers/Admin';
import roles from './roles';
import { pageLinks } from './links';

const authRoutes = [
  {
    url: pageLinks.GroundRules.url,
    component: GroundRules,
    roles: [
      roles.REFERRER_ROLE
    ]
  },
  {
    url: pageLinks.RecommendForm.url,
    component: RecommendForm,
    roles: [
      roles.REFERRER_ROLE
    ]
  },
  {
    url: pageLinks.RecommendCount.url,
    component: RecommendCount,
    roles: [
      roles.REFERRER_ROLE
    ]
  },
  {
    url: pageLinks.Discover.url,
    component: Discover,
    roles: [
      roles.ADMIN_ROLE,
      roles.REFERRER_ROLE
    ]
  },
  {
    url: pageLinks.AdminUserList.url,
    component: AdminUserList,
    roles: [
      roles.ADMIN_ROLE
    ]
  },
  {
    url: pageLinks.AdminAddUser.url,
    component: AdminAddUser,
    roles: [
      roles.ADMIN_ROLE
    ]
  },
  {
    url: pageLinks.AdminEditUser.url,
    component: AdminEditUser,
    roles: [
      roles.ADMIN_ROLE
    ]
  },
  {
    url: pageLinks.AdminGroupList.url,
    component: AdminGroupList,
    roles: [
      roles.ADMIN_ROLE
    ]
  },
  {
    url: pageLinks.AdminAddGroup.url,
    component: AdminAddGroup,
    roles: [
      roles.ADMIN_ROLE
    ]
  },
  {
    url: pageLinks.AdminEditGroup.url,
    component: AdminEditGroup,
    roles: [
      roles.ADMIN_ROLE
    ]
  }
];

export {
  authRoutes
};