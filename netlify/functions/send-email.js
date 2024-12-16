const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    const { prenom, nom, email, telephone, dateArrivee, dateDepart, nombrePersonnes, modePaiement, presentation } = data;

    const msg = {
      to: 'villaterredeprovence@gmail.com', // Replace with your email
      from: 'villaterredeprovence@gmail.com', // Replace with your verified SendGrid sender
      subject: 'Contact Formulaire - Villa Terre de Provence',
      text: `
        Nouvelle demande de réservation:
        
        Prénom: ${prenom}
        Nom: ${nom}
        Email: ${email}
        Téléphone: ${telephone}
        Date d'arrivée: ${dateArrivee}
        Date de départ: ${dateDepart}
        Nombre de personnes: ${nombrePersonnes}
        Mode de paiement: ${modePaiement}
        
        Présentation:
        ${presentation}
      `,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Prénom:</strong> ${prenom}</p>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Date d'arrivée:</strong> ${dateArrivee}</p>
        <p><strong>Date de départ:</strong> ${dateDepart}</p>
        <p><strong>Nombre de personnes:</strong> ${nombrePersonnes}</p>
        <p><strong>Mode de paiement:</strong> ${modePaiement}</p>
        <p><strong>Présentation:</strong></p>
        <p>${presentation}</p>
      `,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};