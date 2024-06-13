// script.js

// Пример базы данных номеров телефонов
const phoneDatabase = {
    "1234567890": "Valid",
    "0987654321": "Spam",
    "1122334455": "Valid",
    "2233445566": "Spam"
};

// Функция для проверки номера телефона
function checkPhoneNumber(phoneNumber) {
    if (phoneDatabase[phoneNumber]) {
        alert(`Номер телефона ${phoneNumber} является ${phoneDatabase[phoneNumber]}.`);
    } else {
        alert("Номер телефона не найден в базе данных.");
    }
}

// Функция для проверки URL
function checkUrl(url) {
    try {
        new URL(url);
        alert("Ссылка корректна.");
    } catch (_) {
        alert("Неверная ссылка.");
    }
}

// Функция для проверки файлов (пример простой проверки по хэшу)
const maliciousHashes = ["5d41402abc4b2a76b9719d911017c592"]; // Пример хэша для проверки

function hashFile(file, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = event.target.result;
        const hash = md5(data); // Функция для получения MD5 хэша
        callback(hash);
    };
    reader.readAsBinaryString(file);
}

function checkFile(file) {
    hashFile(file, (hash) => {
        if (maliciousHashes.includes(hash)) {
            alert("Файл вредоносный.");
        } else {
            alert("Файл безопасен.");
        }
    });
}

// Обработчики форм
document.addEventListener('DOMContentLoaded', () => {
    const phoneForm = document.querySelector('.phone-check form');
    if (phoneForm) {
        phoneForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const phoneInput = phoneForm.querySelector('#phone');
            checkPhoneNumber(phoneInput.value);
        });
    }

    const urlForm = document.querySelector('.url-check form');
    if (urlForm) {
        urlForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const urlInput = urlForm.querySelector('#url');
            checkUrl(urlInput.value);
        });
    }

    const fileForm = document.querySelector('.file-check form');
    if (fileForm) {
        fileForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const fileInput = fileForm.querySelector('#file').files[0];
            if (fileInput) {
                checkFile(fileInput);
            } else {
                alert("Выберите файл для проверки.");
            }
        });
    }
});

// Простая реализация MD5 хэша для примера
function md5(string) {
    function md5cycle(x, k) {
        // ... (алгоритм MD5)
    }
    function cmn(q, a, b, x, s, t) {
        // ... (алгоритм MD5)
    }
    function ff(a, b, c, d, x, s, t) {
        // ... (алгоритм MD5)
    }
    function gg(a, b, c, d, x, s, t) {
        // ... (алгоритм MD5)
    }
    function hh(a, b, c, d, x, s, t) {
        // ... (алгоритм MD5)
    }
    function ii(a, b, c, d, x, s, t) {
        // ... (алгоритм MD5)
    }
    function md51(s) {
        // ... (алгоритм MD5)
    }
    function md5blk(s) {
        // ... (алгоритм MD5)
    }
    function rhex(n) {
        // ... (алгоритм MD5)
    }
    function hex(x) {
        // ... (алгоритм MD5)
    }
    return hex(md51(string));
}
