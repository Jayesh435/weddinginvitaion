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
      background: linear-gradient(135deg, #0F0521, #3B0764, #7C1D2E);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
    .card {
      background: linear-gradient(135deg, rgba(76,29,149,0.9), rgba(59,7,100,0.95));
      padding: 60px;
      border-radius: 20px;
      text-align: center;
      border: 2px solid #FFD700;
      box-shadow: 0 25px 60px rgba(255,215,0,0.3);
      max-width: 500px;
    }
    h1 { font-family: 'Playfair Display', serif; color: #FFD700; font-size: 3rem; margin: 0; text-shadow: 0 0 20px rgba(255,215,0,0.5); }
    h2 { font-family: 'Playfair Display', serif; color: #FBBF24; font-size: 1.5rem; }
    p { color: #DDD6FE; }
    .gold { color: #FFD700; }
    .divider { height: 1px; background: linear-gradient(90deg, transparent, #FFD700, transparent); margin: 20px auto; width: 80%; }
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
    <section className="py-12 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A0533, #2D1B69)' }}>
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,215,0,0.7)' }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold glow-gold"
        style={{
          background: 'linear-gradient(135deg, #92400E, #D97706, #FFD700)',
          color: '#1A0533',
          boxShadow: '0 10px 30px rgba(255,215,0,0.4)',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.95rem',
        }}
      >
        <span>📥</span>
        Download Invitation
      </motion.button>
    </section>
  );
};

export default DownloadButton;
