import axiosInstance from "../../config/axiosInstance";
import { onLoadFailure, onLoadRequest, onLoadSuccess } from "../reducers/MainReducer";




export const getOffers = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/salesoffer/alloffer`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const updateAdmin = async (adminId, values) => {
  try {
    const { data } = await axiosInstance.put(`/admin/Updateadmin/${adminId}`, {
      ...values, 
    });

    return data;
  } catch (error) {
    console.log("The error is:", error);
  }
};



export const extendOfferDate = (offerId, newDate) => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.put(`/salesoffer/extend/${offerId}`, {
      newDate,
    });
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};


export const getPendingOffers = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/salesoffer/pending`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};


export const getApprovedOffers = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/salesoffer/approved`);
    dispatch(onLoadSuccess(data.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const getRejectedOffers = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/salesoffer/rejected`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const deleteOffers = async (offerId) =>  {
  try {
  
   
    const { data } = await axiosInstance.post(`/salesoffer/deletebyadmin/`, {
      id :offerId
    });
    return data;
 
  } catch (error) {
    console.log('the error is', error)
  }
};

export const updateOffer = async (offerId, offerData) => {
  try {
 
    const { data } = await axiosInstance.put(
      `/salesoffer/update/${offerId}`,
      offerData
    );
    return data;
 
  } catch (error) {
    console.log('the error is', error)
  }
};

