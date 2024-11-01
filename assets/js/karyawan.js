// karyawan.js

let karyawanList = []; // Array untuk menyimpan data karyawan

function tambahKaryawan() {
    const kodeKaryawan = document.getElementById('kode_karyawan').value;
    const namaKaryawan = document.getElementById('nama').value;
    const emailKaryawan = document.getElementById('email').value;
    const alamatKaryawan = document.getElementById('alamat').value;
    const jabatanKaryawan = document.getElementById('jabatan').value;

    // Menambahkan data karyawan ke dalam array
    karyawanList.push({
        kode: kodeKaryawan,
        nama: namaKaryawan,
        email: emailKaryawan,
        alamat: alamatKaryawan,
        jabatan: jabatanKaryawan
    });

    // Menampilkan data karyawan di tabel
    tampilkanKaryawan();

    // Menutup modal
    $('#tambahKaryawanModal').modal('hide');

    // Reset form
    document.getElementById('formKaryawan').reset();
}

function tampilkanKaryawan() {
    const tabelBody = document.querySelector('#tabelKaryawan tbody');
    tabelBody.innerHTML = ''; // Menghapus isi tabel sebelum ditambahkan

    karyawanList.forEach((karyawan, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${karyawan.kode}</td>
            <td>${karyawan.nama}</td>
            <td>${karyawan.email}</td>
            <td>${karyawan.alamat}</td>
            <td>${karyawan.jabatan}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editKaryawan(${index})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm" onclick="hapusKaryawan(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

function editKaryawan(index) {
    const karyawan = karyawanList[index];
    document.getElementById('kode_karyawan').value = karyawan.kode;
    document.getElementById('nama').value = karyawan.nama;
    document.getElementById('email').value = karyawan.email;
    document.getElementById('alamat').value = karyawan.alamat;
    document.getElementById('jabatan').value = karyawan.jabatan;

    // Hapus karyawan yang akan diedit dari array sebelum menambahkannya lagi
    karyawanList.splice(index, 1);
    tampilkanKaryawan();
    $('#tambahKaryawanModal').modal('show'); // Tampilkan modal untuk mengedit
}

function hapusKaryawan(index) {
    karyawanList.splice(index, 1); // Hapus karyawan dari array
    tampilkanKaryawan(); // Tampilkan tabel yang diperbarui
}
