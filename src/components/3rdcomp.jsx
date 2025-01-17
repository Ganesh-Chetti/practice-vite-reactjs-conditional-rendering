var ar = [
    {
      "id": 1,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 2,
      "title": "Solid Gold Petite Micropave",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    }
  ];
  
  function Com3() {
    return (
      <>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {ar.map((val, ind) => {
              return (
                <tr key={ind}>
                  <td>{val["id"]}</td>
                  <td>{val["title"]}</td>
                  <td>{val["price"]}</td>
                  <td>{val["description"]}</td>
                  <td>{val["category"]}</td>
                  <td>
                    <img src={val["image"]} alt="img" width={100} />
                  </td>
                  <td>{val["rating"]["rate"]}</td>
                  <td>{val["rating"]["count"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  
  export default Com3;
  