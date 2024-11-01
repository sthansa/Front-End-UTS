// absensi.js

let absensiList = []; // Array untuk menyimpan data absensi

function tambahAbsensi() {
    const kodeKaryawan = document.getElementById('kode_karyawan').value;
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const jamMasuk = document.getElementById('jam_masuk').value;
    const jamKeluar = document.getElementById('jam_keluar').value;
    const status = document.getElementById('status').value;

    // Menambahkan data absensi ke dalam array
    absensiList.push({
        kodeKaryawan: kodeKaryawan,
        nama: nama,
        tanggal: tanggal,
        jamMasuk: jamMasuk,
        jamKeluar: jamKeluar,
        status: status
    });

    // Menampilkan data absensi di tabel
    tampilkanAbsensi();

    // Menutup modal
    $('#tambahAbsensiModal').modal('hide');

    // Reset form
    document.getElementById('formAbsensi').reset();
}

function tampilkanAbsensi() {
    const tabelBody = document.querySelector('#tabelAbsensi tbody');
    tabelBody.innerHTML = ''; // Menghapus isi tabel sebelum ditambahkan

    absensiList.forEach((absensi, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${absensi.kodeKaryawan}</td>
            <td>${absensi.nama}</td>
            <td>${absensi.tanggal}</td>
            <td>${absensi.jamMasuk}</td>
            <td>${absensi.jamKeluar}</td>
            <td>${absensi.status}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editAbsensi(${index})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm" onclick="hapusAbsensi(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

function editAbsensi(index) {
    const absensi = absensiList[index];
    document.getElementById('kode_karyawan').value = absensi.kodeKaryawan;
    document.getElementById('nama').value = absensi.nama;
    document.getElementById('tanggal').value = absensi.tanggal;
    document.getElementById('jam_masuk').value = absensi.jamMasuk;
    document.getElementById('jam_keluar').value = absensi.jamKeluar;
    document.getElementById('status').value = absensi.status;

    // Hapus absensi yang akan diedit dari array sebelum menambahkannya lagi
    absensiList.splice(index, 1);
    tampilkanAbsensi();
    $('#tambahAbsensiModal').modal('show'); // Tampilkan modal untuk mengedit
}

function hapusAbsensi(index) {
    absensiList.splice(index, 1); // Hapus absensi dari array
    tampilkanAbsensi(); // Tampilkan tabel yang diperbarui
}
