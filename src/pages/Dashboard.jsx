import { AddProfileCard, BarChart, PieChart } from "../components";

export const Dashboard = () => {
  return (
    <section className="grid grid-cols-4 gap-6">
      <BarChart className="col-span-4"/>
      <PieChart className="col-span-2"/>
      <AddProfileCard className="col-span-2"/>
      <AddProfileCard className="col-span-2"/>
      <AddProfileCard className="col-span-2"/>
      <AddProfileCard className="col-span-2"/>
    </section>
  );
};
