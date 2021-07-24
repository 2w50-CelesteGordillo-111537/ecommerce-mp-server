const express = require("express");
const Order = require("./models/order");
const sendEmail = require("./utils/sendEmail");
const router = express.Router();

router.get("/orders/:idUser", async (req, res) => {
	const orders = await Order.find({ idUser: req.params.idUser });
	res.send(orders);
});

router.get("/orders", async (req, res) => {
	const orders = await Order.find();
	res.send(orders);
});

router.post("/orders", async (req, res) => {
	const email = await sendEmail();
	const order = await new Order({
        idPayment: req.body.idPayment,
        address: req.body.address,
        artwork: req.body.artwork,
        idUser: req.body.idUser,
        totalPayment: req.body.totalPayment,
	})
	await order.save();
	res.send(order);
})

module.exports = router