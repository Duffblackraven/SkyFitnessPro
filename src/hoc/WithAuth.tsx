import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const WithAuth = (Component) => {
  return function ComponentWithAuth(props) {
    const uid = cookies().get("uid")?.name;

    if (!uid) redirect("/signin");
    return <Component {...props} />;
  };
};

export default WithAuth;
