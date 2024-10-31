import LoginForm from "./app/login/LoginForm";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="background">
      <h1>Bienvenido a (inserte nombre de la página)</h1>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
