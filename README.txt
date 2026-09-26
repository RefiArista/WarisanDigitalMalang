WARISAN DIGITAL MALANG — Struktur File Website
================================================

index.html          → Beranda
galeri.html         → Galeri Budaya Digital
peta.html           → Peta Digital Budaya
edukasi.html        → Edukasi Digital
dokumentasi.html    → Dokumentasi dan Pelestarian

assets/style.css    → Semua styling (CSS) untuk 5 halaman
assets/main.js      → Skrip interaktif peta (klik penanda)

CARA HOSTING
-------------
Folder ini bisa langsung di-upload ke hosting statis apa pun
(Netlify, Vercel, GitHub Pages, cPanel, dsb) tanpa perlu build tool.
Cukup pastikan struktur folder tetap sama (assets/ sejajar dengan
file .html).

CARA MENAMBAHKAN FOTO ASLI
----------------------------
Setiap slot foto ditandai dengan class "img-placeholder" (kotak
putus-putus). Untuk menggantinya:

1. Simpan foto di dalam folder assets/images/ (buat foldernya
   sendiri, misal assets/images/topeng-malangan.jpg)
2. Cari elemen placeholder terkait di file HTML, contoh:
   <div class="img-placeholder">...</div>
3. Ganti div tersebut menjadi:
   <img src="assets/images/topeng-malangan.jpg" alt="Topeng Malangan"
        style="width:100%;height:100%;object-fit:cover;border-radius:4px;">

Lakukan ini untuk tiap kartu di galeri.html, edukasi.html,
dokumentasi.html, dan thumbnail di peta.html.

CATATAN
--------
Font (Fraunces & Space Grotesk) dimuat dari Google Fonts via CDN,
jadi butuh koneksi internet saat halaman dibuka. Jika ingin fully
offline, unduh font-nya dan ubah bagian <link> di setiap file HTML.
