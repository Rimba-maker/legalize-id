import { useState } from 'react';

const faqs = [
  {
    q: 'Berapa modal dasar minimum untuk mendirikan PT?',
    a: 'Sejak UU Cipta Kerja 2020, tidak ada minimum modal dasar yang ditetapkan undang-undang. Namun kami rekomendasikan minimum Rp 50 juta untuk kredibilitas di mata klien corporate dan lembaga keuangan.',
  },
  {
    q: 'Bisakah saya menggunakan alamat rumah sebagai domisili PT?',
    a: 'Bisa, dengan syarat peruntukan lahan membolehkan usaha (cek RT/RW). Namun banyak founder memilih virtual office untuk memisahkan identitas bisnis dari rumah — dan itu sudah termasuk di Founder Package kami.',
  },
  {
    q: 'Berapa minimum direksi yang dibutuhkan untuk PT?',
    a: 'Minimum 1 direktur dan 1 komisaris. Untuk single founder, kedua jabatan boleh dirangkap oleh satu orang. Tim kami akan bantu struktur yang paling efisien sesuai situasi Anda.',
  },
  {
    q: 'Saya WNI tapi ingin PT dengan partner asing — bisa?',
    a: 'Bisa lewat PT PMA (Penanaman Modal Asing). Foreign ownership diizinkan hingga 100% di beberapa sektor, tergantung DNI yang dikeluarkan BKPM. Tim kami akan bantu cek sektor bisnis Anda sebelum proses dimulai.',
  },
  {
    q: 'Setelah PT berdiri, apa kewajiban rutin yang harus dipenuhi?',
    a: 'Kewajiban utama: SPT bulanan (PPh 21, 25, PPN jika PKP), SPT tahunan, dan RUPS tahunan. Meski PT dorman dan nihil omzet, SPT tetap wajib dilaporkan. Kami punya partner pajak yang bisa bantu kelola ini.',
  },
  {
    q: 'PT saya dorman 1 tahun, apa ada konsekuensi hukum?',
    a: 'Wajib tetap lapor SPT tahunan walau nihil. Tidak lapor = denda + risiko dicabut SK Menkumham. Pastikan tetap filing meski tidak ada transaksi.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ border: '1.5px solid rgba(14,15,12,.1)', borderRadius: 24, overflow: 'hidden' }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1.5px solid rgba(14,15,12,.1)' : 'none' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%', textAlign: 'left', background: open === i ? '#e8ebe6' : 'none',
              border: 'none', padding: '20px 24px', fontSize: 16, fontWeight: 600,
              color: '#0e0f0c', cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
              transition: 'background .15s',
            }}
          >
            {faq.q}
            <svg
              width={20} height={20} viewBox="0 0 20 20" fill="currentColor"
              style={{ flexShrink: 0, color: '#868685', transition: 'transform .2s', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {open === i && (
            <div style={{ padding: '0 24px 20px', fontSize: 15, color: '#454745', lineHeight: 1.6 }}>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
