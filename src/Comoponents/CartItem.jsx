import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  return (
    <div className="flex gap-x-4 py-2 lg:border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className="max-w-[80px]" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] hover:underline font-poppins text-[#1b1c41]">
              {title}
            </Link>

            {/* To delete a slected item */}
            <div 
            onClick={() => removeFromCart(id)} 
            className="text-xl cursor-pointer">
              <IoMdClose 
              className="text-gray-500 hover:text-red-500 transition" 
              />
            </div>
          </div>

          <div className="flex gap-x-2 h-[36px] text-sm">

          {/* decrease and increase amount of items in the cart */}
          <div 
          className="flex flex-1 max-w-[100px] items-center h-full border font-medium">

            {/* remove from cart */}
            <div onClick={() => decreaseAmount(id)} 
            className="flex-1 h-full flex justify-center items-center cursor-pointer">
            <IoMdRemove />
          </div>

          {/* amount currently available in the cart  */}
          <div
          className="flex-1 flex h-full justify-center items-center px-2">
            {amount}
            </div>

            {/* add more to cart */}
          <div 
          onClick={() => increaseAmount(id)} 
          className="flex-1 h-full flex justify-center items-center cursor-pointer">
            <IoMdAdd />
          </div>
          </div>

          {/* price per particular item */}
          <div className="flex-1 flex items-center justify-around">
            $ {price}
          </div>

          {/* total price per same item */}
          <div className="flex-1 flex justify-end items-center font-medium text-[#1b1c41]">
            {`$ ${parseFloat(price * amount).toFixed(2)}`}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
