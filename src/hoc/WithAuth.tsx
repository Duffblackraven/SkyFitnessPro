import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const WithAuth = (Component:any) => {
  return function ComponentWithAuth(props:any) {
    const uid = cookies().get("uid")?.name;

    if (!uid) redirect("/signin");
    return <Component {...props} />;
  };
};

export default WithAuth;
