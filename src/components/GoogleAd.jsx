import { useEffect } from "react";

const GoogleAd = ({ slot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-8905371306521523"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
};

export default GoogleAd;
