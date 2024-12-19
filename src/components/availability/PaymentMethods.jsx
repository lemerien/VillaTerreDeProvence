import React from 'react';

const PaymentMethod = ({ title, description, paypalForm }) => {
return (
<div className="text-lg payment-method p-4 rounded-lg">
<h3 className="text-xl font-semibold mb-2">{title}</h3>
<p className="text-lg text-gray-700">{description}</p>
{paypalForm && (
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="mt-4">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="F33HFFVFV4Y8S" />
<table className="mx-auto mb-4">
            <tbody>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="Select - Choisir" />
                  Select - Choisir
                </td>
              </tr>
              <tr>
                <td>
                  <select name="os0" className="border rounded p-2">
                    <option value="Deposit - Acompte">Deposit - Acompte</option>
                    <option value="Balance - Solde">Balance - Solde</option>
                    <option value="Garantee - Caution">Garantee - Caution</option>
                    <option value="Other - Autre">Other - Autre</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/FR/i/btn/btn_paynowCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
        </form>
      )}
    </div>
  );
};

export default function PaymentMethods() {
return (
<div className="mt-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<PaymentMethod
title={<span className="text-base">PAYPAL</span>}
description = {
<span>
<br/>{" "} Reconnu comme le moyen de sécuriser les achats en ligne. <br/>{" "}<br/>{" "}
Vous n'avez pas besoin d'un compte Paypal, vous pouvez payer par carte de crédit, sans ouvrir un compte Paypal. (+ 2,9% de frais)
</span>
}
paypalForm={true}
/>
<PaymentMethod
title={<span className="text-base">VIREMENT BANCAIRE</span>}
description= {
<span> <br/>{" "} Afin d'utiliser cette méthode de paiement, envoyez-nous un email et nous vous communiquerons notre IBAN. <br/>{" "} <br/>{" "} La réservation sera confirmée en moyenne trois jours après la date de virement."
</span>
}
/>
<PaymentMethod
title={<span className="text-base">CHEQUE BANCAIRE</span>}
description= {
<span> <br/>{" "} Cette méthode est plus longue en raison du délais postal. <br/>{" "} <br/>{" "}La réservation sera confirmée une fois l'encaissement du chèque."
</span>}
/>
</div>
</div>
);
}