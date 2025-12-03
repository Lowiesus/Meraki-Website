const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
const port = process.env.PORT || 3000;

// Twilio credentials
const accountSid = "ACa6320a441d528b1c605189b13b0e06f3";
const authToken = "[AuthToken]";
const client = twilio(accountSid, authToken);

const verifyServiceSid = "VA125b635b62977680047b19c8db362876"; // Your Verify Service SID

app.use(bodyParser.json());

// POST /send-verify-otp
app.post("/send-verify-otp", async (req, res) => {
  const { phone } = req.body; // Expect { "phone": "+639xxxxxxxxx" }
  if (!phone) return res.status(400).json({ error: "Phone number required" });

  try {
    const verification = await client.verify.v2
      .services(verifyServiceSid)
      .verifications.create({ to: phone, channel: "sms" });

    // Don't send OTP code in response! Just confirmation.
    res.json({ success: true, sid: verification.sid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not send OTP" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
