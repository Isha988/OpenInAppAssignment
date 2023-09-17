import Button from "./components/Button";
import Link from "./components/Link";

const App = () => {
  return (
    <div className="m-8 bg-primary-50 grid gap-5 p-8">
      <Button text="Hello" onClick={() => {}} variant="outline" />
      <Button text="Hello" onClick={() => {}} variant="secondary" />
      <Button text="Hello" onClick={() => {}} />

      <Link text="Hello" />
      <Link text="Hello" variant="primary" />
    </div>
  );
};

export default App;