export const getJobs = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/job`);
    console.log(data,'dat is ')
    dispatch(onLoadSuccess(data.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};
export const updateJob = async (jobId,values) =>{
  try {
  
    
    const { data } = await axiosInstance.post(`/job/update/${jobId}`, {
      values
      
    });
    return data;
   
   
  } catch (error) {
    console.log("the error is", error);
  }
};

export const getJobApplication = (jobId) => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(
      `jobapply/Allapplication/${jobId}`
    );
   
    dispatch(onLoadSuccess(data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const getPendingJobs = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/job/getpending`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const getApprovedJobs = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/job/getapprove`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const getRejectedJobs = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/job/getrejected`);
    dispatch(onLoadSuccess(data.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const deleteJob =async  (jobId) => {
  try {
    
    const { data } = await axiosInstance.post(`/job/deletebyadmin`, {
      id: jobId,
    });
    return data;
  } catch (error) {
    console.log("the error is", error);
  }
};

// Work-related actions
export const getWorks = () => async (dispatch) => {
  try {
    
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/work?searchString= ""`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const getPendingWorks = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/work/pending`);
    dispatch(onLoadSuccess(data.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const getApprovedWorks = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/work/approved`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const getRejectedWorks = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/work/rejected`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const deleteWork =async  (workId) => {
  try {
    const deleteWork = await axiosInstance.post(
      `/work/deletebyadmin
`,
      {
        id: workId,
      }
    );
    
    return deleteWork.data
    
  
  } catch (error) {
    console.log(error,'the error in work deletion.')
  
  }
};
export const updateWork = async (workId, values) => {
  try {

    const updateWork = await axiosInstance.post(`/work/update/${workId}`, {
      values
    });
    
    
  } catch (e) {
    console.log(e, "error in update work");
    return e.message;
  }
};

// User-related actions
export const getUsers = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/user`);
    dispatch(onLoadSuccess(data.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const getAdmins = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`admin/GetAlladmin`);
    dispatch(onLoadSuccess(data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const createAdmin =async  (adminData)  => {
  try {
    
    const { data } = await axiosInstance.post(
      `/admin/Creteadmin
`,
      adminData
    );
    return data;
    
  } catch (error) {
  }
};

export const deleteAdmin = async  (adminId)  => {
  try {
  
    const { data } = await axiosInstance.delete(`/users/admin/${adminId}`);
    return data;
  
  } catch (error) {
    
  }
};

// Category-related actions
export const getCategory = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/category`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const postCategory = async (categoryData) =>{
  try {

    const { data } = await axiosInstance.post(`/category`, {
      categoryName : categoryData
    });
    return data;
    
  } catch (error) {
    console.log("the error is ", error);
  }
};

export const deleteCategory =async  (categoryId) => {
  try {
   
    const { data } = await axiosInstance.post(`/category/delete`, {
      id: categoryId,
    });
    return data;

  } catch (error) {
   console.log(error, 'the error is')
  }
};

// Subscription-related actions
export const getSubscriptions = () => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.get(`/subscriptions/all`);
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const postSubscription = (subscriptionData) => async (dispatch) => {
  try {
    dispatch(onLoadRequest());
    const { data } = await axiosInstance.post(
      `/subscriptions/create`,
      subscriptionData
    );
    dispatch(onLoadSuccess(data?.data));
  } catch (error) {
    dispatch(onLoadFailure(error.message));
  }
};

export const deleteSubscription = async  (subscriptionId) =>  {
  try {

  const { data } = await axiosInstance.delete(
    `/subscriptions/${subscriptionId}`
  );
    return data;
  } catch (error) {
    console.log("the error is", error);
  }
};

export const createPackage = (packageData) => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.post(`/packages/create`, packageData);
        dispatch(onLoadSuccess(data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};

export const getPackages = () => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.get(`/Package/Allpackages`);
        dispatch(onLoadSuccess(data?.data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};

export const deletePackage =async  (packageId) => {
    try {
      const { data } = await axiosInstance.delete(`/packages/${packageId}`);
      return data;
       
    } catch (error) {
      console.log("the error is", error);
    }
};

export const updatePackage = (packageId, packageData) => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.put(`/packages/update/${packageId}`, packageData);
        dispatch(onLoadSuccess(data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};


export const getCoupans = () => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.get(`/coupon`);
        dispatch(onLoadSuccess(data.data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};

export const postCoupan = (coupanData) => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.post(`/coupans/create`, coupanData);
        dispatch(onLoadSuccess(data?.data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};

export const deleteCoupan = async  (coupanId) => {
    try {
       
        await axiosInstance.delete(`/coupans/${coupanId}`);
     
    } catch (error) {
      console.log("the erorr is ", error);
    }
};

export const postAdvCoupan = (advCoupanData) => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.post(`/advCoupans/create`, advCoupanData);
        dispatch(onLoadSuccess(data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};

export const getAdvCoupans = () => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.get(`/adv-coupon`);
        dispatch(onLoadSuccess(data.data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};

export const deleteAdvCoupan = async (advCoupanId) => {
  try {
   
    const { data } = await axiosInstance.delete(`/advCoupans/${advCoupanId}`);
    return data;
  } catch (error) {
   console.log('the error is',error)
  }
};

export const postAdvSubCoupan = (advSubCoupanData) => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.post(`/advSubCoupans/create`, advSubCoupanData);
        dispatch(onLoadSuccess(data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};

export const deleteAdvSubCoupan =async  (advSubCoupanId) => {
    try {
  
     const { data } = await axiosInstance.delete(
       `/advSubCoupans/${advSubCoupanId}`
      );
      return data;
       
    } catch (error) {
    console.log("the error is", error);
    }
};

export const getIndividualPackage = (packageId) => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.get(`/Package/AllIndividualPackages
`);
        dispatch(onLoadSuccess(data.data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};

export const deleteIndividualPackage = async (packageId) =>  {
    try {
        
       const { data } = await axiosInstance.delete(
         `/individualPackage/${packageId}`
       );
      return data;
    } catch (error) {
        console.log("the error is", error);
    }
};

export const createIndividualPackage = (packageData) => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.post(`/individualPackage/create`, packageData);
        dispatch(onLoadSuccess(data?.data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};

export const updateIndividualPackage = async  (packageId, packageData) => {
    try {
        
        const { data } = await axiosInstance.put(
          `/Package/UpdateIndividualPackage/${packageId}`,
          packageData
      );
   
      return data;
     
    } catch (error) {
      console.log("The error in individual package editing is", error);
        
    }
};

export const getJobApplicants = (jobId) => async (dispatch) => {
    try {
        dispatch(onLoadRequest());
        const { data } = await axiosInstance.get(`/jobs/applicants/${jobId}`);
        dispatch(onLoadSuccess(data?.data));
    } catch (error) {
        dispatch(onLoadFailure(error.message));
    }
};
