// import React from "react";
// import "./Booking.css";
// import { Scrollbars } from "react-custom-scrollbars-2";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";

// const Booking = () => {
//   const [setlist, updateList] = useState([]);
//   // const [counter, setCounter] = useState(0);

//   const dishes = [
//     { id: 1, dish_name: "Dal Fry", price: 90, rating: 9, amount: 1 },
//     { id: 2, dish_name: "Chana Masala", price: 120, rating: 9.2, amount: 1 },
//     { id: 3, dish_name: "Mix veg", price: 100, rating: 9.5, amount: 1 },
//     { id: 4, dish_name: "Veg Handi", price: 300, rating: 8, amount: 1 },
//     { id: 5, dish_name: "Paneer Palak", price: 150, rating: 8.1, amount: 1 },
//     { id: 6, dish_name: "Butter Paneer", price: 160, rating: 7, amount: 1 },
//     { id: 7, dish_name: "Fry Papad", price: 50, rating: 8.5, amount: 1 },
//     { id: 8, dish_name: "Veg Soup", price: 100, rating: 9, amount: 1 },
//     { id: 9, dish_name: "Chapati", price: 12, rating: 6, amount: 1 },
//     { id: 10, dish_name: "Bhakri", price: 18, rating: 7.6, amount: 1 },
//     { id: 11, dish_name: "Plain Paratha", price: 20, rating: 9.2, amount: 1 },
//     { id: 12, dish_name: "Butter Paratha", price: 25, rating: 8.9, amount: 1 },
//     { id: 13, dish_name: "Pav Bhaji", price: 150, rating: 9, amount: 1 },
//     { id: 15, dish_name: "Butter PavBhaji", price: 200, rating: 9, amount: 1 },
//     { id: 14, dish_name: "Green Salad", price: 50, rating: 8, amount: 1 },
//     { id: 17, dish_name: "Veg Kheema", price: 230, rating: 9, amount: 1 },
//     {
//       id: 18,
//       dish_name: "Paneer Mushroom Masala",
//       price: 350,
//       rating: 8,
//       amount: 1,
//     },
//     { id: 19, dish_name: "Sada Rice", price: 150, rating: 9.1, amount: 1 },
//     { id: 20, dish_name: "Jeera Rice", price: 200, rating: 8.6, amount: 1 },
//     { id: 21, dish_name: "Veg Pulav", price: 220, rating: 7.2, amount: 1 },
//   ];

//   useEffect(() => {
//     updateList("dishes");
//   }, []);

//   // console.log(setlist);

//   // const decreament = () => {
//   //   if (counter > 0) {
//   //     setCounter(counter - 1);
//   //   }
//   // };
//   // const increament = () => {
//   //   if (counter < 10) {
//   //     setCounter(counter + 1);
//   //   } else {
//   //     alert("Limit Exceded");
//   //   }
//   // };
//   const changeHandler = () => {};

//   return (
//     <div className="booking_main">
//       <div className="booking_menu">
//         <Link to={"/"}>
//           <i className="fa-solid fa-arrow-left"></i>
//         </Link>
//         <h4>Select Your Menu</h4>
//       </div>
//       <hr />
//       <section className="menu_list_card">
//         <h3>Menu List</h3>
//         <p>
//           You Have Selected
//           <span>
//             <b> 4 </b>
//           </span>
//           Items
//         </p>
//         <div className="menu_card_list">
//           <Scrollbars>
//             {dishes.map((list, id) => {
//               return (
//                 <div key={list.id}>
//                   <div className="menu_container">
//                     <div className="menu_title">
//                       <h3 className="menu_name">{list.dish_name}</h3>
//                       <h4 className="menu_rating">rating : {list.rating} </h4>
//                     </div>

//                     <div className="menu_price">
//                       <h3 className="price">{list.price}</h3>
//                       <i className="fa-solid fa-indian-rupee-sign"></i>
//                     </div>

//                     <div className="checkbox">
//                       <input
//                         type="checkbox"
//                         name={list.id}
//                         checked={list.dishes}
//                         onChange={changeHandler}
//                       />
//                     </div>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//             {/* ------------------------------------------- */}
//             {/* <div className="menu_container">
//               <div className="menu_title">
//                 <h3 className="menu_name">Paneer Mushroom Masala</h3>
//                 <h4 className="menu_rating">rating : 8 </h4>
//               </div>

//               <div className="menu_inc_dec_quan">
//                 <i className="fa-solid fa-minus decreament"></i>
//                 <input className="menu_quantity" type="text" placeholder="1" />
//                 <i className="fa-solid fa-plus increament"></i>
//               </div>
//               <div className="menu_price">
//                 <h3 className="price">2000</h3>
//                 <i className="fa-solid fa-indian-rupee-sign"></i>
//               </div>
//             </div>
//             <hr /> */}
//           </Scrollbars>
//           {/* ------------------------------------------- */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Booking;
