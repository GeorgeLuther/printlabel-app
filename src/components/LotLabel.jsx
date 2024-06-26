//Test URI: lotlabel?lotId=dHVhjE7f28cJ3NNNB27Dsu&sku=PAINT0016&jobName=GARD%2010574&jobId=23717&release=1of1&kit=23717-R1-K1

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function LotLabel() {
  let [searchParams] = useSearchParams();
  const allParams = {};
  for (const [key, value] of searchParams.entries()) {
    allParams[key] = value;
  }
  const { lotId, sku, jobName, jobId, release, kit } = allParams;

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="label">
      <p>BMP SKU:</p>
      <h1>{sku}</h1>
      <p>
        Lot ID: <i>{lotId}</i>
      </p>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=500x500&ecc=H&margin=10&data=${encodeURIComponent(
          lotId
        )}`}
        alt="QR Code"
        width="510"
        height="510"
      />
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
