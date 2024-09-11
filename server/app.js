const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PHKebSD3jyR93386a4PUu2aWRqOPTT0m7YKnWh1QigHHU64wfmrGkOtSng7gwArFWmSFu5dQ4d3pqSvUXUAnfOm000D6YEVVI");

app.use(express.json());
app.use(cors());

// Checkout API
app.post("/api/create-checkout-session", async (req, res) => {
    try {
        const { products, customer } = req.body;

        if (!products || !products.length) {
            return res.status(400).json({ error: "No products provided" });
        }

        if (!customer || !customer.name || !customer.address) {
            return res.status(400).json({ error: "Customer name and address are required" });
        }

        const lineItems = products.map((product) => ({
            price_data: {
                currency: "INR",
                product_data: { name: product.dish },
                unit_amount: product.price * 100,
            },
            quantity: product.qnty,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
            billing_address_collection: 'required',
            shipping_address_collection: {
                allowed_countries: ['IN'],
            },
            customer: {
                name: customer.name,
                address: customer.address,
            }
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating Stripe session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(7000, () => {
    console.log("Server started on http://localhost:7000");
});
