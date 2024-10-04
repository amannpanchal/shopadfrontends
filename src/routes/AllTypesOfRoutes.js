import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Offers from "../pages/Offers/Offers";
import PendingOffer from "../pages/PendingOffer/PendingOffer";
import OffersApproved from "../pages/OffersApproved/OffersApproved";
import OfferRejected from "../pages/OfferRejected/OfferRejected";
import Jobs from "../pages/Jobs/Jobs";
import JobsPending from "../pages/JobsPending/JobsPending";
import JobsApproved from "../pages/JobsApproved/JobsApproved";
import JobsRejected from "../pages/JobsRejected/JobsRejected";
import Works from "../pages/Works/Works";
import WorksPending from "../pages/WorksPending/WorksPending";
import WorksApproved from "../pages/WorksApproved/WorksApproved";
import WorksRejected from "../pages/WorksRejected/WorksRejected";
import JobApplicants from "../pages/JobApplicants/JobApplicants";
import { Subscription } from "../pages/Subsciption/Subscription";
import Category from "../pages/Category/Category";
import Coupon from "../pages/Coupon/Coupon";
import AdvCoupon from "../pages/AdvCoupon/AdvCoupon";
import OfferPost from "../pages/OfferPost/OfferPost";
import RoleBasedAdmin from "../pages/RoleBasedAdmin/RoleBasedAdmin";
import Users from "../pages/Users/Users";
import Packages from "../pages/Packages/Packages";
import IndividualPackages from "../pages/IndividualPackeges/IndividualPackages";
import ViewSubCoupon from "../pages/ViewSubCoupon/ViewSubCoupon";
import JobAndOfferExtend from "../pages/JobAndOfferExtend/JobAndOfferExtend";
import Login from "../pages/Login/Login";
import Reports from "../pages/Reports/Reports";
import Notification from "../pages/Notification/Notification";
const AllTypesOfRoutes = () => {

  const [admin, setAdmin] = useState("")



useEffect(() => {
  const adminData = localStorage.getItem("admindata");

  try {
    const parsedData = JSON.parse(adminData);
    if (parsedData && typeof parsedData === "object") {
      setAdmin(parsedData);
    } else {
      console.error("Invalid admin data structure");
      localStorage.removeItem("admindata");
    }
  } catch (error) {
    console.error("Error parsing admin data:", error);
    localStorage.removeItem("admindata");
  }
}, []);


    return (
      <div>
        <Routes>
        
            <Route
              path="*"
              element={<PrivateRoute element={<Packages />} />}
            />
          
          {admin?.Offer && (
            <Route
              path="/offers"
              element={<PrivateRoute element={<Offers />} />}
            />
          )}
          {admin?.pendingOffer && (
            <Route
              path="/offersPending"
              element={<PrivateRoute element={<PendingOffer />} />}
            />
          )}
          {admin?.ApprovedOffer && (
            <Route
              path="/offersApproved"
              element={<PrivateRoute element={<OffersApproved />} />}
            />
          )}
          {admin?.rejectedOffer && (
            <Route
              path="/offersRejected"
              element={<PrivateRoute element={<OfferRejected />} />}
            />
          )}
          {admin?.job && (
            <Route path="/jobs" element={<PrivateRoute element={<Jobs />} />} />
          )}
          {admin?.pendingjob && (
            <Route
              path="/jobsPending"
              element={<PrivateRoute element={<JobsPending />} />}
            />
          )}
          {admin?.Approvedjob && (
            <Route
              path="/jobsApproved"
              element={<PrivateRoute element={<JobsApproved />} />}
            />
          )}
          {admin?.rejectedjob && (
            <Route
              path="/jobsRejected"
              element={<PrivateRoute element={<JobsRejected />} />}
            />
          )}

          {admin?.Works && (
            <Route
              path="/works"
              element={<PrivateRoute element={<Works />} />}
            />
          )}

          {admin?.pendingWorks && (
            <Route
              path="/worksPending"
              element={<PrivateRoute element={<WorksPending />} />}
            />
          )}
          {admin?.ApprovedWorks && (
            <Route
              path="/worksApproved"
              element={<PrivateRoute element={<WorksApproved />} />}
            />
          )}

          {admin?.rejectedWorks && (
            <Route
              path="/worksRejected"
              element={<PrivateRoute element={<WorksRejected />} />}
            />
          )}


          {admin?.job && (
            <Route
              path="/jobApplicants/:id"
              element={<PrivateRoute element={<JobApplicants />} />}
            />
          )}

          {/* <Route
            path="/subscription"
            element={<PrivateRoute element={<Subscription />} />}
          /> */}

          {admin?.Category && (
            <Route
              path="/category"
              element={<PrivateRoute element={<Category />} />}
            />
          )}
          {admin?.Coupon && (
            <Route
              path="/coupon"
              element={<PrivateRoute element={<Coupon />} />}
            />
          )}

          {admin?.Adv_code && (
            <Route
              path="/advcoupan"
              element={<PrivateRoute element={<AdvCoupon />} />}
            />
          )}
          {/* <Route
            path="/offerPost"
            element={<PrivateRoute element={<OfferPost />} />}
          /> */}

          {admin?.role === "superadmin" && (
            <Route
              path="/roleBaseAdmin"
              element={<PrivateRoute element={<RoleBasedAdmin />} />}
            />
          )}
          {admin?.User && (
            <Route
              path="/users"
              element={<PrivateRoute element={<Users />} />}
            />
          )}
          {admin?.Report && (
            <Route
              path="/reports"
              element={<PrivateRoute element={<Reports />} />}
            />
          )}
       
          <Route
            path="/packages"
            element={<PrivateRoute element={<Packages />} />}
          />
          <Route
            path="/individualPackages"
            element={<PrivateRoute element={<IndividualPackages />} />}
          />
          <Route
            path="/viewSubCoupon/:id"
            element={<PrivateRoute element={<ViewSubCoupon />} />}
          />
          <Route
            path="/jobApplication/:id"
            element={<PrivateRoute element={<JobApplicants />} />}
          />
          <Route
            path="/jobAndOfferExtend"
            element={<PrivateRoute element={<JobAndOfferExtend />} />}
          />
          <Route
            path="/notification"
            element={<PrivateRoute element={<Notification />} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
};

export default AllTypesOfRoutes;
