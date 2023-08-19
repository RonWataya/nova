const express = require("express");
const cors = require("cors");
const app = express();
const sgMail = require('@sendgrid/mail');

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(cors({
    origin: '*'
}));

// Set the SendGrid API key
sgMail.setApiKey('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');

// Define a route for receiving and sending mail data for biltmore

app.post('/biltmore', (req, res) => {
    const formData = req.body;

    // Print the received form data in the console
    console.log('Received Form Data:', formData);

    // Construct the email message using the form data
    const msg = {
        to: ['choson@novareevents.com', 'msegura@novareevents.com', 'ronnexwataya@yahoo.com'],
        from: 'web@novareevents.com',
        subject: 'Event Registration',
        text: 'Event registration details',
        html: `
        <strong>Event Registration Details | The Biltmore Ballrooms</strong><br><br>
        First Name: ${formData.first_name}<br>
        Last Name: ${formData.last_name}<br>
        Email: ${formData.email}<br>
        Preferred Date: ${formData.preferred_date}<br>
        Number of Guests Expected: ${formData.guests_expected}<br>
        Phone: ${formData.phone}<br>
        Type of Event: ${formData.event_type}
      `,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});
// Define a route for receiving and sending mail data for bishop433
app.post('/bishop433', (req, res) => {
    const formData = req.body;

    // Print the received form data in the console
    console.log('Received Form Data:', formData);

    // Construct the email message using the form data
    const msg = {
        to: ['kzimmer@novareevents.com', 'ronnexwataya@yahoo.com'],
        from: 'web@novareevents.com',
        subject: 'Event Registration',
        text: 'Event registration details',
        html: `
        <strong>Event Registration Details | Bishop 433</strong><br><br>
        First Name: ${formData.first_name}<br>
        Last Name: ${formData.last_name}<br>
        Email: ${formData.email}<br>
        Preferred Date: ${formData.preferred_date}<br>
        Number of Guests Expected: ${formData.guests_expected}<br>
        Phone: ${formData.phone}<br>
        Type of Event: ${formData.event_type}
      `,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});

// Define a route for receiving and sending mail data for bishop Station
app.post('/bishopstation', (req, res) => {
    const formData = req.body;

    // Print the received form data in the console
    console.log('Received Form Data:', formData);

    // Construct the email message using the form data
    const msg = {
        to: ['ksthilaire@novareevents.com', 'ronnexwataya@yahoo.com'],
        from: 'web@novareevents.com',
        subject: 'Event Registration',
        text: 'Event registration details',
        html: `
        <strong>Event Registration Details | Bishop Station</strong><br><br>
        First Name: ${formData.first_name}<br>
        Last Name: ${formData.last_name}<br>
        Email: ${formData.email}<br>
        Preferred Date: ${formData.preferred_date}<br>
        Number of Guests Expected: ${formData.guests_expected}<br>
        Phone: ${formData.phone}<br>
        Type of Event: ${formData.event_type}
      `,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});

// Define a route for receiving and sending mail data for puritan
app.post('/puritan', (req, res) => {
    const formData = req.body;

    // Print the received form data in the console
    console.log('Received Form Data:', formData);

    // Construct the email message using the form data
    const msg = {
        to: ['ksthilaire@novareevents.com', 'ronnexwataya@yahoo.com'],
        from: 'web@novareevents.com',
        subject: 'Event Registration',
        text: 'Event registration details',
        html: `
        <strong>Event Registration Details | The Foundry of Puritan Mill</strong><br><br>
        First Name: ${formData.first_name}<br>
        Last Name: ${formData.last_name}<br>
        Email: ${formData.email}<br>
        Preferred Date: ${formData.preferred_date}<br>
        Number of Guests Expected: ${formData.guests_expected}<br>
        Phone: ${formData.phone}<br>
        Type of Event: ${formData.event_type}
      `,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});

// Define a route for receiving and sending mail data for summorsour
app.post('/summerour', (req, res) => {
    const formData = req.body;

    // Print the received form data in the console
    console.log('Received Form Data:', formData);

    // Construct the email message using the form data
    const msg = {
        to: ['mzanger@novareevents.com', 'ronnexwataya@yahoo.com'],
        from: 'web@novareevents.com',
        subject: 'Event Registration',
        text: 'Event registration details',
        html: `
        <strong>Event Registration Details | Summorour Studio</strong><br><br>
        First Name: ${formData.first_name}<br>
        Last Name: ${formData.last_name}<br>
        Email: ${formData.email}<br>
        Preferred Date: ${formData.preferred_date}<br>
        Number of Guests Expected: ${formData.guests_expected}<br>
        Phone: ${formData.phone}<br>
        Type of Event: ${formData.event_type}
      `,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});

// Define a route for receiving and sending mail data for the guardian
app.post('/guardian', (req, res) => {
    const formData = req.body;

    // Print the received form data in the console
    console.log('Received Form Data:', formData);

    // Construct the email message using the form data
    const msg = {
        to: ['kzimmer@novareevents.com', 'ronnexwataya@yahoo.com'],
        from: 'web@novareevents.com',
        subject: 'Event Registration',
        text: 'Event registration details',
        html: `
        <strong>Event Registration Details | The Guardian</strong><br><br>
        First Name: ${formData.first_name}<br>
        Last Name: ${formData.last_name}<br>
        Email: ${formData.email}<br>
        Preferred Date: ${formData.preferred_date}<br>
        Number of Guests Expected: ${formData.guests_expected}<br>
        Phone: ${formData.phone}<br>
        Type of Event: ${formData.event_type}
      `,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});

// Define a route for receiving and sending mail data for the staveroom
app.post('/stave', (req, res) => {
    const formData = req.body;

    // Print the received form data in the console
    console.log('Received Form Data:', formData);

    // Construct the email message using the form data
    const msg = {
        to: ['kzimmer@novareevents.com', 'ronnexwataya@yahoo.com'],
        from: 'web@novareevents.com',
        subject: 'Event Registration',
        text: 'Event registration details',
        html: `
        <strong>Event Registration Details | The Stave Room</strong><br><br>
        First Name: ${formData.first_name}<br>
        Last Name: ${formData.last_name}<br>
        Email: ${formData.email}<br>
        Preferred Date: ${formData.preferred_date}<br>
        Number of Guests Expected: ${formData.guests_expected}<br>
        Phone: ${formData.phone}<br>
        Type of Event: ${formData.event_type}
      `,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});

// Define a route for receiving and sending mail data for booking
app.post('/booking', (req, res) => {
    const formData = req.body;

    // Print the received form data in the console
    console.log('Received Form Data:', formData);

    // Construct the email message using the form data
    const msg = {

        to: ['kzimmer@novareevents.com', 'ronnexwataya@yahoo.com'],
        from: 'web@novareevents.com',
        subject: 'Event Registration',
        text: 'Event registration details',
        html: `
        <strong>Event Registration Details | Booking</strong><br><br>
        Full Name: ${formData.fullName}<br>
        Email: ${formData.email}<br>
        Preferred Date: ${formData.eventDate}<br>
        Number of Guests Expected: ${formData.numGuests}<br>
        How did you hear about us: ${formData.howDidYouHear}<br>
        Type of Event: ${formData.eventType}
        Venue: ${formData.venue}
      `,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});
// set port, listen for requests
const PORT = 2023;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});