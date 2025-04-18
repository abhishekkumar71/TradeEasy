require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const key = process.env.API_KEY;
const axios = require("axios");
const { HoldingModel } = require("./Models/HoldingModel");
const { PositionModel } = require("./Models/PositionModel");
const { OrderModel } = require("./Models/OrderModel");
const app = express();
const cookieParser = require("cookie-parser");
const { createSecretToken } = require("./SecretToken");
const bcrypt = require("bcryptjs");
const { UserModel } = require("./Models/UserModel");
const { userVerification } = require("./Middlewares/userVerification");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHoldings = new HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHoldings.save();
//   });
//   res.send("Done!");
// });
// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPositions = new PositionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPositions.save();
//   });
//   res.send("Done!!")
// });

app.get("/allHoldings", userVerification, async (req, res) => {
  const userId = req.user._id;
  // console.log(userId);
  const allHoldings = await HoldingModel.find({ userId });
  // console.log(allHoldings);
  res.json(allHoldings);
});

app.get("/allPositions", userVerification, async (req, res) => {
  const userId = req.user._id;
  let allPositions = await PositionModel.find({ userId });
  res.json(allPositions);
});
app.get("/allOrders", userVerification, async (req, res) => {
  const userId = req.user._id;

  let allOrders = await OrderModel.find({ userId });
  res.json(allOrders);
});
app.post("/newOrder", userVerification, async (req, res) => {
  const userId = req.user._id;
  console.log(userId);
  const { name, qty, price, mode } = req.body;

  try {
    let newOrder = new OrderModel({
      userId,
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();

    //TO CALCULATE AVG,NET AND DAY

    const { data } = await axios.get("https://finnhub.io/api/v1/quote", {
      params: {
        symbol: name,
        token: key,
      },
    });
    const currPrice = data.c;
    const prevClose = data.pc;
    const net = ((currPrice - price) * qty).toFixed(2);
    const day = ((currPrice - prevClose) * qty).toFixed(2);

    const existingHolding = await HoldingModel.findOne({
      userId,
      name,
    });
    const existingPosition = await PositionModel.findOne({ userId, name });
    console.log(existingHolding);
    console.log(existingPosition);

    //CALCULATING AVG
    if (mode === "BUY") {
      //UPDATNG HOLDINGS
      if (existingHolding) {
        const totalQty = existingHolding.qty + qty;
        const totalCost =
          existingHolding.qty * existingHolding.avg + qty * price;
        const newAvg = totalCost / totalQty;
        existingHolding.qty = totalQty;
        existingHolding.price = currPrice;
        existingHolding.avg = newAvg;
        existingHolding.net = ((currPrice - newAvg) * totalQty).toFixed(2);
        existingHolding.day = ((currPrice - prevClose) * totalQty).toFixed(2);

        await existingHolding.save();

        //UPDATING POSITIONS
        if (existingPosition) {
          existingPosition.qty += qty;
          const totalPositionCost =
            existingPosition.avg * existingPosition.qty + qty * price;
          const newPositionAvg =
            totalPositionCost / (existingPosition.qty + qty);
          existingPosition.avg = newPositionAvg;
          existingPosition.price = currPrice;
          existingPosition.net = (
            (currPrice - newPositionAvg) *
            existingPosition.qty
          ).toFixed(2);
          existingPosition.day = (
            (currPrice - prevClose) *
            existingPosition.qty
          ).toFixed(2);
          existingPosition.isLoss = existingPosition.net < 0;
          await existingPosition.save();
        }
      } else {
        const newHolding = new HoldingModel({
          userId,
          name,
          qty,
          avg: price,
          price: currPrice,
          net,
          day,
        });
        await newHolding.save();
      }
      const newPosition = new PositionModel({
        userId,
        product: "MIs",
        name,
        qty,
        avg: price,
        price: currPrice,
        net,
        day,
        isLoss: net < 0,
      });
      await newPosition.save();
    } else if (mode === "SELL") {
      //UPDATING HOLDINGS
      if (!existingHolding || qty > existingHolding.qty) {
        return res
          .status(400)
          .json({ message: "Not enough holdings to sell." });
      }

      if (qty === existingHolding.qty) {
        await HoldingModel.deleteOne({ userId, name });
      } else {
        existingHolding.qty -= qty;
        if (existingHolding.qty == 0) {
          await existingHolding.deleteOne({ userId, name });
        }
        await existingHolding.save();
      }

      //UPDATING POSITIONS
      if (!existingPosition) {
        return res
          .status(400)
          .json({ message: "No position found to update." });
      }

      if (existingPosition) {
        if (existingPosition.qty < qty) {
          return res
            .status(400)
            .json({ message: "Not enough position quantity to sell." });
        }

        if (qty === existingPosition.qty) {
          await PositionModel.deleteOne({ userId, name });
          console.log("Position deleted");
        } else {
          existingPosition.qty -= qty;
          existingPosition.net = (
            (currPrice - existingPosition.avg) *
            existingPosition.qty
          ).toFixed(2);
          existingPosition.day = (
            (currPrice - prevClose) *
            existingPosition.qty
          ).toFixed(2);
          existingPosition.isLoss = existingPosition.net < 0;
          await existingPosition.save();
        }
      } else {
        return res
          .status(400)
          .json({ message: "No existing position to update." });
      }
      console.log("position updated");
      return res
        .status(200)
        .json({ message: "Sell order placed successfully." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, username, password, createdAt } = req.body;

    if (!email || !password || !username) {
      return res.json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UserModel.create({
      email,
      password,
      username,
      createdAt,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "user signed in successfully!!", success: true, user });
    next();
  } catch (err) {
    console.error(err);
  }
});

app.post("/login",userVerification, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
});


app.get("/getData/:symbol", async (req, res) => {
  const rawSymbol = req.params.symbol.toUpperCase();
  const fetchData = async (symbolVariant) => {
    const { data } = await axios.get("https://finnhub.io/api/v1/quote", {
      params: {
        symbol: symbolVariant,
        token: key,
      },
    });
    const price = data.c.toFixed(2);
    const prevPrice = data.pc.toFixed(2);
    const percentChange = data.dp.toFixed(2);
    const isDown = price < prevPrice;
    console.log(data);
    return {
      name: rawSymbol,
      price: price,
      percent: `${isDown ? "" : "+"}${percentChange}%`,
      isDown,
    };
  };
  try {
    let stockData = await fetchData(rawSymbol);
    console.log(stockData);
    if (!stockData) {
      return res.status(404).json({ error: "Stock data not found" });
    }
    res.json(stockData);
  } catch (err) {
    console.error("Error fetching stock:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/verifyUser", userVerification, (req, res) => {
  try {
    if (!req.user || !req.user.username) {
      res.json({ status: false, message: "User data missing!" });
    }
    res.json({ status: true, user: req.user.username });
  } catch (err) {
    console.log(err);
    res.json({ status: false, message: "Error in verification" });
  }
});
app.get("/", (req, res) => {
  res.send("server working..");
});
app.listen(PORT, () => {
  console.log(`port listening to ${PORT}`);
  mongoose.connect(url).then(() => {
    console.log("DB connected");
  });
});
