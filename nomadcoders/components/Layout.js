import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="content">{children}</div>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Patrick Hand SC", cursive;
            color: #3d3d3d;
          }
          a {
            text-decoration: none;
            transition: all 0.5s ease;
          }
          a:active {
            color: silver;
          }
          .content {
            margin-top: 60px;
          }
          .container {
            width: 800px;
            margin: 0 auto;
            margin-top: -50px;
            padding: 80px 50px;
            box-shadow: 2px 8px 10px -3px hsla(0, 0%, 0%, 0.3);
          }
          @media (max-width: 840px) {
            .container {
              width: 80%;
            }
          }
          .title {
            font-size: 50px;
            margin-bottom: 30px;
          }
          .border {
            border-top-left-radius: 255px 15px;
            border-top-right-radius: 15px 225px;
            border-bottom-right-radius: 225px 15px;
            border-bottom-left-radius: 15px 255px;
          }
          .button {
            transition: all 0.5s ease;
            border: solid 2px #3d3d3d;
          }
          .button:hover {
            box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
            position: relative;
            top: 1px;
          }
          .button:active {
            color: silver;
            border: solid 2px #706fd3;
          }
        `}
      </style>
    </>
  );
}
