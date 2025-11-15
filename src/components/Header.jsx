import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Header() {

  return (
    <>

      <header className="w-full h-auto bg-blue-600 flex justify-between border-2 border bg-amber-700">

        <div className="w-1/5 border-2 border-amber-400 text-[#ffffff] text-[20px] ml-10">
          Shahzaib's Collection</div>
        <nav className="w-1/2 border-2 border-amber-400">
          <ul className="h-auto w-full flex justify-evenly">
            <li className="text-[20px] text-[#ffffff]">Home</li>
            <li className="text-[20px] text-[#ffffff]">Shop</li>
            <li className="text-[20px] text-[#ffffff]">Category</li>
            <li className="text-[20px] text-[#ffffff]">Cart</li>
            <li className="text-[20px] text-[#ffffff]">Contact</li>
          </ul></nav><nav />
        <div className="w-1/5 border-4 border-amber-400 flex justify-end items-center mr-10" >
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </header>

    </>
  );

}