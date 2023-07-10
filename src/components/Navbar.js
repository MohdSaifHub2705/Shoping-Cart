import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import {getCartTotal} from "../features/cartSlice";

export default function App() {

   const {cart , totalQuantity} = useSelector((state) => state.allCart);

   const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getCartTotal());
   },[cart]);

  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>

         <MDBNavbarBrand>Shopping Cart</MDBNavbarBrand>
         <span>
          <Link to="/"> All Products</Link>
         </span>
         <MDBBtn color="dark">
           <Link to="/cart">Cart{totalQuantity}</Link> 
         </MDBBtn>
     
           
      </MDBContainer>
    </MDBNavbar>
  );
}