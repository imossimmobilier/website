import Script from "next/script";
export default function Form() {
  return (
    <>
      <div
        formsappId="6320b11aafe7f34ef8977441"
        style={{ height: "formHeight", width: "100%" }}
      ></div>
      <Script
        id="6320b11aafe7f34ef8977441"
        src="https://my.forms.app/static/iframe.js"
        onReady={() => {
          new formsapp("6320b11aafe7f34ef8977441", {
            width: "100%",
            height: "formHeight",
          });
        }}
      ></Script>
      {/* <Script>new formsapp('6320b11aafe7f34ef8977441',{})</Script> */}
    </>
  );
}
