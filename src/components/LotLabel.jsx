import { useParams } from "react-router-dom";

function LotLabel() {
  const { lotId, sku, jobName, jobId, release, kit } = useParams();

  return (
    <div className="label">
      <p>BMP SKU:</p>
      <h1>{sku}</h1>
      <p>Lot ID: {lotId}</p>

      {jobId && (
        <div className="job-info">
          <p>Job Name: {jobName}</p>
          <p>Job ID: {jobId}</p>
          <p>Release: {release}</p>
          <p>Kit: {kit}</p>
        </div>
      )}
    </div>
  );
}

export default LotLabel;
