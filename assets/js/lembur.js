// lembur.js

let lemburList = []; // Array untuk menyimpan data lembur

function tambahLembur() {
    const kodeKaryawan = document.getElementById('kode_karyawan').value;
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const jamMulai = document.getElementById('jam_mulai').value;
    const jamSelesai = document.getElementById('jam_selesai').value;

    // Menghitung total jam lembur
    const totalJam = hitungTotalJam(jamMulai, jamSelesai);

    // Menambahkan data lembur ke dalam array
    lemburList.push({
        kodeKaryawan: kodeKaryawan,
        nama: nama,
        tanggal: tanggal,
        jamMulai: jamMulai,
        jamSelesai: jamSelesai,
        totalJam: totalJam
    });

    // Menampilkan data lembur di tabel
    tampilkanLembur();

    // Menutup modal
    $('#tambahLemburModal').modal('hide');

    // Reset form
    document.getElementById('formLembur').reset();
}

function hitungTotalJam(jamMulai, jamSelesai) {
    const [jamMulaiJam, jamMulaiMenit] = jamMulai.split(':').map(Number);
    const [jamSelesaiJam, jamSelesaiMenit] = jamSelesai.split(':').map(Number);

    const mulai = jamMulaiJam * 60 + jamMulaiMenit;
    const selesai = jamSelesaiJam * 60 + jamSelesaiMenit;
    const selisih = selesai - mulai;

    return `${Math.floor(selisih / 60)} Jam ${selisih % 60} Menit`;
}

function tampilkanLembur() {
    const tabelBody = document.querySelector('#tabelLembur tbody');
    tabelBody.innerHTML = ''; // Menghapus isi tabel sebelum ditambahkan

    lemburList.forEach((lembur, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${lembur.kodeKaryawan}</td>
            <td>${lembur.nama}</td>
            <td>${lembur.tanggal}</td>
            <td>${lembur.jamMulai}</td>
            <td>${lembur.jamSelesai}</td>
            <td>${lembur.totalJam}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editLembur(${index})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm" onclick="hapusLembur(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

function editLembur(index) {
    const lembur = lemburList[index];
    document.getElementById('kode_karyawan').value = lembur.kodeKaryawan;
    document.getElementById('nama').value = lembur.nama;
    document.getElementById('tanggal').value = lembur.tanggal;
    document.getElementById('jam_mulai').value = lembur.jamMulai;
    document.getElementById('jam_selesai').value = lembur.jamSelesai;

    // Hapus lembur yang akan diedit dari array sebelum menambahkannya lagi
    lemburList.splice(index, 1);
    tampilkanLembur();
    $('#tambahLemburModal').modal('show'); // Tampilkan modal untuk mengedit
}

function hapusLembur(index) {
    lemburList.splice(index, 1); // Hapus lembur dari array
    tampilkanLembur(); // Tampilkan tabel yang diperbarui
}
