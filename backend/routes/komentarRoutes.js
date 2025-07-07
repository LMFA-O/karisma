const express = require('express');
const router = express.Router();
const { getKomentarByKelas, postKomentar, updateKomentar, deleteKomentar} = require('../controllers/komentarController');
const verifyToken = require('../middleware/verifyToken');

// Ambil komentar berdasarkan kelas
router.get('/komentar/:id_kelas', getKomentarByKelas);

// Tambah komentar
router.post('/komentar', verifyToken, postKomentar);

// Edit komentar
router.put('/komentar/:id', verifyToken, updateKomentar);

// Hapus komentar
router.delete('/komentar/:id', verifyToken, deleteKomentar);

module.exports = router;
