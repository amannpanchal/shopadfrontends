import axiosInstance from "../config/axiosInstance";


export const authLogin = async (email, password) => {
    try {
        const { data } = await axiosInstance.post("admin/admin/login", {
          Email: email,
          password,
        });
      
        return data;
    } catch (e) {
        console.error(e);

    }
}
export const adminProfile  = async (email, password) => {
    try {
        const { data } = await axiosInstance.get("admin/myownprofile");



        return data?.admin;
      
    } catch (e) {
        console.error(e);

    }
}
