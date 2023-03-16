import Link from "next/link";

export default function IndexPage({ books }) {
  //베스트셀러 전체 리스트
  // console.log(books);
  return (
    <div>
      <h2>THE NEW YORK TIMES BEST SELLER EXPLORER</h2>
      {books.map(book => (
        <div key={book.list_name}>
          <Link href={`/list/${book.list_name}`}>
            {book.display_name} &rarr;
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { results: books } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
  ).json();

  return {
    props: { books },
  };
}
