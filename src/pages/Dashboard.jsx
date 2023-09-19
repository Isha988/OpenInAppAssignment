import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import { getProfiles } from "../api/Profile";
import { collectionRef } from "../firebase/config";
import {
  AddProfileCard,
  BarChart,
  PieChart,
  ProfileCard,
  Toast,
} from "../components";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDocs = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await getProfiles(user.uid);
      setProfiles(res);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, [collectionRef("profiles")]);

  return (
    <>
      <section className="grid grid-cols-4 grid-row-flow gap-6">
        <BarChart className="col-span-4" />
        <PieChart className="col-span-2" />
        {profiles?.map((profile) => (
          <ProfileCard {...profile} className="col-span-2" />
        ))}
        <AddProfileCard className="col-span-2" />
      </section>
      {error && <Toast message={error} />}
    </>
  );
};
