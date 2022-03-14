const router = require("express").Router();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abumarasak@gmail.com",
    pass: "Kh.Moh.Belg@2",
  },
});
router.post("/", (req, res) => {
  const { email, name, phone, subject, text } = req.body;

  const options = {
    from: "abumarasak@gmail.com",
    to: "abumarasak@gmail.com",
    subject: subject,
    text: `
            name : ${name},
            email : ${email},
            phone : ${phone},
            message : ${text}
      `,
  };
  transporter.sendMail(options, (err, info) => {
    if (err) {
      res.json({
        status: "failed",
        message: "something wronge plase try agine ",
      });
      return;
    }
    if (info) {
      res.json({
        status: "success",
        message: "email has been send ",
      });
    }
  });
});
module.exports = router;
