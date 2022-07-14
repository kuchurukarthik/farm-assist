import MinimumSupportPrice from './components/screens/MinimumSupportPrice'
import ViewAllFarmers from './components/screens/ViewAllFarmers'
import ViewAllTraders from './components/screens/ViewAllTraders'
import ViewAllYields from './components/screens/ViewAllYields'
import ViewPreviousTransactions from './components/screens/ViewPreviousTransactions'
import ViewYields from './components/screens/ViewYields'
import ReviewOpenQuotes from './components/screens/ReviewOpenQuotes'
import VerifyTraders from './components/screens/VerifyTraders'

export const roles = ["Admin", "Farmer", "Trader"];
export const URLS = {
  base: "http://localhost:8080",
  admin: "/admin",
  farmer: "/farmers",
  trader: "/traders",
  yield:"/yield",
  users: "/all",
  user: "?email=",
};

export const RETAILER_SEED = 100000;
export const PRODUCT_SEED = 200000;
export const FARMER_SEED = 300000;

export const RESPONSE_CODES = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  UNAUTHORIZED: 400,
};

export const AUTHENTICATED = "authenticated";
export const ROLE = "role";

export const userStructure = {
  email: "",
  name: "",
  role: "",
};
export const tabData = [
  {
    index: 0,
    label: "Minimum Support Price",
    roles: ["farmer", "trader", "admin"],
    component: <MinimumSupportPrice />,
  },
  {
    index: 1,
    label: "View All Farmers",
    roles: ["trader", "admin"],
    component: <ViewAllFarmers />,
  },
  {
    index: 2,
    label: "View All Traders",
    roles: ["admin", "farmer"],
    component: <ViewAllTraders />,
  },
  {
    index: 3,
    label: "View All Yields",
    roles: ["admin"],
    component: <ViewAllYields />,
  },
  {
    index: 4,
    label: "Previous Transactions",
    roles: ["farmer"],
    component: <ViewPreviousTransactions />,
  },
  {
    index: 5,
    label: "View Yields",
    roles: ["farmer", "trader"],
    component: <ViewYields />,
  },
  {
    index: 6,
    label: "Review Open Quotes",
    roles: ["farmer"],
    component: <ReviewOpenQuotes />,
  },
  {
    index: 7,
    label: "Verify Traders",
    roles: ["admin"],
    component: <VerifyTraders />,
  },
];
