import nodemailer from "nodemailer";

export async function GET() {
  return new Response("Contacts working!");
}

export async function POST(req: Request) {

  const { firstname, lastname, email, phone, message } = await req.json();

  console.log('firstname: ', firstname)
  console.log('lastname: ', lastname)
  console.log('email: ', email)
  console.log('phone: ', phone)
  console.log('message: ', message)

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    debug: true,
  });

  // Prepare email messages for both recipients
  const recipient1MailOptions = {
    from: process.env.SMTP_EMAIL, // Sender email address
    to: email, // Recipient email address 1 (User)
    subject:
      "Appreciation for Contacting Senslyze - Your IT and AI Solutions Partner", // Subject for recipient 1
    html: `
   

    <body>
    <!-- Outer table 1 heading  -->
    <table class="container" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
        style="background-color:#fff;max-width:500px; margin:0 auto;  height:116px;">
        <tbody>
            <tr>
                <td>
                    <!-- Inner table -->
                    <table class="content" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                        role="presentation" style="background-color:#000;color:#000;  height:116px">
                        <tbody>
                            <tr>
                                <td class="column" width="100%"
                                    style="text-align:center; padding:5px;vertical-align:top;border:6px solid transparent; ">
                                    <!-- Content -->
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                        style="word-break:break-word;">
                                        <tbody>
                                            <tr>
                                                <td>

                                                    <!--  Senslyze SVG -->
                                                    <img style="height: 96px; width:152px;" src="https://drive.google.com/thumbnail?id=1jsz1X9BW0el89COZvcoEaemBxGV35jEh" alt="senslyze_logo">

                                                   <!-- <img style="width: 152px; height:96px;" src="Image/Senslyze logo.svg" alt="Senslyze_Logo" srcset=""> -->


                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>


    <!-- Outer table 2 Content -->
    <table class="container" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
        <tbody>
            <tr>
                <td>
                    <!-- Inner table -->
                    <table class="email-content" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                        role="presentation"
                        style="background-color:#fff;color:#000;width:100%;max-width:500px;margin:0 auto;">
                        <tbody>
                            <tr>
                                <td class="email-column" width="100%"
                                    style="font-weight:400;text-align:left;padding:5px;vertical-align:top;border:0;">
                                    <!-- Content -->
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                        style="word-break:break-word;">
                                        <tbody>
                                            <tr>
                                                <td style="padding:10px;">
                                                    <div style="font-family:sans-serif;">
                                                        <div
                                                            style="font-size:14px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;color:#555;line-height:1.5;">
                                                            <!-- Email Content -->
                                                            <p style="margin:0;">Dear ${firstname} ${lastname},</p>
                                                            <p style="margin:0;">&nbsp;</p>
                                                            <p style="margin:0;">We extend our sincere appreciation for
                                                                reaching out to Senslyze. We eagerly anticipate the
                                                                opportunity to discuss your distinctive requirements.
                                                            </p>
                                                            <p style="margin:0;">&nbsp;</p>
                                                            <p style="margin:0;">Acknowledging receipt of your inquiry,
                                                                our team assures you of a prompt and meticulous
                                                                response. As a foremost IT consultancy, our competencies
                                                                encompass:.</p>
                                                            <p style="margin:0;">
                                                            <ol>
                                                                <li>Bespoke Software Development</li>
                                                                <li>Web & Mobile App Development</li>
                                                                <li>IT Consulting, Strategy, and Support</li>
                                                                <li>Rigorous Quality Assurance and Testing</li>
                                                                <li>AI-Based Services: Ingenious solutions driven by
                                                                    Artificial Intelligence and Machine Learning.</li>
                                                            </ol>
                                                            </p>
                                                            <p style="margin:0;">Should you have specific inquiries, we
                                                                invite you to respond directly to this correspondence.
                                                            </p>
                                                            <p style="margin:0;">&nbsp;</p>
                                                            <p style="margin:0;">We express gratitude for considering
                                                                Senslyze as your collaborative partner. We look forward
                                                                to the prospect of working together.</p>

                                                            <p style="margin:0;">&nbsp;</p>
                                                            <p style="margin:0;"> Regards Team,</p>
                                                            <p style="margin:0;"> Senslyze </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>


    <!-- Footer Content Icons  -->
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
        style="background-color:#fff;max-width:500px; margin:0 auto;">
        <tbody>
            <tr>
                <td>
                    <!--  Footer
                     -->
                    <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0"
                        role="presentation" style="background-color:#000;color:#000;"" >
                        <tbody>
                            <tr>
                                <td class=" column" width="500px" style="font-weight:400;text-align:left;padding-top:0 px;vertical-align:top;border-top:0;
                                        padding-bottom: 15px; border-right:0;border-bottom:0;border-left:0">
                        <table class="social_block" width="100%" border="0" cellpadding="0" cellspacing="0"
                            role="presentation">
                            <tbody>
                                <tr>

                                    <p style="margin:0;font-size:14px;text-align:left; padding-left: 20px;">
                                        <td
                                            style="margin:0;font-size:14px;text-align:left; padding-left: 20px; width:50% ;">
                                            <span style="color:#fff;font-size:14px"> Contact US </span>
                                        </td>
                                        <td
                                            style="margin:0;font-size:14px;text-align:right; padding-right: 40px; width:50% ;">
                                            <span style="color:#fff;font-size:14px"> Follow Us On
                                            </span>
                                        </td>
                                    </p>
                                </tr>
                                <tr>
                                    <p style="margin:0;font-size:14px;text-align:left; padding-left: 20px;">
                                        <td style="margin:0;font-size:14px;text-align:left; padding-left: 20px;">
                                            <span style="color:#fff;font-size:10px">
                                                <div>

                                                    Mobile : &#x1f1ee;&#x1f1f3; +91 844-6681-324
                                                </div>
                                                <div>
                                                    Website : <a href="https://senslyze.com/" style="color: white;">

                                                        Senslyze.com
                                                    </a>
                                                </div>
                                            </span>
                                        </td>

                                        <td
                                            style="margin:0;font-size:14px;text-align:right; padding-right: 43px; width:50% ;">


                                            <!--  facebook -->
                                            <a href="https://www.facebook.com/profile.php?id=61551632660784">
                                               <!-- <img style="height: 16px; width: 17px;" src="Image/FB.svg" alt=""> -->
                                               <img style="height:16px; width: 17px;" src="https://drive.google.com/thumbnail?id=1EqOPUnPgGnrpBmh5EJeXKvQwMWhUTLG9" alt="facebook">

                                            </a>


                                            <!-- Twitter  -->
                                            <a href=" https://twitter.com/senslyze">
                                                <!-- <img style="height: 14px; width: 14px;" src="Image/X.svg" alt=""> -->
                                                <img style="height: 14px; width:14px;" src="https://drive.google.com/thumbnail?id=1zH3jWjKd_SwS9jrEknW-lCfd6_d7ihUN" alt="X logo">

                                            </a>

                                            <!-- Linkedin  -->
                                            <a href="https://www.linkedin.com/in/senslyze-business-b84213289/">
                                                <!-- <img style="height: 16px; width: 16px;" src="Image/Linkedin.svg" alt=""> -->
                                                <img style="height: 16px; width: 16px;" src="https://drive.google.com/thumbnail?id=14BaTiTrvC4jhIY58UB7WrxLp6NRQV62C" alt="LinkedIn">

                                            </a>

                                            <!-- Instagram  -->
                                            <a href="https://www.instagram.com/senslyze/">
                                                <!-- <img style="height: 16px; width: 16px;" src="Image/Insta.svg" alt=""> -->
                                                <img style="height: 16px; width: 16px;" src="https://drive.google.com/thumbnail?id=1GYcMV9emSJFNWoKKtMR2fVO1ygT4ScNz" alt="Insta">

                                            </a>


                                        </td>


                </td>
                </p>
            </tr>

        </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>

</body>






    `,
  };

  const recipient2MailOptions = {
    from: process.env.SMTP_EMAIL, // Sender email address
    to: process.env.SMTP_EMAIL, // Recipient email address 2 (Another user)
    subject: "User wants to contact you", // Subject for recipient 2
    text: `
      First Name: ${firstname}
      Last Name: ${lastname}
      Email: ${email}
      Phone Number: ${phone}
      Message: ${message}
      This user wants to contact you using Senslyze website
    `,
  };

  try {
    // Send email to recipient 1
    await transporter.sendMail(recipient1MailOptions);
    // Send email to recipient 2
    await transporter.sendMail(recipient2MailOptions);

    console.log("Mail sent successfully.")
    return new Response("Mail sent successfully.", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
