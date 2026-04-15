import { motion } from 'framer-motion';

const DownloadButton = () => {
  const handleDownload = () => {
    const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Nikhil &amp; Prachi Wedding Invitation</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400&display=swap');
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #FFB6C1, #FFCBA4, #FFF8F0);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
    .card {
      background: rgba(255,255,255,0.8);
      padding: 60px;
      border-radius: 20px;
      text-align: center;
      border: 2px solid #D4AF37;
      box-shadow: 0 25px 60px rgba(212,175,55,0.3);
      max-width: 500px;
    }
    h1 { font-family: 'Playfair Display', serif; color: #8B4513; font-size: 3rem; margin: 0; }
    h2 { font-family: 'Playfair Display', serif; color: #D4AF37; font-size: 1.5rem; }
    p { color: #A0522D; }
    .gold { color: #D4AF37; }
    .divider { height: 1px; background: linear-gradient(90deg, transparent, #D4AF37, transparent); margin: 20px auto; width: 80%; }
  </style>
</head>
<body>
  <div class="card">
    <p class="gold" style="font-size:2rem">🌸</p>
    <p class="gold" style="letter-spacing:0.3em;font-size:0.8rem">WEDDING INVITATION</p>
    <div class="divider"></div>
    <h1>Nikhil<br>&amp;<br>Prachi</h1>
    <div class="divider"></div>
    <h2>10 May 2026</h2>
    <p>Sweta Lawn, Nigdi, Pune, Maharashtra</p>
    <p style="margin-top:20px">Together with their families, request the pleasure of your company</p>
    <p class="gold" style="margin-top:30px;font-family:'Playfair Display',serif;font-style:italic">With love ❤️</p>
  </div>
</body>
</html>`;

    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'NikhilPrachi-WeddingInvitation.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-12 px-4 text-center" style={{ background: '#FFF8F0' }}>
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.6)' }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold"
        style={{
          background: 'linear-gradient(135deg, #D4AF37, #B8962E)',
          boxShadow: '0 10px 30px rgba(212,175,55,0.4)',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <span>📥</span>
        Download Invitation
      </motion.button>
    </section>
  );
};

export default DownloadButton;
