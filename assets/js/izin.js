// izin.js

let izinList = []; // Array untuk menyimpan data izin

function tambahIzin() {
    const kodeKaryawan = document.getElementById('kode_karyawan').value;
    const nama = document.getElementById('nama').value;
    const tanggalIzin = document.getElementById('tanggal_izin').value;
    const alasan = document.getElementById('alasan').value;
    const status = document.getElementById('status').value;

    // Menambahkan data izin ke dalam array
    izinList.push({
        kodeKaryawan: kodeKaryawan,
        nama: nama,
        tanggalIzin: tanggalIzin,
        alasan: alasan,
        status: status
    });

    // Menampilkan data izin di tabel
    tampilkanIzin();

    // Menutup modal
    $('#tambahIzinModal').modal('hide');

    // Reset form
    document.getElementById('formIzin').reset();
}

function tampilkanIzin() {
    const tabelBody = document.querySelector('#tabelIzin tbody');
    tabelBody.innerHTML = ''; // Menghapus isi tabel sebelum ditambahkan

    izinList.forEach((izin, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${izin.kodeKaryawan}</td>
            <td>${izin.nama}</td>
            <td>${izin.tanggalIzin}</td>
            <td>${izin.alasan}</td>
            <td>${izin.status}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editIzin(${index})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm" onclick="hapusIzin(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

function editIzin(index) {
    const izin = izinList[index];
    document.getElementById('kode_karyawan').value = izin.kodeKaryawan;
    document.getElementById('nama').value = izin.nama;
    document.getElementById('tanggal_izin').value = izin.tanggalIzin;
    document.getElementById('alasan').value = izin.alasan;
    document.getElementById('status').value = izin.status;

    // Hapus izin yang akan diedit dari array sebelum menambahkannya lagi
    izinList.splice(index, 1);
    tampilkanIzin();
    $('#tambahIzinModal').modal('show'); // Tampilkan modal untuk mengedit
}

function hapusIzin(index) {
    izinList.splice(index, 1); // Hapus izin dari array
    tampilkanIzin(); // Tampilkan tabel yang diperbarui
}
