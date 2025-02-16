import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./LoveLetter.css"; // Ensure this includes the flip effect

function LoveLetter() {
  const [flipped, setFlipped] = useState(false);
  const [page, setPage] = useState(1);

  const loveLetters = [
    {
      title: "Valentine’s Day 💖",
      receiver: "To: 林林BB 💕",
      date: "14 Feb 2025",
      messages: [
        "Meow 🐱 Hello 林林, 寫緊依段文係情人節前兩日, 好開心可以同林林過我地嘅第一個情人節 💖。依個網係十二月尾就開始design, 個時我就信我地會一齊, 因為我愛你 💕。提示: 右下角個箭嘴 ➡️ 係下一頁同上一頁, 個postcard未咁快完 😆！",

  "依個postcard 🎴 係札幌送比你 (個封面係札幌 ❄️🏔️), 好多謝林林同我去北海道, 因為北海道對我黎講係一個好特別嘅地方 。係一個會同愛一生一世 💑 嘅人去依個咁浪漫嘅地方 💞, 加上我可以帶林林第一次睇雪 ☃️❄️。同埋係咁冷嘅地方 🥶, 可以保護林林 🤗, 幫林林保暖, 幫林林拎野 💪, 我個下好幸福 🥰。成個旅程最開心應該係同你去溫泉酒店 ♨️ 同去食 omakase 🍣, 因為都係第一次 。成日都想同林林試唔同嘅第一次 💑, 就好似上面個 timeline 咁。再諗番我好多野都係因為你先做, 例如做 ha 💼, 因為想林林可以唔洗番工 🏡 同有更好嘅生活 💰。如果唔係你, 可能我都好hea咁揾工 。",
  "所以你成日話我好上進 , 但其實係因為你, 我先上進 💪。以前D女朋友叫我上進D, 讀好書 📚, 我都無理佢 🤷‍♂️。所以諗番其實係因為愛你 ❤️, 先咁上進, 仲有我無送過女朋友禮物 🎁, 更加唔會搞D儀式感嘅野 🎀, 係因為愛林林, 我先肯做咁多野, 因為我想見到林林開心 😘。",

  "你成日話你樣衰 🙈, 唔可愛 🥺, 無身材 😶, 但我想講你又靚女 💃 又可愛 🥰, 有身材 😏, 唔係大話！同埋我愛你 💖, 唔係因為你係最可愛, 最靚女, 最有身材 🏆。係因為愛你先覺得你係最可愛 💞, 最靚女 😘, 最有身材 😍！好似首歌 'Sukidakara'  咁講:「我並不是因為你很可愛所以才喜歡上你的。而是因為我喜歡你所以才會覺得你很可愛。」💗 我愛你係講唔到因為你符合左咩條件, 我先愛你 💑。係因為你獨一無二 🌟, 我同你有種代替唔到嘅經歷 💞。就算我唔信所謂命中注定, 我都覺得你係我命中注定 💍！依種先叫愛 ❤️, 唔會因為有人比你好, 所以我就唔愛你。所以唔洗驚我被人搶走 🙅‍♂️, 因為我只愛你一個 💕！你係我命中注定 💏！",

  "首 boohi 嘅 Now, I'm going from underground  係送比你 。你成日問我點解唔笑 😐, 「若我此刻、我身處、地面之下, 想要微笑卻無法用微笑 😞 還請給我這個扭曲的人愛吧! 💔」。最後我想同林林講, 我送左 33 朵紅玫瑰 🌹🌹🌹 比你, 代表愛你三生三世 ❤️‍🔥, 咁我就可以每年都同你過情人節 🎊💖！Enjoy Valentine's Day 💘！"
      ],
      image: "https://y1plau.github.io/valentines-website/postcard.jpg",
    },
    {
      title: "Valentine’s Day 💖",
      receiver: "To: 基基BB",
      date: "14 Feb 2025",
      messages: [
        "基基BB:\n\n 💖情人節快樂💖話咁快已經一齊咗一年半,到宜家見到你仲系好靚仔。多謝你成日陪我,我覺得好窩心同好幸福搞到我成日都想痴住你。見到個摩天輪音樂盒令我諗番第一次同你出街,好有回憶,多謝你帶我見識呢個世界,未來繼續拖實大家去探索更多~💖 \n\n💖林林💖",
      ],
      image: "https://y1plau.github.io/valentines-website/catpostcard.jpg",
    },
  ];

  return (
    <Swiper
  pagination={{ clickable: true }}
  modules={[Pagination]}
  className="hero-slider"
  style={{ width: "100%", height: "100vh" }}
  onSlideChange={() => setPage(1)} // Reset page to 1 when changing slides
>
      {loveLetters.map((letter, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              textAlign: "center",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Title, Receiver, and Date */}
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
              {letter.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              {letter.receiver}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "white" }}>
              {letter.date}
            </Typography>

            {/* Flip Card */}
            <Box
              className={`flip-card ${flipped ? "flipped" : ""}`}
              onClick={() => setFlipped(!flipped)}
            >
              <Box className="flip-card-inner">
                {/* Front */}
                <Box
                  className="flip-card-front"
                  sx={{
                    backgroundImage: `url('${letter.image}')`,
                    backgroundPosition: "center",
                    border: "10px solid white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    width: "100%",
                    height: "100%",
                  }}
                />

                {/* Back */}
                <Box
                  className="flip-card-back"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  <Typography
  variant="body1"
  sx={{
    fontSize: {
      xs: "12px", // Smallest screens (mobile)
      sm: "16px", // Small tablets
      md: "18px", // Regular tablets
      lg: "20px", // Laptops
      xl: "22px", // Large screens
    },
    height:"80%",
    color: "black",
    whiteSpace: "pre-line",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    textAlign: "left",
    maxHeight: "100%",
    overflowY: "auto",
  }}
>
                    {letter.messages[page - 1]}
                  </Typography>

                  {/* Page Navigation Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "100%",
                      position: "absolute",
                      bottom: "20px",
                      right: "20px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPage(page - 1);
                      }}
                      disabled={page === 1}
                      sx={{ marginRight: "10px" }}
                    >
                      <i className="fas fa-arrow-left"></i>
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPage(page + 1);
                      }}
                      disabled={page === letter.messages.length}
                    >
                      <i className="fas fa-arrow-right"></i>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LoveLetter;
