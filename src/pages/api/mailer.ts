import type { NextApiRequest, NextApiResponse } from "next";
import mailer from "nodemailer";

type Data = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const transporter = mailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAILER_USERNAME,
      pass: process.env.NEXT_PUBLIC_MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Reset Digital" <zeeshanasif@deversiti.com>`,
    to: ["resetdigital@deversiti.com", "contact@resetdigital.ca"],
    subject: "Reset Digital - Contact Form",
    text: "",
    html: getHTMLText(req.body),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error sending email", error: String(error) });
  }
}

const getHTMLText = (data: any) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Digital - Contact Form</title>

    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333;
        font-size: 14px;
      }
      h1 {
        text-align: center;
        margin-top: 2rem;
        font-size: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        margin-top: 1.5rem;
        padding: 2rem;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      table {
        width: 100%;
        margin-top: 1rem;
        border-collapse: collapse;
      }
    </style>
  </head>
  <body>
    <h1>Reset Digital - Contact Form</h1>
    <div class="container">
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>${data.name}</td>
          </tr>
          <tr>
            <td>Company</td>
            <td>${data.company}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>${data.url}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <a href="mailto:${data.email}" target="_blank"
                >${data.email}</a
              >
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>${data.phone}</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top: 1rem">
        <strong style="display: block; margin-bottom: 0.3rem">Message:</strong>
        ${data.message}
      </p>
    </div>
  </body>
</html>
`;
};
