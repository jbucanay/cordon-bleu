import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripe = props => {
  const publishableKey = "pk_test_CFBk0wKAg5NfvQdakXsQYcEm00MPFstx6q";

  const onToken = token => {
    const body = {
      amount: 999,
      token: token
    };
<<<<<<< HEAD

=======
>>>>>>> master
    axios
      .post("/stripe/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
<<<<<<< HEAD

  // function derek() {
  //   console.log("NODEMAILER!");
  // }

  return (
    <StripeCheckout
      onClick={console.log("HELLO!!!")}
      label="cordon bleu" //Component button text
      name="second one" //Modal Header
      description="third one"
      panelLabel="button" //Submit button in modal
=======
  return (
    <StripeCheckout
      label="Checkout" //Component button text
      name="Cordon Bleu" //Modal Header
      description=""
      panelLabel="Place Order" //Submit button in modal
>>>>>>> master
      amount={props.amount * 100} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      // image="" //Pop-in header image
      billingAddress={false}
    />
  );
};

export default stripe;
