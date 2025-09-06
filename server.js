const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const os = require('os');
const qrcode = require('qrcode');

const app = express();
const port = process.env.PORT || 3000; 

const permanentUploadsDir = 'uploads';
const broadcastDir = 'broadcast';


if (!fs.existsSync(permanentUploadsDir)) fs.mkdirSync(permanentUploadsDir);
if (!fs.existsSync(broadcastDir)) fs.mkdirSync(broadcastDir);



const permanentStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, permanentUploadsDir),
    filename: (req, file, cb) => cb(null, file.originalname)
});


const broadcastStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, broadcastDir),
    filename: (req, file, cb) => cb(null, file.originalname)
});

const permanentUpload = multer({ storage: permanentStorage });
const broadcastUpload = multer({ storage: broadcastStorage });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.use('/uploads', express.static(path.join(__dirname, permanentUploadsDir)));
app.use('/broadcast', express.static(path.join(__dirname, broadcastDir)));



app.post('/upload', permanentUpload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');
    console.log(`Permanent file uploaded: ${req.file.originalname}`);
    res.json({ message: 'File uploaded successfully!', filename: req.file.originalname });
});


app.post('/upload-broadcast', broadcastUpload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');
    console.log(`Broadcast file uploaded: ${req.file.originalname}`);
    res.json({ message: 'File broadcasted successfully!', filename: req.file.originalname });
});


app.get('/files', (req, res) => {
    fs.readdir(permanentUploadsDir, (err, files) => {
        if (err) {
            console.error("Could not list permanent uploads directory.", err);
            return res.status(500).send('Server error');
        }
        res.json(files);
    });
});


app.get('/files-broadcast', (req, res) => {
    fs.readdir(broadcastDir, (err, files) => {
        if (err) {
            console.error("Could not list broadcast directory.", err);
            return res.status(500).send('Server error');
        }
        res.json(files);
    });
});


app.listen(port, () => {
    const interfaces = os.networkInterfaces();
    let localIp = 'localhost';

    Object.keys(interfaces).forEach(ifaceName => {
        interfaces[ifaceName].forEach(iface => {
            if ('IPv4' !== iface.family || iface.internal !== false) return;
            localIp = iface.address;
        });
    });
    
    const serverUrl = `http://${localIp}:${port}`;

    console.log('-------------------------------------------');
    console.log('🚀 Flash Transfer LAN Server is RUNNING!');
    console.log(`💻 On this PC, open your browser to: http://localhost:${port}`);
    console.log(`📱 On other devices (Phone, Laptop), connect to: ${serverUrl}`);
    console.log('-------------------------------------------');

    qrcode.toString(serverUrl, {type:'terminal', small: true}, (err, url) => {
        if (err) throw err
        console.log("Or scan this QR code with your phone's camera:");
        console.log(url)
    });
});


