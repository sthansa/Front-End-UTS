// penggajian.js

let penggajianList = []; // Array untuk menyimpan data penggajian

// Fungsi untuk menambahkan kelipatan gaji dari Rp 500.000 hingga Rp 5.000.000 ke dropdown
function isiKelipatanGaji() {
    const selectGajiPokok = document.getElementById('gaji_pokok');
    for (let i = 500000; i <= 5000000; i += 500000) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Rp ${i.toLocaleString()}`;
        selectGajiPokok.appendChild(option);
    }
}

// Panggil fungsi isiKelipatanGaji saat halaman dimuat
window.onload = isiKelipatanGaji;

function tambahPenggajian() {
    const kodeKaryawan = document.getElementById('kode_karyawan').value;
    const nama = document.getElementById('nama').value;
    const jabatan = document.getElementById('jabatan').value;
    const gajiPokok = parseFloat(document.getElementById('gaji_pokok').value);
    
    // Mendapatkan jumlah lembur dan jumlah potongan dari input
    const jumlahLembur = parseInt(document.getElementById('jumlah_lembur').value) || 0;
    const jumlahPotongan = parseInt(document.getElementById('jumlah_potongan').value) || 0;

    const tarifLembur = 150000; // Nilai lembur per kali
    const tarifPotongan = 200000; // Nilai potongan per kali

    // Menghitung total lembur dan total potongan
    const totalLembur = jumlahLembur * tarifLembur;
    const totalPotongan = jumlahPotongan * tarifPotongan;

    // Menghitung total gaji
    const totalGaji = gajiPokok + totalLembur - totalPotongan;

    // Menambahkan data penggajian ke dalam array
    penggajianList.push({
        kodeKaryawan: kodeKaryawan,
        nama: nama,
        jabatan: jabatan,
        gajiPokok: gajiPokok,
        lembur: totalLembur,
        potongan: totalPotongan,
        totalGaji: totalGaji
    });

    // Menampilkan data penggajian di tabel
    tampilkanPenggajian();

    // Menutup modal
    $('#tambahPenggajianModal').modal('hide');

    // Reset form
    document.getElementById('formPenggajian').reset();
}

function tampilkanPenggajian() {
    const tabelBody = document.querySelector('#tabelPenggajian tbody');
    tabelBody.innerHTML = ''; // Menghapus isi tabel sebelum ditambahkan

    penggajianList.forEach((penggajian, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${penggajian.kodeKaryawan}</td>
            <td>${penggajian.nama}</td>
            <td>${penggajian.jabatan}</td>
            <td>Rp ${penggajian.gajiPokok.toLocaleString()}</td>
            <td>Rp ${penggajian.lembur.toLocaleString()}</td>
            <td>Rp ${penggajian.potongan.toLocaleString()}</td>
            <td>Rp ${penggajian.totalGaji.toLocaleString()}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editPenggajian(${index})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm" onclick="hapusPenggajian(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

function editPenggajian(index) {
    const penggajian = penggajianList[index];
    document.getElementById('kode_karyawan').value = penggajian.kodeKaryawan;
    document.getElementById('nama').value = penggajian.nama;
    document.getElementById('jabatan').value = penggajian.jabatan;
    document.getElementById('gaji_pokok').value = penggajian.gajiPokok;

    // Hapus data penggajian yang akan diedit dari array sebelum menambahkannya lagi
    penggajianList.splice(index, 1);
    tampilkanPenggajian();
    $('#tambahPenggajianModal').modal('show'); // Tampilkan modal untuk mengedit
}

function hapusPenggajian(index) {
    penggajianList.splice(index, 1); // Hapus penggajian dari array
    tampilkanPenggajian(); // Tampilkan tabel yang diperbarui
}
