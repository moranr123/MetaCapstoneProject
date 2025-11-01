import React from "react";
import recipes from "../recipe";
import Swal from "sweetalert2";



function Menu() {

    const handleOrder = (id) => {
        console.log(`Order placed for item with id: ${id}`);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, order it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Confirmed!",
      text: "Your order has been placed.",
      icon: "success"
    });
  }
});
    }

    return (
        <div className="menu-container">
           <div className="menu-header">
               <h2>This Week Specials!</h2>
               <button>Order Menu</button>
           </div>
              <div className="cards">
                {
                    recipes.map((recipe) => (
                        <div key={recipe.id} className="menu-items">
                            <img src={recipe.image} alt={recipe.title} />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>    

                        </div>
                    ))
                }
           </div>
        </div>
    );
}
export default Menu;