import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();

  const handleErrorPage = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      handleErrorPage();
    }, 5000);
  }, []);
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <h1>404</h1>
        </div>
        <h2>We are sorry Page not found!!</h2>
        <p>
          The page you are looking for might have been removed or ha its name
          changed or is temporarily unavailable
        </p>
        <Link href="/">Back to home</Link>
      </div>
    </>
  );
};

export default Error;
