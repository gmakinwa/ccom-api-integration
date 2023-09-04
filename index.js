import smalls from "./small.js";
let logInJSON = { lowLevel: false, userName: "Admin", secret: "CC0@admin" };

fetch("http://sap.nettpharmacy.com:9090/ccos/api/auth/admin", {
  method: "POST",
  body: JSON.stringify(logInJSON),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    console.log(json.session.sessionId);
    const authToken = json.session.sessionId;
    let index = 0;

    for (let i = 45001; i <= smalls.length; i++) {
      let newSmall = [{ ...smalls[i] }];
      newSmall.forEach((small) => {
        fetch("http://sap.nettpharmacy.com:9090/ccos/api/internal/users", {
          method: "POST",
          body: JSON.stringify(small),
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${authToken}`
            Cookie: `JSESSIONID=${authToken}`,
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            console.log(small.firstName + " " + small.lastName);
            console.log(index++);
          })
          .catch((error) => {
            console.error("error: ", error.message);
          });
      });
    }

    // smalls.forEach((small) => {
    //   fetch("http://sap.nettpharmacy.com:9090/ccos/api/internal/users", {
    //     method: "POST",
    //     body: JSON.stringify(small),
    //     headers: {
    //       "Content-Type": "application/json",
    //       // "Authorization": `Bearer ${authToken}`
    //       Cookie: `JSESSIONID=${authToken}`,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json))
    //     .catch((error) => {
    //       console.error("error: ", error.message);
    //     });
    // });

    // smalls.forEach((small) => {
    //   setInterval()
    //   fetch("http://sap.nettpharmacy.com:9090/ccos/api/internal/users", {
    //     method: "POST",
    //     body: JSON.stringify(small),
    //     headers: {
    //       "Content-Type": "application/json",
    //       Cookie: `JSESSIONID=${authToken}`,
    //       // Authorization: `Bearer ${authToken}`,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json))
    //     .catch((error) => {
    //       console.error("error: ", error.message);
    //     });

    // });
  });
console.log(smalls.length);
//   .then(
//     smalls.forEach((small) => {
//       fetch("http://sap.nettpharmacy.com:9090/ccos/api/internal/users", {
//         method: "POST",
//         body: JSON.stringify(small),
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json))
//         .catch((error) => {
//           console.error("error: ", error.message);
//         });
//     })
//   )
//   .then(console.log("bghgj"));

// const createLoyaltyCustomer = () => {
//   smalls.forEach((small) => {
//     fetch("http://sap.nettpharmacy.com:9090/ccos/api/internal/users", {
//       method: "POST",
//       body: JSON.stringify(small),
//       headers: {
//           "Content-Type": "application/json",
//         // "Authorization": `Bearer ${authToken}`
//           Cookie: `JSESSIONID=${authToken}`
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json))
//       .catch((error) => {
//         console.error("error: ", error.message);
//       });
//   });
// };
