import React, { useEffect, useRef, useState } from 'react';
import {
  // useLazyGetProductQuery,
  // useLazySearchProductQuery,
  useLazyGetOrSearchProductQuery,
} from '../redux/slice/ProductSliceApi';
// import { useGetProductQuery } from '../redux/slice/ProductSliceApi';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faStar,
  faStarAndCrescent,
  faStarOfLife,
} from '@fortawesome/free-solid-svg-icons';
function ProductPage() {
  // const [trigger, { data, error, isLoading }] = useLazyGetProductQuery();
  const [trigger, { data, isLoading, error }] =
    useLazyGetOrSearchProductQuery();
  // const { data, error, isLoading } = useGetProductQuery();
  console.log(data, 'data');
  const [displayCount, setDisplayCount] = useState(9);
  const itemsPerLoad = 6;
  const timerRef = useRef(null);
  const loadMore = () => {
    setDisplayCount((prev) =>
      Math.min(prev + itemsPerLoad, data?.products.length)
    );
  };

  const displayedProducts = data?.products.slice(0, displayCount);
  const hasMore = displayCount < data?.products.length;
  useEffect(() => {
    if (!data) {
      trigger('');
    }
  }, [data, trigger]);
  const findProduct = (e) => {
    console.log(e.target.value, 'findProduct');
    trigger(e.target.value);
  };

  const doSomeMagic = (func, delay) => {
    return function (event) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        func(event);
      }, delay);
    };
  };
  const debounce = doSomeMagic(findProduct, 1000);

  if (!data) {
    return <h1>Loading....</h1>;
  }
  // return (
  //   <div style={styles.container} className="wrapper product-page ">
  //     <style>{cssStyles}</style>
  //     <div style={styles.maxWidth} className="product-page-wrapper ">
  //       <div style={styles.header} className="product-page-heading">
  //         <h1 style={styles.title}>Our Products</h1>
  //         <p style={styles.subtitle}>
  //           Discover amazing products at great prices
  //         </p>
  //       </div>
  //       <div style={styles.header} className="product-search">
  //         <h4>Search Product Here</h4>
  //         <input onKeyUp={debounce} />
  //       </div>

  //       <div className="product-table product-wrapper">
  //         {displayedProducts.map((product) => (
  //           <div key={product.id} className="product-card">
  //             <div style={styles.imageContainer}>
  //               <img style={styles.imageContainer} src={product.images[0]} />
  //             </div>

  //             <div style={styles.cardContent}>
  //               <div style={styles.cardHeader}>
  //                 <span style={styles.categoryBadge}>{product.category}</span>
  //                 <div style={styles.rating}>
  //                   <FontAwesomeIcon icon={faStar} color="#FFD700" />
  //                   <span style={styles.ratingText}>{product.rating}</span>
  //                 </div>
  //               </div>

  //               <h3 style={styles.productName}>{product.title}</h3>

  //               <div style={styles.cardFooter}>
  //                 <span style={styles.price}>${product.price}</span>
  //                 <button className="add-button">
  //                   {' '}
  //                   <FontAwesomeIcon icon={faShoppingCart} />
  //                   Add
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       {hasMore && (
  //         <div style={styles.loadMoreContainer}>
  //           <button onClick={loadMore} className="load-more-button">
  //             Load More Products ({data.products.length - displayCount}{' '}
  //             remaining)
  //           </button>
  //         </div>
  //       )}

  //       {!hasMore && (
  //         <div style={styles.loadMoreContainer}>
  //           <p style={styles.allViewedText}>You've viewed all products!</p>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    // <div className="wrapper-product-page  product-page ">
    //   {/* <style>{cssStyles}</style> */}
    //   <div className="product-page-wrapper max-width">
    //     {/* Heading Section */}
    //     <div className="product-page-heading header">
    //       <h1 className="title">Our Products</h1>
    //       <p className="subtitle">Discover amazing products at great prices</p>
    //     </div>

    //     {/* Search Section */}
    //     <div className="product-search header">
    //       <h4>Search Product Here</h4>
    //       <input onKeyUp={debounce} className="search-input" />
    //     </div>

    //     {/* Products Grid */}
    //     <div className="product-table product-wrapper">
    //       {displayedProducts.map((product) => (
    //         <div key={product.id} className="product-card">
    //           <div className="image-container product-image-wrapper">
    //             <img
    //               src={product.images[0]}
    //               alt={product.title}
    //               className="product-image"
    //             />
    //           </div>
    //           <div className="card-content">
    //             <div className="card-header">
    //               <span className="category-badge">{product.category}</span>
    //               <div className="rating">
    //                 <FontAwesomeIcon icon={faStar} color="#FFD700" />
    //                 <span className="rating-text">{product.rating}</span>
    //               </div>
    //             </div>
    //             <h3 className="product-name">{product.title}</h3>
    //             <div className="card-footer">
    //               <span className="price">${product.price}</span>
    //               <button className="add-button">
    //                 <FontAwesomeIcon icon={faShoppingCart} />
    //                 Add
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Load More / End Message */}
    //     {hasMore ? (
    //       <div className="load-more-container">
    //         <button onClick={loadMore} className="load-more-button">
    //           Load More Products ({data.products.length - displayCount}{' '}
    //           remaining)
    //         </button>
    //       </div>
    //     ) : (
    //       <div className="load-more-container">
    //         <p className="all-viewed-text">You've viewed all products!</p>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="product-page">
      {/* <style>{cssStyles}</style> */}
      <div className="product-page-wrapper">
        {/* Heading Section */}
        <div className="product-page-heading header">
          <h1 className="title">Our Products</h1>
          <p className="subtitle">Discover amazing products at great prices</p>
        </div>

        {/* Search Section */}
        <div className="product-search header">
          <h4>Search Product Here</h4>
          <input onKeyUp={debounce} className="search-input" />
        </div>

        {/* Products Grid */}
        <div className=" product-wrapper">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <span className="category-badge">{product.category}</span>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} color="#FFD700" />
                    <span className="rating-text">{product.rating}</span>
                  </div>
                </div>
                <h3 className="product-name">{product.title}</h3>
                <div className="card-footer">
                  <span className="price">${product.price}</span>
                  <button className="second-btn">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / End Message */}
        {hasMore ? (
          <div className="  flex-center ">
            <button onClick={loadMore} className=" btn">
              Load More Products ({data.products.length - displayCount}{' '}
              remaining)
            </button>
          </div>
        ) : (
          <div className="flex-center">
            <p className="all-viewed-text">You've viewed all products!</p>
          </div>
        )}
        {/* <div className="dummy-box"></div> */}
      </div>
    </div>
  );
}

