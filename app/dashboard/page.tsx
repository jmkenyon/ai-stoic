import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "../components/EmptyState";

import { Journal } from "../components/Journal";

const Page = async () => {
  const currentUser = await getCurrentUser();


  if (!currentUser) {
    return <EmptyState title="You must log in to view the dashboard" />;
  }
  return (
    <Journal />
  );
};

export default Page;
