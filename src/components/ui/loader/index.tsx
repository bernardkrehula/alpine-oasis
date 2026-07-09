import "./index.css";

const Loader = ({ size }: { size: string }) => {
  return (
    <div className="loader-div">
      <span className={`loader loader-${size}`} />
    </div>
  );
};
export default Loader;
