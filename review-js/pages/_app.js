import Layout from "@/components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: beige;
        }
      `}</style>
    </Layout>
  );
}
