const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./app/models");
const AuctionController = require("./app/controllers/auction.controller");

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const run = async () => {
  await AuctionController.create({
    title: "Elegancka sukienka wieczorowa",
    description:
      "Idealna na specjalne okazje! Zachwycający fason, wysoka jakość materiału i perfekcyjne wykończenia. Będziesz błyszczeć na każdym przyjęciu w tej pięknej sukience!",
    price: "250",
  });

  await AuctionController.create({
    title: "Nowy iPhone X",
    description:
      "Oryginalne opakowanie, bez otarć! Oferuję nowy, nieużywany iPhone X w oryginalnym opakowaniu. Wyjątkowy smartfon z najnowszymi funkcjami, zapewniający wyjątkowe doświadczenia użytkowania.",
    price: "3000",
  });

  await AuctionController.create({
    title: "Klasyczny zegarek męski marki Rolex",
    description:
      "Doskonały prezent dla prawdziwego dżentelmena! Luksusowy zegarek z renomowanej marki Rolex, z precyzyjnym mechanizmem i niepowtarzalnym designem. Wyjątkowy detal, który podkreśli Twój styl!",
    price: "8000",
  });

  await AuctionController.create({
    title: "Zestaw narzędzi profesjonalnych",
    description:
      "Wszystko, czego potrzebujesz do naprawy domu! Kompletny zestaw narzędzi do domowego warsztatu, zapewniający precyzyjne i skuteczne naprawy. Wysoka jakość narzędzi, które posłużą Ci przez wiele lat!",
    price: "500",
  });

  await AuctionController.create({
    title: "Kolekcja limitowana figurek Star Wars",
    description:
      "Dla prawdziwych fanów sagi! Wyjątkowy zestaw kolekcjonerskich figurek z motywami z kultowej sagi Star Wars. Doskonały prezent dla miłośników kosmicznych przygód!",
    price: "350",
  });

  await AuctionController.create({
    title: "Luksusowy portfel damski od Chanel",
    description:
      "Niepowtarzalny design i wysoka jakość! Wyjątkowy portfel marki Chanel, wykonany z najwyższej jakości materiałów, z niepowtarzalnym wzornictwem. Dodaj odrobinę luksusu do swojej garderoby!",
    price: "1000",
  });

  await AuctionController.create({
    title: "Rower górski marki Trek",
    description:
      "Doskonałe wyposażenie dla pasjonatów aktywnego stylu życia! Profesjonalny rower górski marki Trek, zapewniający wygodę i bezpieczeństwo na szlakach i trasach górskich. Gotowy do nowych przygód na dwóch kółkach!",
    price: "3000",
  });
  await AuctionController.create({
    title: "Zestaw kosmetyków naturalnych",
    description:
      "Dla miłośników ekologicznej pielęgnacji! Ekskluzywny zestaw kosmetyków naturalnych, wolnych od szkodliwych substancji, które zadbasz o swoją skórę w ekologiczny sposób. Odkryj moc natury dla swojego piękna!",
    price: "200",
  });
};

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});

app.get("/auctions", async (req, res) => {
  try {
    const showAll = await AuctionController.findAll();

    res.json(showAll);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("App listen on port 3000");
});
