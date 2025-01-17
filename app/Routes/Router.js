const { Router } = require("express");

const VERSION_1 = '/v1';
const router = Router();
// 
const ComissaoRoutes  = require(`./${VERSION_1}/ComissaoRoutes.js`);
const FiliadoRoutes   = require("./v1/FiliadoRoutes.js"
    
);
const PagamentoRoutes = require("./v1/PagamentoRoutes.js");

router.get(`${VERSION_1}/teste`, (req, res) => {
    res.status(200).json({success:true});
});
router.use(VERSION_1, ComissaoRoutes);
router.use(VERSION_1, FiliadoRoutes);
router.use(VERSION_1, PagamentoRoutes);

router.use((req, res, next) => {
    res.status(404).json({ error: `Rota ${req.url} não encontrada` });
});

module.exports = router;