import sendEmail from "./SendEmail.js";
import { appError } from "./appError.js";

export const ContactUs = async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(new appError("Name, email, message are required", 400));
  }
  try {
    const subject = "Contact us Form";
    const textMessage = `${name}- ${email} <br/> ${message}`;

    await sendEmail(process.env.CONTACT_US_EMAIL, subject, textMessage);
    console.log(textMessage);
  } catch (e) {
    return next(new appError(e.message, 400));
  }
  res.status(200).json({
    success: true,
    message: "your request has been submitted",
  });
};
