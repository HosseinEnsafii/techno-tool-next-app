import { Footer, Header, Menu } from "../components";
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
