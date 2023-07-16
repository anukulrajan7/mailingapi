const nodemailer = require("nodemailer");
const mailgen = require("mailgen");
const {data} = require("../env.js")


const signup = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "pearline.blick92@ethereal.email",
      pass: "Y85Tm2YScsHKKjrt28",
    },
  });
  const message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };
  await transporter
    .sendMail(message)
    .then((info) => {
      res
        .status(201)
        .json({
          message: "check your email",
          info: info.message,
          previewurl: nodemailer.getTestMessageUrl(info),
        });
    })
    .catch((error) => {
      res.status(500).json({ Error: error });
    });
  //   res.status(201).json("signup successful");
};

const getbil = (req, res) => {
  const {useremail} = req.body
  console.log(useremail)
    const config = {
    service: "gmail",
    auth: {
      user:data.host,
      pass:data.pass,
    },
  };
  const Mailgenrator = new mailgen({
    theme: "default",
    product: {
      name: "mailgen",
      link: "https://mailgen.js",
    },
  });
  let response = {
    body: {
        useremail,
    intro: "your bill get genrated",
    table: {
      data: [
        {
          book: "baceknd books ",
        },
      ],
    },
    outro:"looking forward for more buissiness"
    }
  };
  let mail = Mailgenrator.generate(response);
  const transporter = nodemailer.createTransport(config);
  let message = {
    from :"anukulraj2004@gmail.com",
    to: useremail,
    subject:"placeholder for your bill get genrated"
    ,
    html:mail,

  }
  transporter.sendMail(message).then((info)=>{
    res.status(200).json({message:"check your email you have received"})}).catch(error=> res.status(500).json({message:error}));
};

module.exports = {
  signup,
  getbil,
};
