import {
  HomeOutlined,
  TagOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  FundProjectionScreenOutlined,
  ProjectOutlined,
  FileTextOutlined,
  ToolOutlined,
  ShoppingCartOutlined,
  TagFilled,
  BarChartOutlined,
  UserOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";


export const getSideBarData = (admin) => {
  return [
    admin?.role === "superadmin" && {
      id: "1",
      path: "/roleBasedAdmin",
      name: "Admin",
      icon: <HomeOutlined />,
    },
    admin?.Offer && {
      id: "2",
      path: "/offers",
      name: "All Offers",
      icon: <TagOutlined />,
    },
    admin?.pendingOffer && {
      id: "3",
      path: "/offersPending",
      name: "Pending Offers",
      icon: <ClockCircleOutlined />,
    },
    // admin?.job && {
    //   id: "4",
    //   path: "/jobAndOfferExtend",
    //   name: "Job and Offer Extend",
    //   icon: <CalendarOutlined />,
    // },
    admin?.ApprovedOffer && {
      id: "5",
      path: "/offersApproved",
      name: "Approve Offers",
      icon: <CheckCircleOutlined />,
    },
    admin?.rejectedOffer && {
      id: "6",
      path: "/offersRejected",
      name: "Rejected Offers",
      icon: <CloseCircleOutlined />,
    },
    admin?.job && {
      id: "7",
      path: "/jobs",
      name: "All Jobs",
      icon: <FundProjectionScreenOutlined />,
    },
    admin?.pendingjob && {
      id: "8",
      path: "/jobsPending",
      name: "Pending Jobs",
      icon: <ProjectOutlined />,
    },
    admin?.Approvedjob && {
      id: "9",
      path: "/jobsApproved",
      name: "Approved Jobs",
      icon: <FileTextOutlined />,
    },
    admin?.rejectedjob && {
      id: "10",
      path: "/jobsRejected",
      name: "Rejected Jobs",
      icon: <ToolOutlined />,
    },
    admin?.Works && {
      id: "11",
      path: "/works",
      name: "All Works",
      icon: <HeatMapOutlined />,
    },
    admin?.pendingWorks && {
      id: "12",
      path: "/worksPending",
      name: "Pending Works",
      icon: <ShoppingCartOutlined />,
    },
    admin?.ApprovedWorks && {
      id: "13",
      path: "/worksApproved",
      name: "Approved Works",
      icon: <TagFilled />,
    },
    admin?.rejectedWorks && {
      id: "14",
      path: "/worksRejected",
      name: "Rejected Works",
      icon: <BarChartOutlined />,
    },
   {
      id: "15",
      path: "/packages",
      name: "Packages",
      icon: <UserOutlined />,
    },
   {
      id: "16",
      path: "/individualPackages",
      name: "Individual Packages",
      icon: <HomeOutlined />,
    },
    admin?.Category && {
      id: "17",
      path: "/category",
      name: "Category",
      icon: <TagOutlined />,
    },
    {
      id: "18",
      path: "/coupon",
      name: "Coupon",
      icon: <ClockCircleOutlined />,
    },
    admin?.Adv_code && {
      id: "19",
      path: "/advcoupan",
      name: "AdvCoupon",
      icon: <CalendarOutlined />,
    },
    admin?.Report && {
      id: "20",
      path: "/reports",
      name: "Reports",
      icon: <CheckCircleOutlined />,
    },
    admin?.User && {
      id: "21",
      path: "/users",
      name: "User",
      icon: <UserOutlined />,
    },
  ].filter(Boolean); // Remove null or undefined items
};
