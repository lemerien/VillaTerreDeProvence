export const FormStatus = ({ status }) => {
  if (status.submitting) {
    return <p className="text-blue-500 font-semibold text-lg mb-4">Envoi en cours...</p>;
  }

  if (status.success) {
    return <p className="text-green-500 font-semibold text-lg mb-4">{status.message}</p>;
  }

  if (status.success === false) {
    return <p className="text-red-500 font-semibold text-lg mb-4">{status.message}</p>;
  }

  return null;
};
