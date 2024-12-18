export const FormStatus = ({ status }) => {
  if (status.success) return <p className="text-success">{status.success}</p>;
  if (status.error) return <p className="text-danger">{status.error}</p>;
  return null;
};
