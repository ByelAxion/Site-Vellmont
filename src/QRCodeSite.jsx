import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeSite() {
  const baixarQRCode = () => {
    const canvas = document.querySelector("#qrcode");
    const imagem = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imagem;
    link.download = "qrcode-vellmont.png";
    link.click();
  };

  return (
    <div>
      <QRCodeCanvas
        id="qrcode"
        value="https://site-vellmont.vercel.app/"
        size={500}
        level="H"
      />

      <br />

      <button onClick={baixarQRCode}>
        Baixar QR Code
      </button>
    </div>
  );
}
