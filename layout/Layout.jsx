import { Footer, Header, Menu } from "../components/layout";
import Container from "./Container";

function Layout({ children }) {
  return (
    <div className="min-h-screen dark:bg-gray-800">
      <Header />
      <Menu />
      <Container>
        <main> {children}</main>
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
