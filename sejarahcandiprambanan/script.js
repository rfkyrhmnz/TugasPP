// Mendapatkan tombol dan teks yang akan dibacakan
const speakButton = document.getElementById('speakButton');
const hiddenText = document.getElementById('hidden-text');

// Fungsi untuk membacakan teks yang tersembunyi
function speakText() {
    const speech = new SpeechSynthesisUtterance();
    speech.text = hiddenText.innerText; // Ambil teks dari elemen yang tersembunyi
    speech.lang = 'id-ID'; // Menentukan bahasa Indonesia untuk suara
    speech.volume = 1; // Volume (0-1)
    speech.rate = 1; // Kecepatan (0.1-10)
    speech.pitch = 1; // Nada suara (0-2)

    // Memulai pembacaan suara
    window.speechSynthesis.speak(speech);
}

// Menambahkan event listener ke tombol untuk memulai pembacaan teks
speakButton.addEventListener('click', speakText);
