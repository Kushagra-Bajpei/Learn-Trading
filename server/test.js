import http from "http";

const data = JSON.stringify({ amount: 500 }); // Rs 500

const options = {
    hostname: "localhost",
    port: 5000,
    path: "/api/payment/orders",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
    },
};

const req = http.request(options, (res) => {
    let responseBody = "";

    res.on("data", (chunk) => {
        responseBody += chunk;
    });

    res.on("end", () => {
        console.log("Status Code:", res.statusCode);
        console.log("Response Body:", responseBody);
    });
});

req.on("error", (error) => {
    console.error("Error calling API:", error);
});

req.write(data);
req.end();
