import { useEffect } from "react";
import Table from "react-bootstrap/Table";

import { useNewsStore } from "../stores/new";

export default function News() {
  const { getNews, news, loading, errorMessage } = useNewsStore(
    (state) => state
  );
  useEffect(() => {
    getNews();
  }, [getNews]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {!loading &&
        news.length > 0 &&
        news.map((item) => (
          <Table striped bordered hover key={item.objectID}>
            <tbody>
              <tr>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.points}</td>
                <td>{item.num_comments}</td>
                <td>{item.created_at}</td>
              </tr>
            </tbody>
          </Table>
        ))}
    </>
  );
}
