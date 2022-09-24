import { Footer, Header, Menu } from "../components/layout";
import Container from "./Container";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <Container>
        <main> {children}</main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
