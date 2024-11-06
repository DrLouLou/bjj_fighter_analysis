import { UserRolesEnum } from "@/redux/user/_models";

type UrlsConstantItem = {
  key: string;
  menuLabel: string;
  headerLabel: string;
  path?: string;
  url: string;
  availableForRoles: UserRolesEnum[];
  hidden?: boolean;
};

export type UrlsConstants = {
  [key: string]: UrlsConstantItem;
};

// Not for Indemnity Provider
export const ORDERS_URS: {
  orders_aggregate: UrlsConstantItem;
  orders_list: UrlsConstantItem;
} = {
  orders_aggregate: {
    key: "rfq_aggregate",
    menuLabel: "Market RFQs Book",
    headerLabel: "Market RFQs Book",
    url: "/rfq/aggregate",
    availableForRoles: [
      UserRolesEnum.ADMIN,
      UserRolesEnum.OPERATIONS,
      UserRolesEnum.INDEMNITY_PROVIDER,
      UserRolesEnum.BORROWER,
      UserRolesEnum.LENDER,
    ],
  },
  orders_list: {
    key: "open_rfq",
    menuLabel: "RFQs",
    headerLabel: "RFQs",
    url: "/rfq/list",
    availableForRoles: [
      UserRolesEnum.ADMIN,
      UserRolesEnum.OPERATIONS,
      UserRolesEnum.BORROWER,
      UserRolesEnum.LENDER,
    ],
  },
};
