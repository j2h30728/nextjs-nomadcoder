import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const { pathname } = useRouter();
  return (
    <>
      <div>
        <nav className="border">
          <Link href="/" legacyBehavior>
            <a className={pathname === "/" ? "active" : null}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={pathname === "/about" ? "active" : null}>About</a>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        div {
          width: 100%;
        }
        nav {
          position: fixed;
          top: 0;
          border: 2px solid;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 70px;
          padding: 0 30px;
          background-color: white;
          z-index: 10;
          font-size: 30px;
        }
        .active {
          border-bottom: 2px solid #3d3d3d;
          border-bottom-right-radius: 225px 15px;
        }
      `}</style>
    </>
  );
}
