const axios = require("axios");

listActress = [
  { name: "Hirose Hina", id: "2", point: 3 },
  { name: "Sasaki Saki", id: "7", point: 5 },
  { name: "Asano Kokoro", id: "10", point: 9 },
  { name: "Satou Shio", id: "11", point: 3 },
  { name: "Kasai Reona", id: "12", point: 2 },
  { name: "Nanase Arisu", id: "13", point: 2 },
  { name: "Kusunoki Erisa", id: "14", point: 8 },
  { name: "Igarashi Natsu", id: "16", point: 1 },
  { name: "Kasui Jun", id: "17", point: 9 },
  { name: "Azusa Hikari", id: "18", point: 3 },
  { name: "Asahi rio", id: "19", point: 5 },
  { name: "Shiromine Miu", id: "20", point: 8 },
  { name: "Hayama Sayuri", id: "21", point: 1 },
  { name: "Kaede Karen", id: "22", point: 3 },
  { name: "Kawakita Saika", id: "23", point: 4 },
  { name: "Hirose Yuri", id: "24", point: 7 },
  { name: "Nishino Emi", id: "25", point: 7 },
  { name: "Kiyomi Reno", id: "28", point: 6 },
  { name: "kuroshima-rei", id: "29", point: 8 },
  { name: "Kaede Fuua", id: "30", point: 4 },
  { name: "tsubasa Mai", id: "31", point: 2 },
  { name: "Kamiki Rei", id: "32", point: 10 },
  { name: "Kurumi Sakura", id: "33", point: 10 },
  { name: "Itsukaichi Mei", id: "35", point: 10 },
  { name: "Hayano Uta", id: "36", point: 2 },
  { name: "Tsukino Kasumi", id: "38", point: 3 },
  { name: "Kasumi Riko", id: "39", point: 1 },
  { name: "Kasumi Haruka", id: "40", point: 1 },
  { name: "Takara", id: "41", point: 4 },
  { name: "Aoi Tsukasa", id: "42", point: 8 },
  { name: "Nagarekawa Rio", id: "43", point: 10 },
  { name: "Sannomiya Tsubaki", id: "44", point: 1 },
  { name: "Ono Yuuko", id: "45", point: 5 },
  { name: "Mino Suzume", id: "46", point: 3 },
  { name: "Misaki Nanami", id: "47", point: 8 },
  { name: "Suzumori Remu", id: "48", point: 6 },
  { name: "Itou Mayuki", id: "50", point: 4 },
  { name: "Ashitaba Mitsuha", id: "51", point: 8 },
  { name: "hinako-mori", id: "52", point: 10 },
  { name: "sakino-mirai", id: "53", point: 2 },
  { name: "Murakami Yuuka", id: "54", point: 10 },
  { name: "Shiina Kokoha", id: "55", point: 8 },
  { name: "Kurimiya Futaba", id: "56", point: 3 },
  { name: "yuuhina-emiri", id: "57", point: 7 },
  { name: "Murakami Yuuka", id: "58", point: 1 },
  { name: "Yoshitaka Nene", id: "60", point: 4 },
  { name: "Totsuka Ruu", id: "61", point: 3 },
  { name: "yoshinaga-konomi", id: "62", point: 3 },
  { name: "Nishimiya Yume", id: "63", point: 3 },
  { name: "MINAMO", id: "64", point: 10 },
  { name: "asakura-kokona", id: "66", point: 8 },
  { name: "adachi-yuri", id: "67", point: 3 },
  { name: "Sayaka Hoshino", id: "68", point: 9 },
  { name: "Aina Aoyama", id: "69", point: 7 },
  { name: "Katou Hino", id: "72", point: 8 },
  { name: "Tsukumo Yoru", id: "73", point: 6 },
  { name: "Tenma Yui", id: "74", point: 8 },
  { name: "Miyamoto Rui", id: "75", point: 3 },
  { name: "Yukihira Mio", id: "76", point: 5 },
  { name: "Yumemi Kanae", id: "77", point: 7 },
  { name: "Serizawa Nagi", id: "78", point: 9 },
  { name: "konno-miina", id: "79", point: 7 },
  { name: "kuno-hinano", id: "81", point: 3 },
  { name: "mihama-miki", id: "82", point: 6 },
  { name: "Atsushi Nonoura", id: "83", point: 9 },
  { name: "Shiragami Sakihana", id: "84", point: 1 },
  { name: "Kosaka Nanaka", id: "85", point: 4 },
  { name: "Haruhi Moka", id: "86", point: 7 },
  { name: "Mirei Shinonome", id: "88", point: 7 },
  { name: "Mami Mashiro", id: "89", point: 9 },
  { name: "Rio kuriyama", id: "90", point: 9 },
  { name: "Koharu Shiina", id: "91", point: 1 },
  { name: "Satsuki Nao", id: "92", point: 7 },
  { name: "Takashima Megumi", id: "93", point: 1 },
];
const data = listActress;
// console.log("🚀 ~ data:", data);

const apiUrl = "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/actress";

async function pushQuestionsToAPI() {
  try {
    for (let i = 0; i < listActress.length; i += 20) {
      const chunk = listActress.slice(i, i + 20); // Chia mảng thành các phần tử nhỏ, mỗi phần có tối đa 25 phần tử

      for (const question of chunk) {
        const response = await axios.post(apiUrl, question);
        console.log("Đối tượng đã được đẩy lên API:", response.data);
      }

      // Chờ 10 giây trước khi gửi tiếp
      if (i + 20 < listActress.length) {
        await new Promise((resolve) => setTimeout(resolve, 15000));
      }
    }
  } catch (error) {
    console.error("Lỗi:", error.message);
  }
}

pushQuestionsToAPI();
