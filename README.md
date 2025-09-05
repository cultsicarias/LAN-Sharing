Flash Transfer v2
Flash Transfer is a simple, private, and high-speed file sharing application that runs entirely on your local network. It allows you to transfer files between any devices (PC, Mac, Android, iOS) that are connected to the same WiFi, using only a web browser.

The core principle is that one computer runs a lightweight server, and any other device can connect to it through a simple web page, enabling two-way file transfers at the maximum speed your network can handle.

✨ Key Features
Blazing Fast Speeds: Transfers files at the speed of your local network (up to 1 Gbps or more), bypassing slow internet uploads.

Real-time Speed Monitoring: See the actual transfer rate in Megabits per second (Mbps) as you upload.

Cross-Platform: Works on any device with a modern web browser. No need to install separate apps on your phone or other computers.

Dual Upload Modes:

Permanent: Save files for long-term access.

Broadcast: Share files temporarily with anyone on the network.

100% Private: Your files never leave your home or office network. No cloud servers are involved, ensuring complete privacy and security.

Easy Mobile Access: A QR code is generated in the terminal on startup, allowing you to connect from your phone instantly.

Simple Setup: Requires only Node.js on the host machine.

🎯 Use Cases & Advantages
This tool is ideal for situations where you need to move files quickly and privately within a local network.

Use Case

Advantage over Other Methods

Moving photos & videos from your phone to your PC.

Speed & Simplicity: Drastically faster than waiting for cloud sync (iCloud/Google Photos) and doesn't require a USB cable.

Sharing large project files between two laptops.

No Size Limits: Effortlessly transfer gigabyte-sized files that are too large for email or free cloud services.

Temporarily sharing a document with colleagues in a meeting.

Convenience: Use the "Broadcast" feature. Others can download the file without you needing to email it to everyone.

Transferring files to a device with limited cloud access.

Direct Connection: Perfect for work computers or devices where you can't or don't want to log in to personal accounts.

🚀 Getting Started
Follow these steps to get your Flash Transfer server up and running.

Prerequisites
You must have Node.js installed on the computer that will act as the server. If you don't have it, download the "LTS" version from nodejs.org.

Setup Instructions
Create a Project Folder: Create a new folder for your project (e.g., FlashTransfer).

Add Project Files: Place the server.js and index.html files inside this folder.

Open a Terminal:

On Windows, open Command Prompt or PowerShell.

Navigate into your project folder. For example:

cd C:\Users\YourName\Desktop\FlashTransfer

Install Dependencies: Run the following commands one by one in your terminal. This will download the required libraries for the server to work.

npm install express multer qrcode

Start the Server: Run the final command to launch the application:

node server.js

You're Live! Your terminal will display a confirmation message with the server address and a QR code. Keep this terminal window open.

🚀 Flash Transfer Server v2 is RUNNING! <br>
💻 On this PC, open your browser to: http://localhost:3000 <br>
📱 On other devices (Phone, Laptop), connect to: [http://192.168.1.10:3000](http://192.168.1.10:3000) <br>

Or scan this QR code with your phone's camera:
<QR code appears here>
-------------
How to Use
-------------
Connect Your Device: On your mobile phone or another computer, either scan the QR code with your camera or open a web browser and type in the server's local IP address (e.g., http://192.168.1.10:3000).

Send Files: Drag and drop a file into the upload area or click to select one. Choose "Permanent" or "Broadcast" mode and click "Upload File".

Receive Files: Any uploaded file will appear in the "Broadcast Files" or "Permanent Files" lists on the webpage, ready to be downloaded by any connected device.

🛠️ Technology Stack
Backend: Node.js, Express.js

File Handling: Multer

Frontend: HTML, Tailwind CSS

QR Code Generation: qrcode
