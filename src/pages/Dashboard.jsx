import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import { getProfiles } from "../api/Profile";
import { AddProfileCard, BarChart, PieChart, ProfileCard } from "../components";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, isError] = useState(null);

  const fetchDocs = async () => {
    try {
      const res = await getProfiles(user.uid);
      setProfiles(res);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  return (
    <section className="grid grid-cols-4 grid-row-flow gap-6">
      <BarChart className="col-span-4" />
      <PieChart className="col-span-2" />
      {profiles?.map((profile) => (
        <ProfileCard {...profile} className="col-span-2" />
      ))}
      <AddProfileCard className="col-span-2" />
    </section>
  );
};
