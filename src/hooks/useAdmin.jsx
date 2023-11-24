import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuthHook();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, refetch } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/admin/${user?.email}`);
      return data?.admin;
    },
  });
  return [isAdmin, refetch];
};

export default useAdmin;
