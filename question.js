const axios = require("axios");

listActress = [
  { name: "Hirose Hina", id: "2", point: 0 },
  { name: "Sasaki Saki", id: "7", point: 0 },
  { name: "Asano Kokoro", id: "10", point: 0 },
  { name: "Satou Shio", id: "11", point: 0 },
  { name: "Kasai Reona", id: "12", point: 0 },
  { name: "Nanase Arisu", id: "13", point: 0 },
  { name: "Kusunoki Erisa", id: "14", point: 0 },
  { name: "Igarashi Natsu", id: "16", point: 0 },
  { name: "Kasui Jun", id: "17", point: 0 },
  { name: "Azusa Hikari", id: "18", point: 0 },
  { name: "Asahi rio", id: "19", point: 0 },
  { name: "Shiromine Miu", id: "20", point: 0 },
  { name: "Hayama Sayuri", id: "21", point: 0 },
  { name: "Kaede Karen", id: "22", point: 0 },
  { name: "Kawakita Saika", id: "23", point: 0 },
  { name: "Hirose Yuri", id: "24", point: 0 },
  { name: "Nishino Emi", id: "25", point: 0 },
  { name: "Kiyomi Reno", id: "28", point: 0 },
  { name: "kuroshima-rei", id: "29", point: 0 },
  { name: "Kaede Fuua", id: "30", point: 0 },
  { name: "tsubasa Mai", id: "31", point: 0 },
  { name: "Kamiki Rei", id: "32", point: 0 },
  { name: "Kurumi Sakura", id: "33", point: 0 },
  { name: "Itsukaichi Mei", id: "35", point: 0 },
  { name: "Hayano Uta", id: "36", point: 0 },
  { name: "Tsukino Kasumi", id: "38", point: 0 },
  { name: "Kasumi Riko", id: "39", point: 0 },
  { name: "Kasumi Haruka", id: "40", point: 0 },
  { name: "Takara", id: "41", point: 0 },
  { name: "Aoi Tsukasa", id: "42", point: 0 },
  { name: "Nagarekawa Rio", id: "43", point: 0 },
  { name: "Sannomiya Tsubaki", id: "44", point: 0 },
  { name: "Ono Yuuko", id: "45", point: 0 },
  { name: "Mino Suzume", id: "46", point: 0 },
  { name: "Misaki Nanami", id: "47", point: 0 },
  { name: "Suzumori Remu", id: "48", point: 0 },
  { name: "Itou Mayuki", id: "50", point: 0 },
  { name: "Ashitaba Mitsuha", id: "51", point: 0 },
  { name: "hinako-mori", id: "52", point: 0 },
  { name: "sakino-mirai", id: "53", point: 0 },
  { name: "Murakami Yuuka", id: "54", point: 0 },
  { name: "Shiina Kokoha", id: "55", point: 0 },
  { name: "Kurimiya Futaba", id: "56", point: 0 },
  { name: "yuuhina-emiri", id: "57", point: 0 },
  { name: "Murakami Yuuka", id: "58", point: 0 },
  { name: "Yoshitaka Nene", id: "60", point: 0 },
  { name: "Totsuka Ruu", id: "61", point: 0 },
  { name: "yoshinaga-konomi", id: "62", point: 0 },
  { name: "Nishimiya Yume", id: "63", point: 0 },
  { name: "MINAMO", id: "64", point: 0 },
  { name: "asakura-kokona", id: "66", point: 0 },
  { name: "adachi-yuri", id: "67", point: 0 },
  { name: "Sayaka Hoshino", id: "68", point: 0 },
  { name: "Aina Aoyama", id: "69", point: 0 },
  { name: "Katou Hino", id: "72", point: 0 },
  { name: "Tsukumo Yoru", id: "73", point: 0 },
  { name: "Tenma Yui", id: "74", point: 0 },
  { name: "Miyamoto Rui", id: "75", point: 0 },
  { name: "Yukihira Mio", id: "76", point: 0 },
  { name: "Yumemi Kanae", id: "77", point: 0 },
  { name: "Serizawa Nagi", id: "78", point: 0 },
  { name: "konno-miina", id: "79", point: 0 },
  { name: "kuno-hinano", id: "81", point: 0 },
  { name: "mihama-miki", id: "82", point: 0 },
  { name: "Atsushi Nonoura", id: "83", point: 0 },
  { name: "Shiragami Sakihana", id: "84", point: 0 },
  { name: "Kosaka Nanaka", id: "85", point: 0 },
  { name: "Haruhi Moka", id: "86", point: 0 },
  { name: "Mirei Shinonome", id: "88", point: 0 },
  { name: "Mami Mashiro", id: "89", point: 0 },
  { name: "Rio kuriyama", id: "90", point: 0 },
  { name: "Koharu Shiina", id: "91", point: 0 },
  { name: "Satsuki Nao", id: "92", point: 0 },
  { name: "Takashima Megumi", id: "93", point: 0 },
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
