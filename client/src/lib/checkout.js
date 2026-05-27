import { supabase } from './supabase';

export const initializeCheckout = async (user, amount = 500) => {
    if (!user) {
        alert("Please log in first to enroll!");
        return false;
    }

    try {
        // 1. Create order on the backend
        const res = await fetch("http://localhost:5000/api/payment/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
        });

        if (!res.ok) throw new Error("Failed to create order");
        const order = await res.json();

        // 2. Initialize Razorpay
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_Stzni0LAIupbmN",
            amount: order.amount,
            currency: "INR",
            name: "Trade with Bhardwaj",
            description: "Course Enrollment",
            order_id: order.id,
            handler: async function (response) {
                // 3. Verify Payment
                try {
                    const verifyRes = await fetch("http://localhost:5000/api/payment/verify", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        }),
                    });

                    if (!verifyRes.ok) throw new Error("Signature invalid");

                    const result = await verifyRes.json();

                    // 4. Save to Database
                    await supabase.from('enrollments').insert([{
                        user_email: user?.email,
                        payment_id: response.razorpay_payment_id,
                        status: "Completed"
                    }]);

                    alert("Payment Successful! Welcome to the course!");
                } catch (err) {
                    alert("Payment Verification Failed!");
                    console.error(err);
                }
            },
            prefill: {
                name: user?.user_metadata?.full_name || user?.email?.split('@')[0] || "Student",
                email: user?.email,
            },
            theme: { color: "#ff8c00" },
        };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", function (response) {
            alert("Payment Failed: " + response.error.description);
        });

        rzp.open();
    } catch (err) {
        console.error("Checkout Error: ", err);
        alert("Could not initialize payment gateway.");
    }
};
