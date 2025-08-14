import myAxios from "@/request.ts";

/**
 * 用户注册接口
 * @param param
 */

export const userRegister=async (param:any)=>{
    return  myAxios.request(
        {
            url:"/api/user/register",
            method:"POST",
            data:param
        }
    )
}
export const getCurrentUser=async ()=>{
    return  myAxios.request(
        {
            url:"/api/user/current",
            method:"GET",
        }
    )
}