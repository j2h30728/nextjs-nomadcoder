import NavBar from "@/components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>헤더, 푸터를 넣는다면?</span>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
}
