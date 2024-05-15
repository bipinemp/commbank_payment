import Simplify from "simplify-commerce";

export function handlePayment(state: any, formData: FormData) {
  let client = Simplify.getClient({
    publicKey: "sbpb_YzM1ZGQ2ZjgtYzQ4NC00YjIyLWE4ZGEtOGMyM2NhOTdkZmQ4",
    privateKey:
      "n8W3caR7SQxToPuugVeBJgo5B6LKDPuu/K+jCdxAkKZ5YFFQL0ODSXAOkNtXTToq",
  });

  client.cardtoken.create(
    {
      amount: "123123",
      description: "payment description",
      card: {
        expMonth: "11",
        expYear: "99",
        cvc: "123",
        number: "5555555555554444",
      },
      currency: "USD",
    },
    function (errData, data) {
      if (errData) {
        console.error("Error Message: " + errData.data.error.message);
        // handle the error
        return;
      }
      console.log("Payment Status: " + data.paymentStatus);
    }
  );
}

//   const client = Simplify.getClient({
//     publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
//     privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY!,
//   });

//   const data = {
//     card: {
//       number: formData.get("ccnum"),
//       cvc: formData.get("cccvc"),
//       expMonth: formData.get("ccexpmonth"),
//       expYear: formData.get("ccexpyear"),
//     },
//   };

//   client.cardToken.create(data, function (errData, response) {
//     if (errData) {
//       console.error("Error Message: " + errData);
//       // handle the error
//       return;
//     }

//     console.log("Card Token: " + response);
//   });
