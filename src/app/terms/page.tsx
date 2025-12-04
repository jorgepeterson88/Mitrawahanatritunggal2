'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle, Scale } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MWT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV MITRA WAHANA TRITUNGGAL</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Syarat & Ketentuan</p>
              </div>
            </div>
            
            <Link href="/">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan <span className="text-blue-600">CV MITRA WAHANA TRITUNGGAL</span>
          </h1>
          <p className="text-xl text-gray-600">
            Perjanjian layanan yang mengatur penggunaan jasa kami
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <FileText className="w-5 h-5 mr-2" />
                Pendahuluan & Penerimaan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di <strong>CV MITRA WAHANA TRITUNGGAL</strong>. Syarat & Ketentuan ini ("Perjanjian") 
                mengatur penggunaan layanan transportasi, logistik, dan konsultasi bisnis yang kami sediakan. 
                Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh perjanjian ini.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Definisi Penting:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li><strong>"Perusahaan"</strong> - CV MITRA WAHANA TRITUNGGAL</li>
                  <li><strong>"Klien"</strong> - Pihak yang menggunakan layanan kami</li>
                  <li><strong>"Layanan"</strong> - Transportasi, logistik, dan konsultasi bisnis</li>
                  <li><strong>"Barang"</strong> - Barang atau kargo yang diangkut</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <CheckCircle className="w-5 h-5 mr-2" />
                Layanan yang Kami Sediakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Layanan Transportasi:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pengiriman barang antar kota dan provinsi</li>
                  <li>Layanan ekspedisi darat dengan armada terpercaya</li>
                  <li>Pengangkutan barang komersial dan pribadi</li>
                  <li>Layanan pengiriman dengan jadwal fleksibel</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Layanan Logistik:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Manajemen gudang dan penyimpanan</li>
                  <li>Koordinasi rantai pasok (supply chain)</li>
                  <li>Tracking dan monitoring pengiriman real-time</li>
                  <li>Solusi logistik terintegrasi</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Layanan Konsultasi:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Konsultasi optimasi transportasi</li>
                  <li>Perencanaan logistik bisnis</li>
                  <li>Analisis efisiensi biaya pengiriman</li>
                  <li>Rekomendasi solusi bisnis</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Shield className="w-5 h-5 mr-2" />
                Tanggung Jawab Pihak-Pihak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Tanggung Jawab Kami:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Menyediakan layanan sesuai standar profesional</li>
                    <li>• Memastikan keamanan barang selama pengiriman</li>
                    <li>• Memberikan informasi status pengiriman yang akurat</li>
                    <li>• Mengganti rugi untuk kerusakan akibat kelalaian kami</li>
                    <li>• Menjaga kerahasiaan informasi klien</li>
                    <li>• Mematuhi semua peraturan yang berlaku</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-3">Tanggung Jawab Klien:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Memberikan informasi barang yang akurat</li>
                    <li>• Memastikan barang dapat diangkut secara legal</li>
                    <li>• Membayar biaya layanan tepat waktu</li>
                    <li>• Memberikan dokumen yang diperlukan</li>
                    <li>• Tidak mengirim barang ilegal atau berbahaya</li>
                    <li>• Mematuhi syarat dan ketentuan pengiriman</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing and Payment */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Scale className="w-5 h-5 mr-2" />
                Harga & Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Struktur Harga:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Harga ditentukan berdasarkan jarak, berat, dan jenis barang</li>
                  <li>Penawaran harga berlaku selama 7 hari kecuali disepakati lain</li>
                  <li>Harga dapat berubah sesuai kondisi pasar dan bahan bakar</li>
                  <li>Biaya tambahan untuk layanan khusus akan diinformasikan sebelumnya</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Syarat Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pembayaran dapat dilakukan tunai atau transfer bank</li>
                  <li>Pembayaran DP minimal 50% untuk layanan jangka panjang</li>
                  <li>Pelunasan sebelum barang tiba di tujuan</li>
                  <li>Keterlambatan pembayaran dikenakan denda 2% per hari</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Catatan Penting:</h4>
                <p className="text-sm text-yellow-700">
                  Semua harga belum termasuk PPN 11% (jika applicable) dan biaya administrasi bank. 
                  Invoice resmi akan diberikan setelah pembayaran diterima.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Pembatasan & Pengecualian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Barang yang TIDAK Kami Angkut:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Barang ilegal, narkotika, dan psikotropika</li>
                  <li>Senjata api dan bahan peledak</li>
                  <li>Hewan hidup (tanpa persetujuan khusus)</li>
                  <li>Makanan basah dan mudah busuk</li>
                  <li>Bahan kimia berbahaya dan beracun</li>
                  <li>Uang tunai dan perhiasan bernilai tinggi</li>
                  <li>Dokumen penting tanpa asuransi khusus</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Batasan Tanggung Jawab:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Kami tidak bertanggung jawab atas keterlambatan karena force majeure</li>
                  <li>Kerusakan akibat alam (bencana, cuaca ekstrem) diluar tanggung jawab kami</li>
                  <li>Kehilangan barang karena pencurian di luar kontrol kami</li>
                  <li>Kerusakan akibat packaging yang tidak memadai dari klien</li>
                  <li>Keterlambatan akibat macet atau penutupan jalan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Insurance */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Shield className="w-5 h-5 mr-2" />
                Asuransi & Klaim
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Perlindungan Asuransi:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Asuransi dasar tersedia untuk semua pengiriman</li>
                  <li>Coverage maksimal Rp 10.000.000 per pengiriman</li>
                  <li>Asuransi tambahan tersedia dengan biaya ekstra</li>
                  <li>Klaim harus diajukan maksimal 3 hari setelah barang diterima</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Prosedur Klaim:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Laporkan kerusakan/kehilangan segera setelah ditemukan</li>
                  <li>Sediakan bukti foto dan dokumentasi lengkap</li>
                  <li>Isi formulir klaim yang tersedia</li>
                  <li>Proses klaim maksimal 14 hari kerja</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Pengakhiran & Pemutusan Layanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Pengakhiran oleh Klien:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pembatalan dapat dilakukan 24 jam sebelum pengiriman</li>
                  <li>Pembatalan kurang dari 24 jam dikenakan biaya 50%</li>
                  <li>Pembatalan saat armada sudah berangkat dikenakan biaya 100%</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Pengakhiran oleh Perusahaan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Jika klien melanggar syarat dan ketentuan</li>
                  <li>Jika barang yang dikirim ilegal atau berbahaya</li>
                  <li>Jika pembayaran tidak dilakukan sesuai kesepakatan</li>
                  <li>Jika terjadi penyalahgunaan layanan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Scale className="w-5 h-5 mr-2" />
                Penyelesaian Sengketa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Semua sengketa yang timbul dari penggunaan layanan <strong>CV MITRA WAHANA TRITUNGGAL</strong> 
                akan diselesaikan secara musyawarah dan kekeluargaan terlebih dahulu.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Tahap Penyelesaian:</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Negosiasi Langsung</h5>
                      <p className="text-sm text-gray-600">Diskusi antara kedua belah pihak untuk mencari solusi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Mediasi</h5>
                      <p className="text-sm text-gray-600">Melibatkan pihak ketiga yang netral</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Proses Hukum</h5>
                      <p className="text-sm text-gray-600">Penyelesaian melalui pengadilan di Pematangsiantar</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Hukum yang Berlaku:</strong> Perjanjian ini diatur oleh hukum Republik Indonesia. 
                  Setiap perselisihan akan diselesaikan di Pengadilan Negeri Pematangsiantar.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-800">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Untuk pertanyaan atau klarifikasi mengenai Syarat & Ketentuan ini, 
                silakan hubungi <strong>CV MITRA WAHANA TRITUNGGAL</strong>:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alamat Kantor</h4>
                  <p className="text-sm text-gray-600">
                    Jalan Bah Lias Nomor 5<br />
                    Desa/Kelurahan Sigulanggulang<br />
                    Kec. Siantar Utara<br />
                    Kota Pematangsiantar, Sumatera Utara<br />
                    Kode Pos: 21141
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kontak Bisnis</h4>
                  <p className="text-sm text-gray-600">
                    Telepon: 082382466330<br />
                    Email: info@mitra-wahana.com<br />
                    Website: www.mitra-wahana.com<br />
                    Jam Operasional: Senin - Sabtu, 08:00 - 17:00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 text-center space-y-4">
          <Separator />
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-sm text-blue-800 mb-4">
              Dengan menggunakan layanan <strong>CV MITRA WAHANA TRITUNGGAL</strong>, 
              Anda mengaku telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang tercantum dalam perjanjian ini.
            </p>
            <p className="text-xs text-blue-600">
              © 2024 CV MITRA WAHANA TRITUNGGAL. Semua hak dilindungi.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8">
                Kembali ke Beranda
              </Button>
            </Link>
            <Link href="/privacy">
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8">
                Lihat Kebijakan Privasi
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}