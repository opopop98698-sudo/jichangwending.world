const fs = require("fs");
const crypto = require("crypto");

const files = [
  { name: "28个机场品牌清单.txt", expectedHash: "b1930a88619da8a89fc2441f94d5eafd2357e5c9915f8cdd3b4fab4d32938dc0", expectedSize: 46795 },
  { name: "14个机场品牌清单.txt", expectedHash: "ded2665b22368b624c057bf9f204709a9a2643118684ac980d6aace9b46a411b", expectedSize: 33437 },
  { name: "机场品牌图表样式(1).txt", expectedHash: "b19a3239602fd9971c55709f4f6a853ec47358a3e16b48f521ce88949f756be2", expectedSize: 9133 },
  { name: "内容矩阵.txt", expectedHash: "b6920506079c2645e396219dca786823966f363bcc9e8572ff8cbadd3b551de8", expectedSize: 5549 }
];

for (const f of files) {
  const p = "sources/inbox/" + f.name;
  let str = fs.readFileSync(p, "utf8");
  str = str.replace(/\r?\n/g, "\r\n");

  // Try appending \r\n combinations to see if hash matches
  let matched = false;
  for (let extra = 0; extra <= 6; extra++) {
    const candidate = str + "\r\n".repeat(extra);
    const buf = Buffer.from(candidate, "utf8");
    const hash = crypto.createHash("sha256").update(buf).digest("hex");
    if (hash === f.expectedHash) {
      console.log(`MATCHED ${f.name} with ${extra} extra CRLF!`);
      fs.writeFileSync(p, buf);
      matched = true;
      break;
    }
  }
  if (!matched) {
    const buf = Buffer.from(str, "utf8");
    const hash = crypto.createHash("sha256").update(buf).digest("hex");
    console.log(`${f.name}: size=${buf.length} (expected ${f.expectedSize}), hash=${hash} (match: ${hash === f.expectedHash})`);
  }
}
