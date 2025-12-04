'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
                <p className="text-xs text-gray-500 hidden sm:block">Kebijakan Privasi</p>
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
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="text-blue-600">CV MITRA WAHANA TRITUNGGAL</span>
          </h1>
          <p className="text-xl text-gray-600">
            Perlindungan data dan privasi Anda adalah prioritas utama kami
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
                <Eye className="w-5 h-5 mr-2" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di CV MITRA WAHANA TRITUNGGAL. Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi 
                yang Anda berikan kepada kami melalui website, layanan, atau interaksi langsung dengan perusahaan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini. 
                <strong> CV MITRA WAHANA TRITUNGGAL</strong> beroperasi sesuai dengan hukum dan peraturan yang berlaku di Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Database className="w-5 h-5 mr-2" />
                Pengumpulan Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Informasi Identitas:</strong> Nama lengkap, alamat email, nomor telepon, alamat lengkap</li>
                  <li><strong>Informasi Bisnis:</strong> Nama perusahaan, jabatan, kebutuhan layanan</li>
                  <li><strong>Informasi Transaksi:</strong> Detail pengiriman, informasi pembayaran, riwayat layanan</li>
                  <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, waktu akses, data penggunaan website</li>
                  <li><strong>Informasi Komunikasi:</strong> Rekaman telepon (dengan persetujuan), email, pesan teks</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cara Pengumpulan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Formulir pendaftaran dan kontak di website</li>
                  <li>Komunikasi langsung (telepon, email, WhatsApp)</li>
                  <li>Pertemuan dan konsultasi bisnis</li>
                  <li>Cookies dan teknologi tracking otomatis</li>
                  <li>Dokumen kontrak dan perjanjian kerja sama</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <UserCheck className="w-5 h-5 mr-2" />
                Penggunaan Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>CV MITRA WAHANA TRITUNGGAL</strong> menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Layanan Pelanggan</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Memproses permintaan layanan</li>
                    <li>• Mengkoordinasikan pengiriman</li>
                    <li>• Memberikan update status</li>
                    <li>• Menangani keluhan dan pertanyaan</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Pengembangan Bisnis</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Meningkatkan kualitas layanan</li>
                    <li>• Analisis kebutuhan pasar</li>
                    <li>• Pengembangan produk baru</li>
                    <li>• Optimasi operasional</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Komunikasi</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mengirim informasi layanan</li>
                    <li>• Newsletter dan promosi</li>
                    <li>• Notifikasi penting</li>
                    <li>• Follow-up layanan</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Kepatuhan Hukum</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Memenuhi kewajiban hukum</li>
                    <li>• Penegakan hak hukum</li>
                    <li>• Perlindungan keamanan</li>
                    <li>• Audit internal dan eksternal</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Lock className="w-5 h-5 mr-2" />
                Keamanan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Enkripsi Data</h4>
                    <p className="text-sm text-gray-600">Data sensitif dienkripsi menggunakan teknologi SSL/TLS</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Akses Terbatas</h4>
                    <p className="text-sm text-gray-600">Hanya personil berwenang yang dapat mengakses data pribadi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Backup Rutin</h4>
                    <p className="text-sm text-gray-600">Data di-backup secara rutin dan disimpan di lokasi aman</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Audit Keamanan</h4>
                    <p className="text-sm text-gray-600">Audit keamanan dilakukan secara berkala</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <UserCheck className="w-5 h-5 mr-2" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pemilik data, Anda memiliki hak-hak berikut sesuai dengan peraturan yang berlaku:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Hak Koreksi:</strong> Memperbaiki data yang tidak akurat atau tidak lengkap</li>
                <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi dalam kondisi tertentu</li>
                <li><strong>Hak Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
                <li><strong>Hak Portabilitas:</strong> Menerima data dalam format terstruktur dan dapat dibaca mesin</li>
                <li><strong>Hak Menolak:</strong> Menolak pemrosesan data untuk tujuan pemasaran</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-blue-800">
                  <strong>Cara menghubungi kami:</strong> Kirim email ke privacy@mitra-wahana.com atau 
                  telepon 082382466330 untuk semua permintaan terkait data pribadi Anda.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Third Party Sharing */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Database className="w-5 h-5 mr-2" />
                Berbagi Data dengan Pihak Ketiga
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>CV MITRA WAHANA TRITUNGGAL</strong> tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran. 
                Kami hanya akan membagikan data dalam kondisi berikut:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Kepada mitra bisnis yang membantu menyediakan layanan (seperti perusahaan ekspedisi)</li>
                <li>Untuk memenuhi kewajiban hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                <li>Kepada auditor atau penasihat profesional dalam kondisi kerahasiaan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Eye className="w-5 h-5 mr-2" />
                Pembaruan Kebijakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik bisnis kami 
                atau perubahan peraturan hukum yang berlaku. Setiap perubahan akan diposting di halaman ini dengan tanggal pembaruan terbaru.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Untuk perubahan material, kami akan memberitahukan Anda melalui email atau notifikasi di website. 
                Penggunaan terus menerus layanan kami setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-800">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait Kebijakan Privasi ini, 
                silakan hubungi <strong>CV MITRA WAHANA TRITUNGGAL</strong> melalui:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alamat</h4>
                  <p className="text-sm text-gray-600">
                    Jalan Bah Lias Nomor 5<br />
                    Desa/Kelurahan Sigulanggulang<br />
                    Kec. Siantar Utara<br />
                    Kota Pematangsiantar, Sumatera Utara<br />
                    Kode Pos: 21141
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kontak</h4>
                  <p className="text-sm text-gray-600">
                    Telepon: 082382466330<br />
                    Email: privacy@mitra-wahana.com<br />
                    Website: www.mitra-wahana.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 text-center space-y-4">
          <Separator />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8">
                Kembali ke Beranda
              </Button>
            </Link>
            <Link href="/terms">
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8">
                Lihat Syarat & Ketentuan
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}