type Props = {
  children: React.ReactNode;
};
const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{ position: "relative", top: 130 + "px", marginTop: 200 + "px" }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