// const styles = {
//   maxWidth: {
//     maxWidth: '80rem',
//     width: '100%',
//     margin: '0 auto',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '3rem',
//   },
//   title: {
//     fontSize: '2.25rem',
//     fontWeight: 'bold',
//     color: '#1f2937',
//     marginBottom: '0.5rem',
//   },
//   subtitle: {
//     color: '#4b5563',
//   },

//   imageContainer: {
//     background: 'linear-gradient(to bottom right, #c7d2fe, #ddd6fe)',
//     height: '12rem',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '4.5rem',
//   },
//   cardContent: {
//     padding: '1.5rem',
//   },
//   cardHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: '0.5rem',
//   },
//   categoryBadge: {
//     fontSize: '0.75rem',
//     fontWeight: '600',
//     color: '#4f46e5',
//     backgroundColor: '#e0e7ff',
//     padding: '0.25rem 0.75rem',
//     borderRadius: '9999px',
//   },
//   rating: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.25rem',
//   },
//   ratingText: {
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     color: '#374151',
//   },
//   productName: {
//     fontSize: '1.25rem',
//     fontWeight: 'bold',
//     color: '#1f2937',
//     marginBottom: '0.5rem',
//   },
//   cardFooter: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: '1rem',
//   },
//   price: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     color: '#4f46e5',
//   },
//   loadMoreContainer: {
//     textAlign: 'center',
//   },
//   allViewedText: {
//     color: '#4b5563',
//     fontWeight: '500',
//   },
// };

// const cssStyles = `
//   .product-card {
//     background: white;
//     border-radius: 0.75rem;
//     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//     overflow: hidden;
//     transition: all 0.3s ease;
//   }
//   .wrapper {
//     min-height: 100vh;
//     background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
//     padding: 2rem;
//   }
//    .product-table {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 1.5rem;
//   margin-bottom: 2rem;
// }

//   .product-card:hover {
//     box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//     transform: translateY(-0.25rem);
//   }

//   .add-button {
//     background-color: #4f46e5;
//     color: white;
//     padding: 0.5rem 1rem;
//     border-radius: 0.5rem;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     transition: background-color 0.2s;
//     font-size: 1rem;
//   }

//   .add-button:hover {
//     background-color: #4338ca;
//   }

//   .load-more-button {
//     background-color: #4f46e5;
//     color: white;
//     font-weight: 600;
//     padding: 0.75rem 2rem;
//     border-radius: 0.5rem;
//     border: none;
//     cursor: pointer;
//     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//     transition: all 0.2s;
//   }

//   .load-more-button:hover {
//     background-color: #4338ca;
//     box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
//     transform: scale(1.05);
//   }

//   /* Media query for screens less than 500px wide */
//   @media(max-width: 500px) {
//     /* Adjust grid layout to single column */
//     div[style*='grid']:not(.some-specific-class) {
//       display: block;
//     }

//     /* Make images and containers more adaptive */
//     .image-container {
//       height: auto;
//       padding: 1rem;
//     }
// .wrapper {

//     padding: 0.5rem;
//   }
//    .product-table {

//   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

// }
//     /* Optional: Adjust font sizes for smaller screens */
//     h1 {
//       font-size: 1.75rem;
//     }
//     h4 {
//       font-size: 1.25rem;
//     }
//   }

// `;

export default ProductPage;
