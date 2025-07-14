const db = require('../db');
exports.getKomentarByKelas = async (req, res) => {
  const { id_kelas } = req.params;

  try {
    const query = `
      SELECT k.id, k.isi, k.dibuat, u.username, u.foto
      FROM komentar k
      JOIN users u ON k.id_user = u.id
      WHERE k.id_kelas = ?
      ORDER BY k.id DESC
    `;
    const [rows] = await db.query(query, [id_kelas]);
    res.json({ rows });
  } catch (error) {
    console.error("Gagal mengambil komentar:", error);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

exports.postKomentar = async (req, res) => {
  const { id_kelas, isi } = req.body;
  const userId = req.user?.id;

  if (!id_kelas || !isi || !userId) {
    return res.status(400).json({ message: 'Data tidak lengkap' });
  }

  try {
  
    const insertQuery = `
      INSERT INTO komentar (id_kelas, id_user, isi)
      VALUES (?, ?, ?)
    `;
    const [result] = await db.query(insertQuery, [id_kelas, userId, isi]);
    const komentarId = result.insertId;

   
    const fetchQuery = `
      SELECT k.id, k.id_kelas, k.isi, k.dibuat, u.username, u.foto
      FROM komentar k
      JOIN users u ON k.id_user = u.id
      WHERE k.id = ?
    `;
    const [fetchResult] = await db.query(fetchQuery, [komentarId]);

    
    res.status(201).json(fetchResult[0]);

  } catch (error) {
   
    console.error('Gagal menambahkan komentar:', error);
    res.status(500).json({ message: 'Gagal menambahkan komentar' });
  }
};