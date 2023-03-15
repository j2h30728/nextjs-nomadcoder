import { useRouter } from "next/router";

export default function movieId() {
  const router = useRouter();
  console.log(router);
  return <>detail</>;
}
