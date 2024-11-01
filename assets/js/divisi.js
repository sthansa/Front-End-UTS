// divisi.js

let divisiList = []; // Array untuk menyimpan data divisi

function tambahDivisi() {
    const kodeDivisi = document.getElementById('kode_divisi').value;
    const namaDivisi = document.getElementById('nama_divisi').value;

    // Menambahkan data divisi ke dalam array
    divisiList.push({
        kode: kodeDivisi,
        nama: namaDivisi
    });

    // Menampilkan data divisi di tabel
    tampilkanDivisi();

    // Menutup modal
    $('#tambahDivisiModal').modal('hide');

    // Reset form
    document.getElementById('formDivisi').reset();
}

function tampilkanDivisi() {
    const tabelBody = document.querySelector('#tabelDivisi tbody');
    tabelBody.innerHTML = ''; // Menghapus isi tabel sebelum ditambahkan

    divisiList.forEach((divisi, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${divisi.kode}</td>
            <td>${divisi.nama}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editDivisi(${index})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm" onclick="hapusDivisi(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

function editDivisi(index) {
    const divisi = divisiList[index];
    document.getElementById('kode_divisi').value = divisi.kode;
    document.getElementById('nama_divisi').value = divisi.nama;

    // Hapus divisi yang akan diedit dari array sebelum menambahkannya lagi
    divisiList.splice(index, 1);
    tampilkanDivisi();
    $('#tambahDivisiModal').modal('show'); // Tampilkan modal untuk mengedit
}

function hapusDivisi(index) {
    divisiList.splice(index, 1); // Hapus divisi dari array
    tampilkanDivisi(); // Tampilkan tabel yang diperbarui
}
