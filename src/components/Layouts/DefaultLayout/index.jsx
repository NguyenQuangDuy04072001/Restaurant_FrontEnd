import Header from "../Header";

function DefaultLayout({ children }) {
  return (
    <div className="App">
      <Header />
      <div className="main">{children}</div>
    </div>
  );
}

export default DefaultLayout;
