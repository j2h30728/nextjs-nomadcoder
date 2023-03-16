import Link from "next/link";
import { useEffect, useState } from "react";

export default function bestsellers({ id, bookList }) {
  //베스트 셀러 각 카테고리 책의 리스트
  const { books } = bookList;
  return (
    <>
      <h2>{bookList.display_name} BOOKS</h2>
      <div>
        {books.map(book => (
          <div key={book.primary_isbn10}>
            <img src={book.book_image} />
            <p>{book.title}</p>
            <p>{book.author}</p>
            <Link href={book.amazon_product_url}>Buy now &rarr;</Link>
          </div>
        ))}
      </div>
    </>
  );
}
export async function getServerSideProps({ params: { id } }) {
  const { results: bookList } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
  ).json();

  return {
    props: {
      id,
      bookList,
    },
  };
}
