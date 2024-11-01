// jabatan.js

let jabatanList = []; // Array untuk menyimpan data jabatan

function tambahJabatan() {
    const kodeJabatan = document.getElementById('kode_jabatan').value;
    const namaJabatan = document.getElementById('nama_jabatan').value;

    // Menambahkan data jabatan ke dalam array
    jabatanList.push({
        kode: kodeJabatan,
        nama: namaJabatan
    });

    // Menampilkan data jabatan di tabel
    tampilkanJabatan();

    // Menutup modal
    $('#tambahJabatanModal').modal('hide');

    // Reset form
    document.getElementById('formJabatan').reset();
}

function tampilkanJabatan() {
    const tabelBody = document.querySelector('#tabelJabatan tbody');
    tabelBody.innerHTML = ''; // Menghapus isi tabel sebelum ditambahkan

    jabatanList.forEach((jabatan, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${jabatan.kode}</td>
            <td>${jabatan.nama}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editJabatan(${index})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm" onclick="hapusJabatan(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

function editJabatan(index) {
    const jabatan = jabatanList[index];
    document.getElementById('kode_jabatan').value = jabatan.kode;
    document.getElementById('nama_jabatan').value = jabatan.nama;

    // Hapus jabatan yang akan diedit dari array sebelum menambahkannya lagi
    jabatanList.splice(index, 1);
    tampilkanJabatan();
    $('#tambahJabatanModal').modal('show'); // Tampilkan modal untuk mengedit
}

function hapusJabatan(index) {
    jabatanList.splice(index, 1); // Hapus jabatan dari array
    tampilkanJabatan(); // Tampilkan tabel yang diperbarui
}
