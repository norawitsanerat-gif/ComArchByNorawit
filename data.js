/* ==========================================================================
   CA — Computer Architecture · Stored-Program Concept & ISA
   + ระบบเลข signed/unsigned, Two's Complement, Hex และ Overflow
   (Thai-first with EN terms) — รูปแบบเดียวกับเทมเพลต CN
   ========================================================================== */
window.DATA = {

  /* Slide metadata: title แสดงใน sidebar + aria-label */
  slides: [
    { title: "Cover — Stored-Program Concept & ISA", short: "เปิดบทเรียน" },
    { title: "เราจะเรียนอะไรบ้าง", short: "ภาพรวมบทเรียน" },
    { title: "ISA คืออะไร?", short: "ISA คืออะไร?" },
    { title: "Stored-Program Concept", short: "Stored-Program" },
    { title: "Program Counter (PC)", short: "PC คืออะไร" },
    { title: "MIPS คืออะไร?", short: "MIPS คืออะไร?" },
    { title: "ทำไมต้องมี Assembly?", short: "Assembly คืออะไร" },
    { title: "Instruction คืออะไร?", short: "Instruction" },
    { title: "MIPS Instruction Formats (R/I/J)", short: "รูปแบบคำสั่ง 3 แบบ" },
    { title: "ทำไม Instruction ต้องเป็น 32 bits?", short: "ทำไม 32 bits" },
    { title: "Bit คืออะไร และ N-bit เก็บค่าได้กี่แบบ", short: "Bit & N-bit" },
    { title: "เลขฐานสองทีละขั้น — ค่าประจำตำแหน่ง 8|4|2|1", short: "Binary ทีละขั้น" },
    { title: "เลขฐาน 2 / 10 / 16 — แปลงไปมาให้คล่อง", short: "แปลงเลขฐาน" },
    { title: "Unsigned Range และการหาจำนวนบิตที่ต้องใช้", short: "Unsigned Range" },
    { title: "Signed Range, MSB และ Sign Bit", short: "Signed Range" },
    { title: "Two's Complement — แปลงเป็นค่าลบ (ไปและกลับ)", short: "Two's Complement" },
    { title: "บวก-ลบเลข Signed/Unsigned, Overflow และ ERR", short: "Overflow & ERR" },
    { title: "เครื่องคิดเลขพื้นฐาน — คิดเลขในห้องสอบโดยไม่พึ่งเครื่องวิทยาศาสตร์", short: "เครื่องคิดเลขพื้นฐาน" },
    { title: "ช่วงค่าครบชุด — 4, 6, 8, 16, 32 บิต", short: "ช่วงค่าครบชุด" },
    { title: "บวก-ลบ Fixed Width — กติกาทั้ง 4 แบบ", short: "กติกาบวก-ลบ" },
    { title: "ระบบ 32 บิต — ช่วงกว้างกว่า กติกาเหมือนเดิม", short: "32 บิต" },
    { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
    { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
    { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
    { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
    { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
    { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
    { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" },
    { title: "เฉลยข้อสอบ 20 ข้อ (ข้อ 1–10) — ทำทีละขั้น", short: "เฉลยข้อ 1–10" },
    { title: "เฉลยข้อสอบ 20 ข้อ (ข้อ 11–20) — ทำทีละขั้น", short: "เฉลยข้อ 11–20" }
  ],

  /* Sidebar structure: slide indices 1-based */
  sections: [
    { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
    { label: "1. แนวคิด ISA", topics: [3, 4] },
    { label: "2. การทำงานของ CPU", topics: [5, 6] },
    { label: "3. ภาษาเครื่องและคำสั่ง", topics: [7, 8] },
    { label: "4. รูปแบบคำสั่ง MIPS", topics: [9, 10] },
    { label: "5. ระบบเลข & Two's Complement", topics: [11, 12, 13, 14, 15, 16, 17] },
    { label: "6. ช่วงค่า & การคำนวณ", topics: [18, 19, 20, 21] },
    { label: "ทบทวนและฝึกฝน", topics: [22, 23, 24, 25, 26, 27] },
    { label: "ข้อสอบหลังเรียน", topics: [28] },
    { label: "เฉลยละเอียดทีละขั้น", topics: [29, 30] }
  ],

  /* Slide 2 — roadmap cards */
  roadmap: [
    { icon: "cpu", title: "ISA — ภาษาของ CPU", desc: "กฎที่บอก CPU ว่าต้องทำอะไร เป็นตัวกลางระหว่าง Software กับ Hardware" },
    { icon: "database", title: "Stored-Program", desc: "ทั้งข้อมูลและคำสั่งโปรแกรมเก็บอยู่ใน Memory เดียวกัน" },
    { icon: "gauge", title: "Program Counter (PC)", desc: "Register ที่เก็บ Address ของคำสั่งถัดไปที่ CPU จะทำ" },
    { icon: "monitor", title: "MIPS", desc: "ตัวอย่าง ISA ที่ใช้เรียน — คำสั่งมีขนาด 32 bits" },
    { icon: "code-2", title: "Assembly", desc: "ภาษาที่มนุษย์อ่านง่าย ก่อนถูกแปลงเป็น Machine Language" },
    { icon: "list", title: "Instruction", desc: "คำสั่ง เช่น add, sub, lw, sw, beq — บอก CPU ให้ทำอะไร" },
    { icon: "layout-grid", title: "R / I / J Format", desc: "รูปแบบคำสั่ง MIPS 3 แบบที่ควรจำตั้งแต่บทแรก" },
    { icon: "calculator", title: "เลขฐาน & Two's Complement", desc: "signed/unsigned, แปลง Hex และการล้น (Overflow) — พื้นฐานของข้อสอบท้ายบท" }
  ],

  /* Slide 11 — summary cards */
  summary: [
    { icon: "cpu", title: "ISA", desc: "กฎที่บอก CPU ว่าต้องทำอะไร — ตัวกลาง Software ↔ Hardware" },
    { icon: "database", title: "Stored-Program", desc: "ข้อมูล + คำสั่งอยู่ใน Memory เดียวกัน" },
    { icon: "gauge", title: "PC", desc: "ชี้ไปยังคำสั่งถัดไป — ขยับทีละ 4 bytes" },
    { icon: "monitor", title: "MIPS", desc: "ตัวอย่าง ISA — คำสั่ง 32 bits = 4 bytes" },
    { icon: "code-2", title: "Assembly", desc: "มนุษย์อ่านง่าย ก่อนถูกแปลงเป็น Machine Language" },
    { icon: "list", title: "Instruction", desc: "add, sub, lw, sw, beq — บอก CPU ให้ทำอะไร" },
    { icon: "layout-grid", title: "R / I / J", desc: "Register · Immediate · Jump" },
    { icon: "calculator", title: "เลขฐาน & Two's Complement", desc: "signed/unsigned, Hex, การล้น (Overflow)" }
  ],

  /* ข้อมูลสไลด์ของ CN ที่ Com Arch ยังไม่ได้ใช้ — ปล่อยว่างไว้กัน init() แตก */
  whys: [], components: [], modes: [], topologies: [], scopes: [], media: [], stack: [], protocols: [], history: [],

  /* Slides 17–18 — quiz (10 questions) — สลับตำแหน่งคำตอบ + ตัวหลอกสมจริง */
  quiz: [
    {
      q: "ISA ย่อมาจากอะไร?",
      options: [
        "Integrated System Architecture",
        "Instruction Set Architecture",
        "Internet Standard Architecture",
        "Internal System Application"
      ],
      correct: 1,
      explain: "ISA = Instruction Set Architecture — กฎ/ภาษาที่ใช้บอก CPU ว่าให้ทำอะไร"
    },
    {
      q: "ข้อใดกล่าวถึง ISA ได้ถูกต้องที่สุด?",
      options: [
        "ฮาร์ดแวร์ชิ้นหนึ่งที่อยู่ภายใน CPU",
        "ภาษาโปรแกรมระดับสูง เช่น Python หรือ Java",
        "กฎหรือภาษาที่บอก CPU ว่าต้องทำอะไร",
        "ซอฟต์แวร์ระบบปฏิบัติการที่ติดตั้งในเครื่อง"
      ],
      correct: 2,
      explain: "ISA เป็นเหมือนตัวกลางระหว่าง Software กับ Hardware — โปรแกรมถูกแปลงลงมาเป็นคำสั่งระดับต่ำที่ CPU เข้าใจ"
    },
    {
      q: "Stored-Program Concept หมายถึงอะไร?",
      options: [
        "โปรแกรมต้องโหลดจากสื่อภายนอกทุกครั้งก่อนรัน",
        "CPU เก็บข้อมูลไว้ในแคชเท่านั้น",
        "ข้อมูลและคำสั่งต้องแยกเก็บไว้คนละเครื่อง",
        "ทั้งข้อมูลและคำสั่งโปรแกรมสามารถเก็บอยู่ใน Memory ได้"
      ],
      correct: 3,
      explain: "แนวคิดสำคัญ: ทั้ง \"ข้อมูล\" และ \"คำสั่งโปรแกรม\" เก็บอยู่ใน Memory (RAM) ได้ — CPU อ่านคำสั่งแล้วทำทีละคำสั่ง"
    },
    {
      q: "PC (Program Counter) ทำหน้าที่อะไร?",
      options: [
        "เก็บ Address ของคำสั่งที่ CPU จะทำถัดไป",
        "เก็บผลลัพธ์ของการคำนวณ",
        "นับจำนวนข้อมูลทั้งหมดใน Memory",
        "ควบคุมความเร็วของสัญญาณนาฬิกาใน CPU"
      ],
      correct: 0,
      explain: "PC = Program Counter เป็น Register ที่เก็บ Address ของคำสั่งที่ CPU จะทำ — เช่น PC = 1000 → CPU ไปเอาคำสั่งที่ Address 1000 มาทำ"
    },
    {
      q: "คำสั่ง MIPS มีขนาดเท่าไหร่ และ PC จึงขยับทีละเท่าไหร่?",
      options: [
        "16 bits = 2 bytes, PC ขยับทีละ 2",
        "32 bits = 4 bytes, PC ขยับทีละ 4",
        "64 bits = 8 bytes, PC ขยับทีละ 8",
        "8 bits = 1 byte, PC ขยับทีละ 1"
      ],
      correct: 1,
      explain: "คำสั่ง MIPS มีขนาด 32 bits = 4 bytes — Memory เรียง 1000, 1004, 1008,... จึงห่างกัน 4 bytes เสมอ"
    },
    {
      q: "ทำไมต้องมีภาษา Assembly?",
      options: [
        "เพราะ Assembly ทำงานเร็วกว่า Machine Language",
        "เพราะ CPU เข้าใจได้เฉพาะภาษา Assembly",
        "เพราะ Assembly ไม่ต้องถูกแปลงเป็น Binary อีกต่อไป",
        "เพราะมนุษย์อ่าน Binary ลำบาก — Assembly อ่านเข้าใจง่ายกว่า"
      ],
      correct: 3,
      explain: "Binary เช่น 00000001001010100100000000100000 อ่านยากมาก 😅 — Assembly เช่น add $t0,$t1,$t2 อ่านง่ายกว่า แล้วจึงแปลงเป็น Machine Language"
    },
    {
      q: "คำสั่ง add $t0, $t1, $t2 หมายถึงอะไร?",
      options: [
        "$t0 = $t1 + $t2",
        "$t1 = $t0 + $t2",
        "$t2 = $t0 + $t1",
        "$t0 = $t1 × $t2"
      ],
      correct: 0,
      steps: [
        "ดูคำสั่ง add $t0, $t1, $t2 → รูปแบบคือ add rd, rs, rt",
        "ตัวแรกที่อยู่หลัง add คือ rd (ตัวรับผลลัพธ์) = $t0",
        "ตัวที่สองกับสามคือตัวบวก = $t1 + $t2",
        "สรุป: $t0 = $t1 + $t2"
      ],
      explain: "นำข้อมูลใน $t1 + ข้อมูลใน $t2 แล้วเก็บผลลัพธ์ไว้ที่ $t0"
    },
    {
      q: "ข้อใดคือตัวอย่างของ Instruction (คำสั่ง)?",
      options: [
        "if, else, for, while",
        "add, sub, lw, sw, beq",
        "int, float, char, bool",
        "http, ftp, smtp, dns"
      ],
      correct: 1,
      explain: "Instruction = คำสั่ง เช่น add (บวก), sub (ลบ), lw (โหลดจาก Memory), sw (เก็บลง Memory), beq (กระโดดถ้าเท่ากัน) — if/else/for เป็นภาษาระดับสูง, int/float เป็นชนิดข้อมูล, http/dns เป็นโปรโตคอล"
    },
    {
      q: "R-Format ใช้กับคำสั่งแบบใดเป็นหลัก?",
      options: [
        "คำสั่งที่มีค่าคงที่ (Immediate) อยู่ในตัว",
        "คำสั่งกระโดด (Jump) ไปยังตำแหน่งอื่น",
        "คำสั่งที่อ่านข้อมูลจากดิสก์เท่านั้น",
        "คำสั่งที่ทำงานกับ Register เช่น add, sub"
      ],
      correct: 3,
      explain: "R = Register — ใช้กับคำสั่งที่ทำงานกับ Register เป็นหลัก เช่น add, sub (มี Immediate = I-Format, กระโดด = J-Format)"
    },
    {
      q: "I-Format ใช้เมื่อใด?",
      options: [
        "เมื่อมีค่าตัวเลข (Immediate) อยู่ในคำสั่ง เช่น lw, sw",
        "เมื่อคำสั่งทำงานกับ Register อย่างเดียว",
        "เมื่อต้องการกระโดดไปยังตำแหน่งอื่น",
        "เมื่อคำสั่งมีความยาวเกิน 32 bits"
      ],
      correct: 0,
      explain: "I = Immediate — ใช้เมื่อมีค่าตัวเลข (ค่าคงที่) อยู่ในคำสั่ง เช่น lw, sw ส่วน J = Jump ใช้สำหรับการกระโดด"
    }
  ],

  /* Slide 16 — cheat sheet (study notes) */
  cheat: [
    { term: "ISA", def: "กฎที่บอก CPU ว่าต้องทำอะไร" },
    { term: "Stored-Program", def: "ข้อมูล + คำสั่งอยู่ใน Memory เดียวกัน" },
    { term: "PC", def: "ชี้ไปยังคำสั่งถัดไปที่จะทำ" },
    { term: "MIPS", def: "ตัวอย่าง ISA ที่ใช้เรียน" },
    { term: "1 คำสั่ง MIPS", def: "32 bits = 4 bytes" },
    { term: "PC ขยับ", def: "ทีละ 4 bytes" },
    { term: "Machine Language", def: "Binary ที่ CPU เข้าใจโดยตรง" },
    { term: "Assembly", def: "มนุษย์อ่านง่ายกว่า Binary" },
    { term: "add", def: "$t0 = $t1 + $t2" },
    { term: "lw", def: "โหลดจาก Memory" },
    { term: "sw", def: "เก็บลง Memory" },
    { term: "beq", def: "กระโดดถ้าเท่ากัน" },
    { term: "R-Format", def: "Register — add, sub" },
    { term: "I-Format", def: "Immediate — lw, sw" },
    { term: "J-Format", def: "Jump — j" },
    { term: "ISA เป็น", def: "ตัวกลาง Software ↔ Hardware" },
    { term: "Unsigned N บิต", def: "ช่วง 0 .. 2^N-1" },
    { term: "Signed N บิต", def: "ช่วง -2^(N-1) .. 2^(N-1)-1" },
    { term: "6 บิต unsigned", def: "0 .. 63" },
    { term: "6 บิต signed", def: "-32 .. 31" },
    { term: "8 บิต signed", def: "-128 .. 127" },
    { term: "Two's Complement", def: "กลับบิตทุกตัวแล้ว + 1" },
    { term: "0xfa", def: "250 (unsigned) · -6 (signed)" },
    { term: "ตัวเลข 10 หลัก", def: "ต้องใช้ 34 บิต" },
    { term: "Overflow (err)", def: "operand เกินช่วง → err · ผลลัพธ์เกิน → วนรอบ" }
  ],

  /* Slide 19 — flashcards */
  flashcards: [
    { q: "ISA คืออะไร?", a: "Instruction Set Architecture — กฎ/ภาษาที่บอก CPU ว่าต้องทำอะไร" },
    { q: "Stored-Program Concept คืออะไร?", a: "ทั้งข้อมูลและคำสั่งโปรแกรมเก็บอยู่ใน Memory เดียวกัน" },
    { q: "PC คืออะไร?", a: "Program Counter — Register ที่เก็บ Address ของคำสั่งถัดไปที่จะทำ" },
    { q: "ถ้า PC = 1000 CPU จะทำอะไร?", a: "ไปเอาคำสั่งที่ Address 1000 มาทำ แล้ว PC ขยับไปยังคำสั่งถัดไป" },
    { q: "คำสั่ง MIPS มีขนาดเท่าไหร่?", a: "32 bits = 4 bytes — PC จึงขยับทีละ 4" },
    { q: "ทำไมต้องมี Assembly?", a: "เพราะมนุษย์อ่าน Binary ลำบาก — Assembly อ่านเข้าใจง่ายกว่า" },
    { q: "add $t0, $t1, $t2 หมายถึงอะไร?", a: "$t0 = $t1 + $t2 (บวกแล้วเก็บที่ $t0)" },
    { q: "lw กับ sw คืออะไร?", a: "lw = โหลดจาก Memory ส่วน sw = เก็บลง Memory" },
    { q: "beq คืออะไร?", a: "Branch if EQual — กระโดดถ้าค่าเท่ากัน" },
    { q: "R-Format ใช้กับคำสั่งแบบใด?", a: "Register — คำสั่งที่ทำงานกับ Register เช่น add, sub" },
    { q: "I-Format ใช้เมื่อใด?", a: "Immediate — เมื่อมีค่าตัวเลข (ค่าคงที่) ในคำสั่ง เช่น lw, sw" },
    { q: "J-Format ใช้ทำอะไร?", a: "Jump — กระโดดไปยังตำแหน่งอื่น เช่น j" },
    { q: "ทำไม Instruction ต้องขนาดคงที่?", a: "CPU รู้ได้ง่ายว่าคำสั่งหนึ่งกินพื้นที่เท่าไหร่ — อ่านจาก Memory เป็นระบบ" },
    { q: "32 bits เท่ากับกี่ bytes?", a: "4 bytes" },
    { q: "ระบบ 6 บิต unsigned มีค่ามากสุดเท่าไหร่?", a: "2^6 - 1 = 63 (ช่วง 0 .. 63)" },
    { q: "ระบบ 6 บิต signed มีค่ามากสุดและน้อยสุดเท่าไหร่?", a: "31 ถึง -32 — 2^(6-1)-1 ถึง -2^(6-1)" },
    { q: "0xfa ในแบบ unsigned 8 บิต คือเท่าไหร่?", a: "250 (15×16 + 10)" },
    { q: "0xfa ในแบบ signed 8 บิต คือเท่าไหร่?", a: "-6 (250 - 256) เพราะ MSB = 1" },
    { q: "Two's Complement คืออะไร?", a: "วิธีเก็บจำนวนลบ — กลับบิตทุกตัวแล้วบวก 1" },
    { q: "ตัวเลขฐาน 10 จำนวน 10 หลักต้องใช้กี่บิต?", a: "34 บิต (2^33 < 10^10 ≤ 2^34)" }
  ],

  /* Slide 20 — glossary */
  glossary: [
    { term: "ISA", def: "Instruction Set Architecture — กฎ/ภาษาที่บอก CPU ว่าต้องทำอะไร" },
    { term: "CPU", def: "หน่วยประมวลผลกลาง — อ่านและทำตามคำสั่งทีละคำสั่ง" },
    { term: "Instruction", def: "คำสั่ง เช่น add, sub, lw, sw, beq" },
    { term: "Stored-Program Concept", def: "แนวคิดที่ทั้งข้อมูลและคำสั่งโปรแกรมเก็บอยู่ใน Memory เดียวกัน" },
    { term: "PC (Program Counter)", def: "Register ที่เก็บ Address ของคำสั่งที่ CPU จะทำถัดไป" },
    { term: "Register", def: "หน่วยเก็บข้อมูลความเร็วสูงภายใน CPU" },
    { term: "Address", def: "ตำแหน่งที่อยู่ของข้อมูลหรือคำสั่งใน Memory" },
    { term: "Memory", def: "หน่วยความจำที่เก็บข้อมูลและคำสั่ง เช่น RAM" },
    { term: "MIPS", def: "ตัวอย่าง ISA ที่ใช้เรียน Computer Architecture — คำสั่งขนาด 32 bits" },
    { term: "Machine Language", def: "ภาษาเครื่อง — Binary ที่ CPU เข้าใจโดยตรง" },
    { term: "Assembly Language", def: "ภาษา Assembly — อ่านง่ายกว่า Binary ก่อนแปลงเป็นภาษาเครื่อง" },
    { term: "Bit", def: "หน่วยข้อมูลเล็กสุด มีค่า 0 หรือ 1" },
    { term: "Byte", def: "1 Byte = 8 Bits" },
    { term: "32 bits", def: "ขนาดของคำสั่ง MIPS หนึ่งคำสั่ง = 4 bytes" },
    { term: "R-Format", def: "รูปแบบคำสั่งที่ทำงานกับ Register เช่น add, sub" },
    { term: "I-Format", def: "รูปแบบคำสั่งที่มีค่า Immediate (ค่าคงที่) เช่น lw, sw" },
    { term: "J-Format", def: "รูปแบบคำสั่งสำหรับ Jump ไปยังตำแหน่งอื่น เช่น j" },
    { term: "Immediate", def: "ค่าตัวเลขที่ฝังอยู่ในคำสั่งโดยตรง" },
    { term: "Jump", def: "การกระโดดไปยังตำแหน่งอื่นในโปรแกรม" },
    { term: "add", def: "คำสั่งบวก — add $t0,$t1,$t2 หมายถึง $t0 = $t1 + $t2" },
    { term: "lw", def: "Load Word — โหลดข้อมูลจาก Memory เข้า Register" },
    { term: "sw", def: "Store Word — เก็บข้อมูลจาก Register ลง Memory" },
    { term: "beq", def: "Branch if EQual — กระโดดถ้าค่าเท่ากัน" },
    { term: "Software ↔ Hardware", def: "ISA เป็นตัวกลางเชื่อมทั้งสองฝั่งเข้าด้วยกัน" },
    { term: "Signed", def: "ระบบเลขที่มีค่าลบ — ช่วง -2^(N-1) ถึง 2^(N-1)-1" },
    { term: "Unsigned", def: "ระบบเลขที่ไม่มีค่าลบ — ช่วง 0 ถึง 2^N-1" },
    { term: "Two's Complement", def: "วิธีเก็บจำนวนลบ — กลับบิตทุกตัวแล้วบวก 1" },
    { term: "Hexadecimal (Hex)", def: "เลขฐาน 16 — 1 หลักแทน 4 บิต เช่น 0xFA" },
    { term: "Overflow", def: "ผลลัพธ์เกินช่วงที่ระบบ N บิตเก็บได้ — เกิด err หรือวนรอบ (wrap)" },
    { term: "Range (ช่วงค่า)", def: "ช่วงค่าที่ระบบ N บิตเก็บได้ เช่น signed 8 บิต = -128..127" },
    { term: "MSB", def: "Most Significant Bit — บิตซ้ายสุด บอกเครื่องหมายในระบบ signed" },
    { term: "Wrap-around (วนรอบ)", def: "ผลลัพธ์เกินช่วงแล้ววนกลับ mod 2^N เช่น 200+70 = 14 (แบบ 8 บิต)" }
  ],

  /* Slide 21 — quick quiz (20 ข้อ ระบบเลข signed/unsigned + Two's Complement) */
  quick: [
    {
      q: "จำนวนที่มากที่สุดของระบบเลข 6 บิต signed คือ",
      en: { q: "What is the largest value of a 6-bit signed number?", options: ["-32", "31", "32", "63"], steps: ["Signed uses 1 bit for the sign → 5 bits left for the value", "Max value = 2^(N-1) - 1 = 2^5 - 1 = 32 - 1", "= 31"], explain: "Signed N bits: max = 2^(N-1) - 1 = 2^5 - 1 = 31" },
      options: ["-32", "31", "32", "63"],
      correct: 1,
      steps: [
        "ระบบ signed ใช้ 1 บิตเป็นเครื่องหมาย → เหลือบิตเก็บค่า 5 บิต",
        "ค่ามากสุด = 2^(N-1) - 1 = 2^5 - 1 = 32 - 1",
        "= 31"
      ],
      explain: "signed N บิต ค่ามากสุด = 2^(N-1) - 1 = 2^5 - 1 = 31"
    },
    {
      q: "จำนวนที่น้อยที่สุดของระบบเลข 6 บิต signed คือ",
      en: { q: "What is the smallest value of a 6-bit signed number?", options: ["-31", "0", "-32", "-64"], steps: ["Signed uses 1 bit for the sign → 5 bits left for the value", "Smallest value = -2^(N-1) = -2^5 = -32", "= -32 (not -64, because 1 bit is used for the sign)"], explain: "Signed N bits: min = -2^(N-1) = -2^5 = -32" },
      options: ["-31", "0", "-32", "-64"],
      correct: 2,
      steps: [
        "ระบบ signed ใช้ 1 บิตเป็นเครื่องหมาย → เหลือบิตเก็บค่า 5 บิต",
        "ค่าน้อยสุด = -2^(N-1) = -2^5 = -32",
        "= -32 (ไม่ใช่ -64 เพราะลบไป 1 บิตให้เครื่องหมาย)"
      ],
      explain: "signed N บิต ค่าน้อยสุด = -2^(N-1) = -2^5 = -32"
    },
    {
      q: "จำนวนที่มากที่สุดของระบบเลข 6 บิต unsigned คือ",
      en: { q: "What is the largest value of a 6-bit unsigned number?", options: ["31", "64", "127", "63"], steps: ["Unsigned uses all bits for the value (no sign) → all 6 bits are usable", "Max value = 2^N - 1 = 2^6 - 1 = 64 - 1", "= 63"], explain: "Unsigned N bits: max = 2^N - 1 = 2^6 - 1 = 63" },
      options: ["31", "64", "127", "63"],
      correct: 3,
      steps: [
        "unsigned ใช้ทุกบิตเป็นค่า (ไม่มีเครื่องหมาย) → ใช้ได้ครบ 6 บิต",
        "ค่ามากสุด = 2^N - 1 = 2^6 - 1 = 64 - 1",
        "= 63"
      ],
      explain: "unsigned N บิต ค่ามากสุด = 2^N - 1 = 2^6 - 1 = 63"
    },
    {
      q: "จำนวนที่น้อยที่สุดของระบบเลข 6 บิต unsigned คือ",
      en: { q: "What is the smallest value of a 6-bit unsigned number?", options: ["1", "0", "-1", "64"], steps: ["Unsigned means no negative numbers — values start at 0", "All bits = 0 represents the value 0", "So the smallest value is always 0"], explain: "Unsigned has no negative values — the smallest is always 0" },
      options: ["1", "0", "-1", "64"],
      correct: 1,
      steps: [
        "unsigned หมายถึงไม่มีค่าลบ — ค่านับจาก 0 ขึ้นไปเท่านั้น",
        "บิตทั้งหมดเป็น 0 แทนค่า 0",
        "ดังนั้นค่าน้อยสุด = 0 เสมอ"
      ],
      explain: "unsigned ไม่มีค่าลบ ค่าน้อยสุดคือ 0 เสมอ"
    },
    {
      q: "กำหนดให้ระบบเลขที่ใช้เป็นแบบ 8 บิต signed — -125-10 = ...........",
      en: { q: "Given an 8-bit signed system — -125-10 = ...........", options: ["135", "err", "121", "-135"], steps: ["First calculate: -125 - 10 = -135", "Check the 8-bit signed range = -128 to 127 — operands -125 and -10 are in range (no err)", "Result -135 is below -128 → out of range → wrap: -135 + 256", "= 121"], explain: "-125-10 = -135, which is below the signed 8-bit range (-128..127) → wrap by +256: -135+256 = 121" },
      options: ["135", "err", "121", "-135"],
      correct: 2,
      steps: [
        "คำนวณก่อน: -125 - 10 = -135",
        "เช็คช่วง signed 8 บิต = -128 ถึง 127 — operand -125 กับ -10 อยู่ในช่วง (ไม่ err)",
        "ผลลัพธ์ -135 ต่ำกว่า -128 → เกินช่วง → วนรอบ: -135 + 256",
        "= 121"
      ],
      explain: "-125-10 = -135 ซึ่งเกินช่วง signed 8 บิต (-128..127) → วนรอบ (wrap) โดย +256: -135+256 = 121"
    },
    {
      q: "กำหนดให้ระบบเลขที่ใช้เป็นแบบ 8 บิต signed — -125-130 = ...........",
      en: { q: "Given an 8-bit signed system — -125-130 = ...........", options: ["-255", "255", "1", "err"], steps: ["Look at the operand (the number in the question): -130", "Check the 8-bit signed range = -128..127 → -130 is below -128 → cannot be stored", "Operand out of range → answer err"], explain: "The number -130 is outside the signed 8-bit range (below -128) → cannot be represented → err" },
      options: ["-255", "255", "1", "err"],
      correct: 3,
      steps: [
        "ดูที่ operand (ตัวเลขในโจทย์): -130",
        "เช็คช่วง signed 8 บิต = -128..127 → -130 ต่ำกว่า -128 → เก็บไม่ได้ตั้งแต่แรก",
        "operand เกินช่วง → ตอบ err"
      ],
      explain: "ตัวเลข -130 เกินช่วง signed 8 บิต (น้อยกว่า -128) → ไม่สามารถแทนได้ → err"
    },
    {
      q: "กำหนดให้ระบบเลขที่ใช้เป็นแบบ 8 บิต signed — -125-126 = ...........",
      en: { q: "Given an 8-bit signed system — -125-126 = ...........", options: ["-251", "err", "251", "5"], steps: ["First calculate: -125 - 126 = -251", "Check operands: -125 and -126 are inside -128..127 → both fine", "Result -251 is out of range → wrap: -251 + 256", "= 5"], explain: "-125 and -126 are in the signed 8-bit range, but the result -251 is out of range → wrap: -251+256 = 5" },
      options: ["-251", "err", "251", "5"],
      correct: 3,
      steps: [
        "คำนวณก่อน: -125 - 126 = -251",
        "เช็ค operand: -125 กับ -126 อยู่ในช่วง -128..127 → ใช้ได้ทั้งคู่",
        "ผลลัพธ์ -251 เกินช่วง → วนรอบ: -251 + 256",
        "= 5"
      ],
      explain: "-125 และ -126 อยู่ในช่วง signed 8 บิต แต่ผลลัพธ์ -251 เกินช่วง → วนรอบ: -251+256 = 5"
    },
    {
      q: "กำหนดให้ระบบเลขที่ใช้เป็นแบบ 8 บิต unsigned — -125-10 = ...........",
      en: { q: "Given an 8-bit unsigned system — -125-10 = ...........", options: ["135", "err", "121", "-135"], steps: ["Unsigned can only store 0..255 — no negative values", "Operand -125 is negative → outside the unsigned range", "Operand out of range → answer err"], explain: "Unsigned cannot store negatives — operand -125 is outside 0..255 → err" },
      options: ["135", "err", "121", "-135"],
      correct: 1,
      steps: [
        "ระบบ unsigned เก็บได้แค่ 0..255 — ไม่มีค่าลบ",
        "operand -125 เป็นค่าลบ → เกินช่วงของ unsigned",
        "operand เกินช่วง → ตอบ err"
      ],
      explain: "unsigned เก็บค่าลบไม่ได้ — operand -125 เกินช่วง 0..255 → err"
    },
    {
      q: "กำหนดให้ระบบเลขที่ใช้เป็นแบบ 8 บิต unsigned — 200+70 = ...........",
      en: { q: "Given an 8-bit unsigned system — 200+70 = ...........", options: ["70", "270", "err", "14"], steps: ["First calculate: 200 + 70 = 270", "Check the 8-bit unsigned range = 0..255 — operands 200 and 70 are in range", "Result 270 > 255 → wrap mod 2^8: 270 - 256", "= 14"], explain: "200+70 = 270 > 255 → wrap mod 2^8: 270-256 = 14" },
      options: ["70", "270", "err", "14"],
      correct: 3,
      steps: [
        "คำนวณก่อน: 200 + 70 = 270",
        "เช็คช่วง unsigned 8 บิต = 0..255 — operand 200 กับ 70 อยู่ในช่วง",
        "ผลลัพธ์ 270 เกิน 255 → วนรอบ mod 2^8: 270 - 256",
        "= 14"
      ],
      explain: "200+70 = 270 เกิน 255 → วนรอบ mod 2^8: 270-256 = 14"
    },
    {
      q: "กำหนดให้ระบบเลขที่ใช้เป็นแบบ 8 บิต unsigned — 70-200 = ...........",
      en: { q: "Given an 8-bit unsigned system — 70-200 = ...........", options: ["130", "-130", "err", "126"], steps: ["First calculate: 70 - 200 = -130", "The result is negative → wrap mod 2^8 by adding 2^8 = 256", "256 + (-130) = 256 - 130", "= 126"], explain: "70-200 = -130 → wrap mod 2^8: 256-130 = 126 (i.e. 256 + (-130))" },
      options: ["130", "-130", "err", "126"],
      correct: 3,
      steps: [
        "คำนวณก่อน: 70 - 200 = -130",
        "ผลลัพธ์ติดลบ → วนรอบ mod 2^8 โดยบวก 2^8 = 256",
        "256 + (-130) = 256 - 130",
        "= 126"
      ],
      explain: "70-200 = -130 → วนรอบ mod 2^8: 256-130 = 126 (คิดเป็น 256 + (-130))"
    },
    {
      q: "กำหนดให้ระบบเลขที่ใช้เป็นแบบ 8 บิต unsigned — 0xfa = ........... (ตอบเป็นเลขฐาน 10)",
      en: { q: "Given an 8-bit unsigned system — 0xfa = ........... (answer in decimal)", options: ["-6", "250", "26", "246"], steps: ["0xfa has 2 digits: f and a — each digit multiplies by 16", "f = 15, a = 10 → 15×16 + 10 = 240 + 10", "= 250"], explain: "0xfa = f×16 + a = 15×16 + 10 = 250" },
      options: ["-6", "250", "26", "246"],
      correct: 1,
      steps: [
        "0xfa มี 2 หลัก: f กับ a — แต่ละหลักคูณ 16",
        "f = 15, a = 10 → 15×16 + 10 = 240 + 10",
        "= 250"
      ],
      explain: "0xfa = f×16 + a = 15×16 + 10 = 250"
    },
    {
      q: "กำหนดให้ระบบเลขที่ใช้เป็นแบบ 8 บิต signed — 0xfa = ........... (ตอบเป็นเลขฐาน 10)",
      en: { q: "Given an 8-bit signed system — 0xfa = ........... (answer in decimal)", options: ["250", "-6", "-250", "6"], steps: ["Think unsigned first: 0xfa = 250", "Check the MSB (leftmost bit): 0xfa = f = 1111 → first bit is 1 → negative", "Signed value = unsigned value - 256 = 250 - 256", "= -6"], explain: "MSB = 1 → signed value = 250 - 256 = -6" },
      options: ["250", "-6", "-250", "6"],
      correct: 1,
      steps: [
        "คิดแบบ unsigned ก่อน: 0xfa = 250",
        "ดู MSB (บิตซ้ายสุด): 0xfa = f = 1111 → บิตแรกเป็น 1 → เป็นค่าลบ",
        "ค่า signed = ค่า unsigned - 256 = 250 - 256",
        "= -6"
      ],
      explain: "MSB = 1 → ค่า signed = 250 - 256 = -6"
    },
    {
      q: "กำหนดให้ระบบเลขที่ใช้เป็นแบบ 8 บิต unsigned — 0xfa+0x25 = ........... (ตอบเป็นเลขฐาน 10)",
      en: { q: "Given an 8-bit unsigned system — 0xfa+0x25 = ........... (answer in decimal)", options: ["287", "259", "31", "23"], steps: ["Convert to decimal: 0xfa = 250, 0x25 = 2×16+5 = 37", "Add: 250 + 37 = 287", "287 > 255 (8-bit unsigned range) → wrap: 287 - 256", "= 31"], explain: "0xfa = 250, 0x25 = 37 → 250+37 = 287 > 255 → wrap: 287-256 = 31" },
      options: ["287", "259", "31", "23"],
      correct: 2,
      steps: [
        "แปลงเป็นฐาน 10: 0xfa = 250, 0x25 = 2×16+5 = 37",
        "บวก: 250 + 37 = 287",
        "287 เกิน 255 (ช่วง unsigned 8 บิต) → วนรอบ: 287 - 256",
        "= 31"
      ],
      explain: "0xfa = 250, 0x25 = 37 → 250+37 = 287 เกิน 255 → วนรอบ: 287-256 = 31"
    },
    {
      q: "ตัวเลขฐาน 10 จำนวน 10 หลัก ต้องใช้เลขฐาน 2 จำนวนกี่บิตในการเก็บข้อมูล (ตอบตัวเลข เช่น ถ้าคำตอบคือ 10 บิต ให้ตอบ 10)",
      en: { q: "A 10-digit decimal number needs how many binary bits to store? (answer with just the number, e.g. if the answer is 10 bits, type 10)", options: ["33", "10", "34", "32"], steps: ["The largest 10-digit number = 9,999,999,999", "Try 33 bits: 2^33 = 8,589,934,592 → less than 9.99 billion → not enough", "Try 34 bits: 2^34 = 17,179,869,184 → enough", "So we need 34 bits"], explain: "Largest 10-digit number = 9,999,999,999 — 2^33 = 8,589,934,592 is not enough, 2^34 = 17,179,869,184 is enough → 34 bits" },
      options: ["33", "10", "34", "32"],
      correct: 2,
      steps: [
        "เลข 10 หลักที่มากที่สุด = 9,999,999,999",
        "ลอง 33 บิต: 2^33 = 8,589,934,592 → น้อยกว่า 9.99 พันล้าน → ยังไม่พอ",
        "ลอง 34 บิต: 2^34 = 17,179,869,184 → มากพอ",
        "ดังนั้นต้องใช้ 34 บิต"
      ],
      explain: "เลข 10 หลักมากสุด = 9,999,999,999 — 2^33 = 8,589,934,592 ยังไม่พอ, 2^34 = 17,179,869,184 พอ → ต้องใช้ 34 บิต"
    },
    {
      q: "กำหนดระบบเลขเป็นแบบ 8 บิต signed — เลข -140 เขียนในรูปแบบเลขฐาน 16 อย่างไร",
      en: { q: "In an 8-bit signed system — how is -140 written in hexadecimal?", options: ["FF", "8C", "-8C", "err"], steps: ["Check the signed 8-bit range = -128 to 127", "-140 is below -128 → cannot be stored in 8 bits", "→ answer err"], explain: "-140 is below -128 (the lower bound of signed 8-bit) → cannot be represented → err" },
      options: ["FF", "8C", "-8C", "err"],
      correct: 3,
      steps: [
        "เช็คช่วง signed 8 บิต = -128 ถึง 127",
        "-140 น้อยกว่า -128 → แทนด้วย 8 บิตไม่ได้",
        "→ ตอบ err"
      ],
      explain: "-140 น้อยกว่า -128 (ขอบล่างของ signed 8 บิต) → แทนไม่ได้ → err"
    },
    {
      q: "กำหนดระบบเลขเป็นแบบ 8 บิต unsigned — เลข -140 เขียนในรูปแบบเลขฐาน 16 อย่างไร",
      en: { q: "In an 8-bit unsigned system — how is -140 written in hexadecimal?", options: ["-8C", "74", "err", "8C"], steps: ["Unsigned can only store 0..255 — no negatives", "-140 is negative → out of range", "→ answer err"], explain: "Unsigned cannot store negatives → -140 is outside 0..255 → err" },
      options: ["-8C", "74", "err", "8C"],
      correct: 2,
      steps: [
        "ระบบ unsigned เก็บได้ 0..255 — ไม่มีค่าลบ",
        "-140 เป็นค่าลบ → เกินช่วง",
        "→ ตอบ err"
      ],
      explain: "unsigned เก็บค่าลบไม่ได้ → -140 เกินช่วง 0..255 → err"
    },
    {
      q: "0xfffffffb+0x00000007 = ......................... กำหนดให้ระบบเลขที่ใช้เป็นแบบ unsigned 32 บิต (คำตอบอยู่ในรูปแบบเลขฐาน 10)",
      en: { q: "0xfffffffb+0x00000007 = ......................... (unsigned 32-bit system, answer in decimal)", options: ["0", "4294967298", "2", "4"], steps: ["0xfffffffb = 4,294,967,291 (unsigned 32-bit)", "Add 7: 4,294,967,291 + 7 = 4,294,967,298", "Over 2^32-1 = 4,294,967,295 → wrap: subtract 2^32 = 4,294,967,296", "4,294,967,298 - 4,294,967,296 = 2"], explain: "0xfffffffb = 4,294,967,291 → +7 = 4,294,967,298 > 2^32-1 → wrap: 4,294,967,298 - 4,294,967,296 = 2" },
      options: ["0", "4294967298", "2", "4"],
      correct: 2,
      steps: [
        "0xfffffffb = 4,294,967,291 (unsigned 32 บิต)",
        "บวก 7: 4,294,967,291 + 7 = 4,294,967,298",
        "เกิน 2^32-1 = 4,294,967,295 → วนรอบ: ลบ 2^32 = 4,294,967,296",
        "4,294,967,298 - 4,294,967,296 = 2"
      ],
      explain: "0xfffffffb = 4,294,967,291 → +7 = 4,294,967,298 เกิน 2^32-1 → วนรอบ: 4,294,967,298 - 4,294,967,296 = 2"
    },
    {
      q: "0xfffffffb+0x00000007 = ......................... กำหนดให้ระบบเลขที่ใช้เป็นแบบ unsigned 32 บิต (คำตอบอยู่ในรูปแบบเลขฐาน 10)",
      en: { q: "0xfffffffb+0x00000007 = ......................... (unsigned 32-bit system, answer in decimal)", options: ["0", "4294967298", "2", "4"], steps: ["0xfffffffb = 4,294,967,291 (unsigned 32-bit)", "Add 7: 4,294,967,291 + 7 = 4,294,967,298", "Over 2^32-1 = 4,294,967,295 → wrap: subtract 2^32 = 4,294,967,296", "4,294,967,298 - 4,294,967,296 = 2"], explain: "0xfffffffb = 4,294,967,291 → +7 = 4,294,967,298 > 2^32-1 → wrap: 4,294,967,298 - 4,294,967,296 = 2" },
      options: ["0", "4294967298", "2", "4"],
      correct: 2,
      steps: [
        "0xfffffffb = 4,294,967,291 (unsigned 32 บิต)",
        "บวก 7: 4,294,967,291 + 7 = 4,294,967,298",
        "เกิน 2^32-1 = 4,294,967,295 → วนรอบ: ลบ 2^32 = 4,294,967,296",
        "4,294,967,298 - 4,294,967,296 = 2"
      ],
      explain: "0xfffffffb = 4,294,967,291 → +7 = 4,294,967,298 เกิน 2^32-1 → วนรอบ: 4,294,967,298 - 4,294,967,296 = 2"
    },
    {
      q: "0xc8 + 0xc4 = ……. กำหนดให้ระบบเลขที่ใช้เป็นแบบ unsigned 8 บิต (คำตอบอยู่ในรูปแบบเลขฐาน 10)",
      en: { q: "0xc8 + 0xc4 = ……. (unsigned 8-bit system, answer in decimal)", options: ["396", "12", "140", "196"], steps: ["Convert: 0xc8 = 12×16+8 = 200, 0xc4 = 12×16+4 = 196", "Add: 200 + 196 = 396", "396 > 255 (8-bit unsigned) → wrap: 396 - 256", "= 140"], explain: "0xc8 = 200, 0xc4 = 196 → 200+196 = 396 > 255 → wrap: 396-256 = 140" },
      options: ["396", "12", "140", "196"],
      correct: 2,
      steps: [
        "แปลง: 0xc8 = 12×16+8 = 200, 0xc4 = 12×16+4 = 196",
        "บวก: 200 + 196 = 396",
        "396 เกิน 255 (unsigned 8 บิต) → วนรอบ: 396 - 256",
        "= 140"
      ],
      explain: "0xc8 = 200, 0xc4 = 196 → 200+196 = 396 เกิน 255 → วนรอบ: 396-256 = 140"
    },
    {
      q: "0xc8 + 0xc4 = ……. กำหนดให้ระบบเลขที่ใช้เป็นแบบ signed 8 บิต (คำตอบอยู่ในรูปแบบเลขฐาน 10)",
      en: { q: "0xc8 + 0xc4 = ……. (signed 8-bit system, answer in decimal)", options: ["140", "-56", "116", "-116"], steps: ["Signed: check the MSB of 0xc8 = c = 1100 → first bit is 1 → negative", "0xc8 = 200 - 256 = -56, 0xc4 = 196 - 256 = -60", "Add: -56 + -60 = -116", "Inside -128..127 → answer -116 (no err)"], explain: "0xc8 = -56 (200-256), 0xc4 = -60 (196-256) → -56 + -60 = -116, which is inside -128..127" },
      options: ["140", "-56", "116", "-116"],
      correct: 3,
      steps: [
        "แบบ signed: ดู MSB ของ 0xc8 = c = 1100 → บิตแรก 1 → ค่าลบ",
        "0xc8 = 200 - 256 = -56, 0xc4 = 196 - 256 = -60",
        "บวก: -56 + -60 = -116",
        "อยู่ในช่วง -128..127 → ตอบ -116 (ไม่ err)"
      ],
      explain: "0xc8 = -56 (200-256), 0xc4 = -60 (196-256) → -56 + -60 = -116 อยู่ในช่วง -128..127"
    }
  ],

  /* ==========================================================================
     CHAPTER 2 — MIPS INSTRUCTION FORMATS (R / I / J + Memory & โหลดข้อมูล)
     ========================================================================== */
  ch2: {
    title: "MIPS Instruction Formats",
    thai: "รูปแบบคำสั่ง MIPS",
    slides: [
      { title: "Cover — บทที่ 2: MIPS Instruction Formats", short: "เปิดบทเรียน" },
      { title: "เราจะเรียนอะไรบ้าง", short: "ภาพรวมบทเรียน" },
      { title: "Instruction คืออะไร?", short: "Instruction คืออะไร" },
      { title: "MIPS มี 3 รูปแบบหลัก", short: "3 รูปแบบหลัก" },
      { title: "R-Format — โครงสร้าง", short: "R-Format โครงสร้าง" },
      { title: "แต่ละช่องของ R-Format", short: "ช่อง R-Format" },
      { title: "ตัวอย่าง R-Format", short: "ตัวอย่าง R-Format" },
      { title: "I-Format — โครงสร้าง", short: "I-Format โครงสร้าง" },
      { title: "Immediate คืออะไร?", short: "Immediate" },
      { title: "ตัวอย่าง I-Format", short: "ตัวอย่าง I-Format" },
      { title: "คำสั่ง I-Format ที่ควรรู้", short: "คำสั่ง I-Format" },
      { title: "I-Format กับ Memory — lw / sw", short: "lw / sw" },
      { title: "J-Format — โครงสร้าง", short: "J-Format โครงสร้าง" },
      { title: "j คืออะไร?", short: "j = Jump" },
      { title: "jal คืออะไร?", short: "jal" },
      { title: "เปรียบเทียบ R / I / J", short: "เทียบ R/I/J" },
      { title: "วิธีดูว่าเป็น Format ไหน", short: "ดู Format ยังไง" },
      { title: "Memory & Data ใน MIPS", short: "Memory & .word/.byte" },
      { title: "lb / lbu / lw — การโหลดข้อมูล", short: "lb / lbu / lw" },
      { title: "ตัวอย่างโปรแกรม q1t8.asm", short: "q1t8.asm" },
      { title: "q1t8.asm — ไล่ทีละคำสั่ง", short: "trace ทีละคำสั่ง" },
      { title: "เรื่องที่น่าจะออกสอบ", short: "เรื่องออกสอบ" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz — แบบทดสอบบท 2 (10 ข้อ)", short: "แบบทดสอบ" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 10 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. พื้นฐาน Instruction", topics: [3, 4] },
      { label: "2. R-Format", topics: [5, 6, 7] },
      { label: "3. I-Format", topics: [8, 9, 10, 11, 12] },
      { label: "4. J-Format", topics: [13, 14, 15] },
      { label: "5. เปรียบเทียบ & วิเคราะห์", topics: [16, 17] },
      { label: "6. Memory & การโหลดข้อมูล", topics: [18, 19, 20, 21] },
      { label: "7. เตรียมตัวสอบ", topics: [22] },
      { label: "ทบทวนและฝึกฝน", topics: [23, 24, 25, 26, 27, 28] }
    ],

    layers: [],

    /* โจทย์โปรแกรมที่ใช้ในข้อสอบ (code.ref ชี้มาที่นี่) */
    programs: {
      q1t8: {
        lines: [
          ".text",
          "la t0,myDat",
          "la t1,uDat",
          "sw s0,4(t0)",
          "lw s0,4(t0)",
          "lb s1,0(t0)",
          "lb s2,1(t0)",
          "lbu s3,2(t0)",
          "lb s4,5(t0)",
          "lb s5,-5(t1)",
          "lb s6,-7(t1)",
          "lb s7,18(t0)",
          ".data",
          "myDat: .word 0xabcd1234,0x12345678",
          "uDat: .byte 11,12,13,14,15,16,17,18,19,20"
        ]
      }
    },

    /* Quiz — แบบทดสอบบท 2 (10 ข้อ) — สลับตำแหน่งคำตอบ + ตัวหลอกสมจริง */
    quiz: [
      {
        q: "MIPS Instruction มีขนาดเท่าไหร่?",
        options: ["16 bits", "32 bits", "64 bits", "8 bits"],
        correct: 1,
        explain: "MIPS Instruction มีขนาดคงที่ 32 bits = 4 bytes"
      },
      {
        q: "R-Format มีช่องอะไรบ้าง?",
        options: [
          "opcode, rs, rt, immediate",
          "opcode, rs, rt, rd, shamt, funct",
          "opcode, target address",
          "rs, rt, rd เท่านั้น"
        ],
        correct: 1,
        explain: "R-Format = opcode(6) | rs(5) | rt(5) | rd(5) | shamt(5) | funct(6) รวม 32 bits"
      },
      {
        q: "I-Format มีช่องอะไรบ้าง?",
        options: [
          "opcode, rs, rt, rd, shamt, funct",
          "opcode, target address",
          "opcode, rs, rt, immediate",
          "rs, rt, immediate เท่านั้น"
        ],
        correct: 2,
        explain: "I-Format = opcode(6) | rs(5) | rt(5) | immediate(16) รวม 32 bits"
      },
      {
        q: "J-Format มีช่องอะไรบ้าง?",
        options: [
          "opcode, target address",
          "opcode, rs, rt, immediate",
          "opcode, rs, rt, rd, shamt, funct",
          "target address เท่านั้น"
        ],
        correct: 0,
        explain: "J-Format = opcode(6) | target address(26) รวม 32 bits"
      },
      {
        q: "Immediate คืออะไร?",
        options: [
          "Register ที่เก็บผลลัพธ์",
          "ค่าตัวเลขที่อยู่ใน Instruction โดยตรง",
          "Address ใน Memory",
          "คำสั่งกระโดด"
        ],
        correct: 1,
        explain: "Immediate = ค่าคงที่ที่ฝังในคำสั่ง เช่น addi $t0,$t1,10 — เลข 10 คือ Immediate"
      },
      {
        q: "add $t0, $t1, $t2 — $t2 คือช่องใด?",
        options: ["rs", "rd", "rt", "shamt"],
        correct: 2,
        steps: [
          "จำรูปแบบ: add rd, rs, rt",
          "เรียงตามคำสั่ง add $t0, $t1, $t2 → rd=$t0, rs=$t1, rt=$t2",
          "ดังนั้น $t2 คือช่อง rt (register ตัวที่ 2 ที่เป็น input)"
        ],
        explain: "rs = register ตัวที่ 1, rt = register ตัวที่ 2 — ใน add rd,rs,rt: rd=$t0, rs=$t1, rt=$t2"
      },
      {
        q: "add $t0, $t1, $t2 — ผลลัพธ์ถูกเก็บไว้ที่ไหน?",
        options: ["$t0 (rd)", "$t1 (rs)", "$t2 (rt)", "$ra"],
        correct: 0,
        steps: [
          "จำรูปแบบ: add rd, rs, rt → rd = rs + rt",
          "rd คือ Register ปลายทาง (ตัวแรกหลังคำสั่ง) = $t0",
          "ดังนั้นผลลัพธ์ถูกเก็บที่ $t0 (rd)"
        ],
        explain: "rd คือ Register ปลายทาง — add rd, rs, rt หมายถึง rd = rs + rt → $t0 = $t1 + $t2"
      },
      {
        q: "shamt ใช้กับคำสั่งประเภทใดเป็นหลัก?",
        options: ["คำสั่งโหลดจาก Memory", "คำสั่ง Shift เช่น sll", "คำสั่งกระโดด", "คำสั่งเปรียบเทียบ"],
        correct: 1,
        explain: "shamt = Shift Amount ใช้บอกว่าจะ Shift กี่ตำแหน่ง — เจอในคำสั่ง Shift เช่น sll"
      },
      {
        q: "addi $21, $22, -50 หมายถึงอะไร?",
        options: ["$22 = $21 + (-50)", "$21 = $22 - $50", "$21 = $22 + (-50)", "$50 = $21 + $22"],
        correct: 2,
        steps: [
          "addi ใช้รูปแบบ: addi rt, rs, immediate",
          "เรียงตามคำสั่ง addi $21, $22, -50 → rt=$21, rs=$22, immediate=-50",
          "ดังนั้น $21 = $22 + (-50)"
        ],
        explain: "addi ใช้ Immediate → rs=$22, rt=$21, immediate=-50 → $21 = $22 + (-50) — จัดเป็น I-Format"
      },
      {
        q: "lw $t0, 4($s1) หมายถึงอะไร?",
        options: [
          "เก็บ $t0 ลง Memory ที่ offset 4 จาก $s1",
          "โหลด Register $t0 ไปยัง $s1",
          "เพิ่มค่า $s1 ขึ้น 4 แล้วเก็บที่ $t0",
          "โหลดจาก Memory ที่ offset 4 จาก $s1 ใส่ $t0"
        ],
        correct: 3,
        steps: [
          "lw = Load Word — ทิศทาง Memory → Register",
          "ในวงเล็บ $s1 คือตำแหน่งเริ่มต้น (Base) เลข 4 คือ Offset",
          "ดังนั้นไปอ่าน Memory ที่ตำแหน่ง $s1+4 แล้วใส่ผลลัพธ์ใน $t0"
        ],
        explain: "lw = Load Word: ไปที่ Memory โดยใช้ $s1 เป็นจุดเริ่มต้น + offset 4 แล้วโหลดมาใส่ $t0 — จัดเป็น I-Format (มี offset 16 บิต)"
      }
    ],

    /* ข้อสอบหลังเรียน — 10 ข้อ (วิเคราะห์ q1t8.asm + เลขฐาน) */
    exam: [
      {
        q: "ข้อ 1 — จากโปรแกรม (บรรทัดที่ไฮไลต์): s0 = .................",
        en: { q: "Q1 — from the program (highlighted line): s0 = .................", options: ["0x00000034", "0x00000000", "0xffffffab", "0x000000cd"], steps: ["s0 is never set → it starts at 0", "sw s0,4(t0): store 0 into Memory at myDat+4..7", "lw s0,4(t0): load it back into s0 → s0 = 0x00000000"], explain: "s0 starts at 0 → sw s0,4(t0) stores 0 → lw s0,4(t0) loads it back → s0 = 0x00000000" },
        code: { ref: "q1t8", hl: 4 },
        options: ["0x00000034", "0x00000000", "0xffffffab", "0x000000cd"],
        correct: 1,
        steps: [
          "s0 ไม่เคยถูกตั้งค่า → มีค่าเริ่มต้นเป็น 0",
          "sw s0,4(t0): เอาค่า 0 ไปเขียนทับ Memory ที่ myDat+4..7",
          "lw s0,4(t0): โหลดค่ากลับมาที่ s0 → s0 = 0x00000000"
        ],
        explain: "s0 เริ่มต้นเป็น 0 → sw s0,4(t0) เก็บ 0 ลง Memory → lw s0,4(t0) โหลดกลับมา → s0 = 0x00000000"
      },
      {
        q: "ข้อ 2 — lb s1, 0(t0) (myDat = 0xabcd1234, little-endian): s1 = .................",
        en: { q: "Q2 — lb s1, 0(t0) (myDat = 0xabcd1234, little-endian): s1 = .................", options: ["0xffffff34", "0x00000034", "0x00000000", "0x000000cd"], steps: ["Little-endian: 0xabcd1234 is stored as bytes 34 12 cd ab → myDat+0 = 0x34", "lb reads 1 byte at myDat+0 = 0x34", "MSB of 0x34 (0011 0100) = 0 → fill with 0 → 0x00000034"], explain: "Memory[myDat+0] = 0x34 → lb = sign-extend(0x34) → MSB of 0x34 is 0 → 0x00000034" },
        code: { ref: "q1t8", hl: 5 },
        options: ["0xffffff34", "0x00000034", "0x00000000", "0x000000cd"],
        correct: 1,
        steps: [
          "little-endian: 0xabcd1234 เก็บเป็น byte 34 12 cd ab → myDat+0 = 0x34",
          "lb อ่าน 1 byte ที่ myDat+0 = 0x34",
          "MSB ของ 0x34 (0011 0100) = 0 → เติม 0 หน้า → 0x00000034"
        ],
        explain: "Memory[myDat+0] = 0x34 → lb = sign-extend(0x34) → MSB ของ 0x34 เป็น 0 → 0x00000034"
      },
      {
        q: "ข้อ 3 — lb s2, 1(t0): s2 = .................",
        en: { q: "Q3 — lb s2, 1(t0): s2 = .................", options: ["0x00000012", "0xffffff12", "0x000000cd", "0x00000000"], steps: ["myDat+1 = 0x12 (from the byte order 34 12 cd ab)", "lb reads 1 byte = 0x12", "MSB = 0 → fill with 0 → 0x00000012"], explain: "Memory[myDat+1] = 0x12 → sign-extend → 0x00000012" },
        code: { ref: "q1t8", hl: 6 },
        options: ["0x00000012", "0xffffff12", "0x000000cd", "0x00000000"],
        correct: 0,
        steps: [
          "myDat+1 = 0x12 (จากลำดับ 34 12 cd ab)",
          "lb อ่าน 1 byte = 0x12",
          "MSB = 0 → เติม 0 → 0x00000012"
        ],
        explain: "Memory[myDat+1] = 0x12 → sign-extend → 0x00000012"
      },
      {
        q: "ข้อ 4 — lbu s3, 2(t0): s3 = .................",
        en: { q: "Q4 — lbu s3, 2(t0): s3 = .................", options: ["0xffffffcd", "0x00000034", "0x000000cd", "0x00000012"], steps: ["myDat+2 = 0xcd", "lbu = unsigned → always fill with 0 (ignore the sign)", "0xcd → 0x000000cd (with lb you would get 0xffffffcd!)"], explain: "Memory[myDat+2] = 0xcd → lbu = zero-extend (no sign extension) → 0x000000cd" },
        code: { ref: "q1t8", hl: 7 },
        options: ["0xffffffcd", "0x00000034", "0x000000cd", "0x00000012"],
        correct: 2,
        steps: [
          "myDat+2 = 0xcd",
          "lbu = unsigned → เติม 0 หน้าเสมอ (ไม่สนเครื่องหมาย)",
          "0xcd → 0x000000cd (ถ้าใช้ lb จะได้ 0xffffffcd!)"
        ],
        explain: "Memory[myDat+2] = 0xcd → lbu = zero-extend (ไม่ขยายเครื่องหมาย) → 0x000000cd"
      },
      {
        q: "ข้อ 5 — lb s4, 5(t0) หลังคำสั่ง sw s0,4(t0): s4 = .................",
        en: { q: "Q5 — lb s4, 5(t0) after the instruction sw s0,4(t0): s4 = .................", options: ["0x00000056", "0x00000034", "0x00000000", "0xffffff56"], steps: ["Earlier, sw s0,4(t0) wrote 0 over myDat+4..7 (which stored 0x12345678)", "So myDat+5 = 0x00", "lb reads 0x00 → MSB = 0 → 0x00000000"], explain: "sw s0,4(t0) wrote 0 over Memory[myDat+4..7] (was 0x12345678) → byte +5 = 0 → s4 = 0x00000000" },
        code: { ref: "q1t8", hl: 8 },
        options: ["0x00000056", "0x00000034", "0x00000000", "0xffffff56"],
        correct: 2,
        steps: [
          "ก่อนหน้า sw s0,4(t0) เขียน 0 ทับ myDat+4..7 (เดิมเก็บ 0x12345678)",
          "ดังนั้น myDat+5 = 0x00",
          "lb อ่าน 0x00 → MSB = 0 → 0x00000000"
        ],
        explain: "sw s0,4(t0) เขียน 0 ทับ Memory[myDat+4..7] (เดิม 0x12345678) → byte +5 = 0 → s4 = 0x00000000"
      },
      {
        q: "ข้อ 6 — lb s5, -5(t1) (t1 = uDat, อยู่ถัดจาก myDat): s5 = .................",
        en: { q: "Q6 — lb s5, -5(t1) (t1 = uDat, right after myDat): s5 = .................", options: ["0x000000ab", "0xffffffab", "0x00000000", "0xffffff12"], steps: ["uDat comes right after myDat (myDat takes 8 bytes) → uDat - 5 = myDat + 3", "myDat+3 = 0xab", "MSB of 0xab (1010 1011) = 1 → lb fills with 1 → 0xffffffab"], explain: "uDat-5 = myDat+3 = 0xab → lb = sign-extend → MSB=1 → 0xffffffab" },
        code: { ref: "q1t8", hl: 9 },
        options: ["0x000000ab", "0xffffffab", "0x00000000", "0xffffff12"],
        correct: 1,
        steps: [
          "uDat วางต่อจาก myDat (myDat กิน 8 bytes) → uDat - 5 = myDat + 3",
          "myDat+3 = 0xab",
          "MSB ของ 0xab (1010 1011) = 1 → lb เติมเลข 1 หน้า → 0xffffffab"
        ],
        explain: "uDat-5 = myDat+3 = 0xab → lb = sign-extend → MSB=1 → 0xffffffab"
      },
      {
        q: "ข้อ 7 — lb s6, -7(t1): s6 = .................",
        en: { q: "Q7 — lb s6, -7(t1): s6 = .................", options: ["0xffffff12", "0x000000cd", "0x00000012", "0xffffffab"], steps: ["uDat - 7 = myDat + 1", "myDat+1 = 0x12", "MSB = 0 → fill with 0 → 0x00000012"], explain: "uDat-7 = myDat+1 = 0x12 → sign-extend → 0x00000012" },
        code: { ref: "q1t8", hl: 10 },
        options: ["0xffffff12", "0x000000cd", "0x00000012", "0xffffffab"],
        correct: 2,
        steps: [
          "uDat - 7 = myDat + 1",
          "myDat+1 = 0x12",
          "MSB = 0 → เติม 0 → 0x00000012"
        ],
        explain: "uDat-7 = myDat+1 = 0x12 → sign-extend → 0x00000012"
      },
      {
        q: "ข้อ 8 — lb s7, 18(t0): s7 = .................",
        en: { q: "Q8 — lb s7, 18(t0): s7 = .................", options: ["0x00000014", "0xffffff14", "0x00000000", "0x00000012"], steps: ["myDat + 18 = (myDat+8) + 10 = uDat + 10", "uDat has only 10 bytes (offset 0..9) → +10 is right past the end", "Unused space contains 0 → s7 = 0x00000000"], explain: "myDat+18 = uDat+10 = right past uDat (uDat has 10 bytes) — unused space is 0 → s7 = 0x00000000" },
        code: { ref: "q1t8", hl: 11 },
        options: ["0x00000014", "0xffffff14", "0x00000000", "0x00000012"],
        correct: 2,
        steps: [
          "myDat + 18 = (myDat+8) + 10 = uDat + 10",
          "uDat มีแค่ 10 bytes (offset 0..9) → +10 คือตำแหน่งถัดไปเลย",
          "พื้นที่ว่างมีค่า 0 → s7 = 0x00000000"
        ],
        explain: "myDat+18 = uDat+10 = ตำแหน่งถัดจาก uDat (uDat มี 10 bytes) — พื้นที่ว่างมีค่า 0 → s7 = 0x00000000"
      },
      {
        q: "ข้อ 9 — 0xfffffffb+0x00000007 = ......................... (unsigned 32 บิต, ตอบเลขฐาน 10)",
        en: { q: "Q9 — 0xfffffffb+0x00000007 = ......................... (unsigned 32-bit, answer in decimal)", options: ["2", "4", "0", "4294967298"], steps: ["0xfffffffb = 4,294,967,291", "Add 7: 4,294,967,291 + 7 = 4,294,967,298", "Over 2^32-1 = 4,294,967,295 → wrap: subtract 2^32", "= 2"], explain: "0xfffffffb = 4,294,967,291 → +7 = 4,294,967,298 over 2^32-1 → wrap: 4,294,967,298 - 4,294,967,296 = 2" },
        options: ["2", "4", "0", "4294967298"],
        correct: 0,
        steps: [
          "0xfffffffb = 4,294,967,291",
          "บวก 7: 4,294,967,291 + 7 = 4,294,967,298",
          "เกิน 2^32-1 = 4,294,967,295 → วนรอบ: ลบ 2^32",
          "= 2"
        ],
        explain: "0xfffffffb = 4,294,967,291 → +7 = 4,294,967,298 เกิน 2^32-1 → วนรอบ: 4,294,967,298 - 4,294,967,296 = 2"
      },
      {
        q: "ข้อ 10 — 0x7ffffffb+x = ค่าลบที่มากที่สุดของ integer 32 บิตแบบ signed — x = ................. (เลขฐาน 10)",
        en: { q: "Q10 — 0x7ffffffb+x = the most negative value of a signed 32-bit integer — x = ................. (decimal)", options: ["4", "6", "3", "5"], steps: ["The most negative value of signed 32-bit = 0x80000000 (-2^31)", "Equation: 0x7ffffffb + x = 0x80000000", "Rearrange: x = 0x80000000 - 0x7ffffffb = 0x00000005", "= 5"], explain: "Most negative signed 32-bit = 0x80000000 → x = 0x80000000 - 0x7ffffffb = 0x00000005 = 5" },
        options: ["4", "6", "3", "5"],
        correct: 3,
        steps: [
          "ค่าลบที่มากที่สุด (ลบสุด) ของ signed 32 บิต = 0x80000000 (-2^31)",
          "โจทย์: 0x7ffffffb + x = 0x80000000",
          "ย้ายข้าง: x = 0x80000000 - 0x7ffffffb = 0x00000005",
          "= 5"
        ],
        explain: "ค่าลบที่มากที่สุด (ลบสุด) ของ signed 32 บิต = 0x80000000 → x = 0x80000000 - 0x7ffffffb = 0x00000005 = 5"
      }
    ],

    /* Flashcards — การ์ดทบทวน */
    flashcards: [
      { q: "MIPS Instruction มีขนาดเท่าไหร่?", a: "32 bits = 4 bytes" },
      { q: "R-Format มีช่องอะไรบ้าง?", a: "opcode, rs, rt, rd, shamt, funct" },
      { q: "I-Format มีช่องอะไรบ้าง?", a: "opcode, rs, rt, immediate" },
      { q: "J-Format มีช่องอะไรบ้าง?", a: "opcode, target address" },
      { q: "add rd, rs, rt หมายถึงอะไร?", a: "rd = rs + rt" },
      { q: "ใน add $t0,$t1,$t2 — rs, rt, rd คือใคร?", a: "rs=$t1, rt=$t2, rd=$t0" },
      { q: "shamt คืออะไร?", a: "Shift Amount — ใช้บอกว่าจะ Shift กี่ตำแหน่ง เช่น sll" },
      { q: "funct คืออะไร?", a: "Function — บอกว่า R-Format ต้องทำ operation อะไร เช่น add, sub" },
      { q: "Immediate คืออะไร?", a: "ค่าตัวเลขที่อยู่ใน Instruction โดยตรง เช่น เลข 10 ใน addi $t0,$t1,10" },
      { q: "addi $21,$22,-50 หมายถึงอะไร?", a: "$21 = $22 + (-50) — ใช้ Immediate จึงเป็น I-Format" },
      { q: "lw กับ sw ต่างกันยังไง?", a: "lw = Memory → Register · sw = Register → Memory" },
      { q: "lb กับ lbu ต่างกันยังไง?", a: "lb = sign-extend (ขยายเครื่องหมาย) · lbu = zero-extend" },
      { q: "j กับ jal ต่างกันยังไง?", a: "j = กระโดดอย่างเดียว · jal = เก็บ Address กลับไว้ที่ $ra แล้วกระโดด" },
      { q: "0xabcd1234 เก็บในหน่วยความจำ (little-endian) ยังไง?", a: "เก็บเป็น byte: 34 12 cd ab — byte ลำดับต่ำมาก่อน" },
      { q: "0x80000000 มีค่าเท่าไหร่ในแบบ signed 32 บิต?", a: "-2^31 = -2,147,483,648 — ค่าลบที่มากที่สุด (ลบสุด)" },
      { q: "R = ? I = ? J = ?", a: "R = Register · I = Immediate · J = Jump" }
    ],

    /* Glossary — คำศัพท์ */
    glossary: [
      { term: "Instruction", def: "คำสั่งที่บอก CPU ว่าต้องทำอะไร เช่น add, lw, j" },
      { term: "Instruction Format", def: "การจัดวาง 32 bits ของคำสั่งว่าแต่ละตำแหน่งเก็บอะไรบ้าง" },
      { term: "R-Format", def: "รูปแบบคำสั่งที่ทำงานกับ Register — opcode|rs|rt|rd|shamt|funct" },
      { term: "I-Format", def: "รูปแบบคำสั่งที่มี Immediate — opcode|rs|rt|immediate" },
      { term: "J-Format", def: "รูปแบบคำสั่ง Jump — opcode|target address" },
      { term: "opcode", def: "Operation Code — บอกว่าคำสั่งเป็นประเภทไหน" },
      { term: "rs", def: "Register ตัวที่ 1 (input) ของคำสั่ง" },
      { term: "rt", def: "Register ตัวที่ 2 (input) ของคำสั่ง" },
      { term: "rd", def: "Register ปลายทางที่เก็บผลลัพธ์" },
      { term: "shamt", def: "Shift Amount — จำนวนตำแหน่งที่ Shift เช่น sll" },
      { term: "funct", def: "Function — ระบุ operation ของ R-Format เช่น add, sub" },
      { term: "Immediate", def: "ค่าตัวเลขที่อยู่ในคำสั่งโดยตรง เช่น 10 ใน addi $t0,$t1,10" },
      { term: "addi", def: "Add Immediate — $rt = $rs + immediate (I-Format)" },
      { term: "lw", def: "Load Word — โหลดจาก Memory เข้า Register" },
      { term: "sw", def: "Store Word — เก็บจาก Register ลง Memory" },
      { term: "lb", def: "Load Byte — โหลด 1 byte แล้ว sign-extend" },
      { term: "lbu", def: "Load Byte Unsigned — โหลด 1 byte แล้ว zero-extend" },
      { term: "la", def: "Load Address — โหลด Address ของ Label เข้า Register" },
      { term: "beq", def: "Branch if EQual — กระโดดถ้าค่าเท่ากัน (I-Format)" },
      { term: "bne", def: "Branch if Not Equal — กระโดดถ้าค่าไม่เท่ากัน (I-Format)" },
      { term: "j", def: "Jump — กระโดดไปยังตำแหน่งที่กำหนด (J-Format)" },
      { term: "jal", def: "Jump And Link — เก็บ Address กลับไว้ที่ $ra แล้วกระโดด (J-Format)" },
      { term: "$ra", def: "Return Address — Register เก็บตำแหน่งที่ต้องกลับมาหลังจาก jal" },
      { term: "Little-endian", def: "การเก็บข้อมูลที่ byte ลำดับต่ำมาก่อน เช่น 0xabcd1234 → 34 12 cd ab" },
      { term: "Offset", def: "ค่าคงที่ที่ใช้ระบุตำแหน่ง เช่น lw $t0,4($s1) — offset = 4" },
      { term: "Label", def: "ชื่อตำแหน่งในโปรแกรม เช่น myDat, uDat, Loop" },
      { term: "Sign-extension", def: "การขยาย bit ให้ครบ 32 โดยเติมตาม bit เครื่องหมาย (lb)" },
      { term: "Zero-extension", def: "การขยาย bit โดยเติม 0 ด้านหน้า (lbu)" }
    ],

    /* Cheat sheet (ใช้สำหรับพิมพ์การ์ดสรุป) */
    cheat: [
      { term: "MIPS Instruction", def: "32 bits = 4 bytes" },
      { term: "R-Format", def: "opcode|rs|rt|rd|shamt|funct" },
      { term: "I-Format", def: "opcode|rs|rt|immediate" },
      { term: "J-Format", def: "opcode|target address" },
      { term: "R = Register", def: "add, sub, slt" },
      { term: "I = Immediate", def: "addi, lw, sw, beq, bne" },
      { term: "J = Jump", def: "j, jal" },
      { term: "add rd,rs,rt", def: "rd = rs + rt" },
      { term: "addi $21,$22,-50", def: "$21 = $22 + (-50)" },
      { term: "lw", def: "Memory → Register" },
      { term: "sw", def: "Register → Memory" },
      { term: "lb", def: "โหลด 1 byte + sign-extend" },
      { term: "lbu", def: "โหลด 1 byte + zero-extend" },
      { term: "jal", def: "เก็บ $ra แล้ว Jump" },
      { term: "0xabcd1234 (LE)", def: "เก็บเป็น 34 12 cd ab" },
      { term: "0x80000000", def: "-2^31 ค่าลบที่มากที่สุด (signed 32 บิต)" }
    ]
  },
  /* ==========================================================================
     CHAPTER 3 — MEMORY, ARITHMETIC, SHIFT และ OVERFLOW
     ========================================================================== */
  ch3: {
    title: "Memory, Arithmetic, Shift และ Overflow",
    thai: "Memory · Arithmetic · Shift",
    slides: [
      { title: "Cover — บทที่ 3: Memory, Arithmetic, Shift & Overflow", short: "เปิดบทเรียน" },
      { title: "เราจะเรียนอะไรบ้าง", short: "ภาพรวมบทเรียน" },
      { title: "lw — Load Word", short: "lw" },
      { title: "sw — Store Word", short: "sw" },
      { title: "Address ใน lw / sw", short: "Base + Offset" },
      { title: "lb / lbu / sb", short: "lb / lbu / sb" },
      { title: "Word กับ Byte ต่างกันยังไง", short: "Word vs Byte" },
      { title: "Arithmetic — add / sub / addi", short: "add / sub / addi" },
      { title: "Overflow คืออะไร?", short: "Overflow" },
      { title: "คำสั่งที่ตรวจ Overflow", short: "ตรวจ Overflow" },
      { title: "คำสั่งที่ไม่ตรวจ Overflow (u)", short: "ไม่ตรวจ Overflow" },
      { title: "Shift คืออะไร? (sll / srl)", short: "Shift คืออะไร" },
      { title: "sll — Shift Left Logical", short: "sll" },
      { title: "srl — Shift Right Logical", short: "srl" },
      { title: "sra — Shift Right Arithmetic", short: "sra" },
      { title: "Logical — and / or / xor / nor", short: "and/or/xor/nor" },
      { title: "andi / ori — immediate logical", short: "andi / ori" },
      { title: "li — Load Immediate", short: "li" },
      { title: "Signed vs Unsigned — ตัว u", short: "Signed vs Unsigned" },
      { title: "slt / sltu / sltiu — เปรียบเทียบ", short: "slt / sltu / sltiu" },
      { title: "เรื่องที่น่าจะออกสอบ", short: "เรื่องออกสอบ" },
      { title: "โปรแกรมข้อสอบ — bitwise.asm", short: "bitwise.asm" },
      { title: "bitwise.asm — ไล่ทีละคำสั่ง", short: "trace ทีละคำสั่ง" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz — แบบทดสอบบท 3 (10 ข้อ)", short: "แบบทดสอบ" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — พิมพ์คำตอบ 17 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. Memory — lw / sw / lb", topics: [3, 4, 5, 6, 7] },
      { label: "2. Arithmetic & Overflow", topics: [8, 9, 10, 11] },
      { label: "3. Shift — sll / srl / sra", topics: [12, 13, 14, 15] },
      { label: "4. Logical — and / or / xor / nor", topics: [16, 17, 18] },
      { label: "5. Signed/Unsigned & เปรียบเทียบ", topics: [19, 20] },
      { label: "6. เตรียมตัวสอบ", topics: [21] },
      { label: "7. โปรแกรมข้อสอบ (bitwise.asm)", topics: [22, 23] },
      { label: "ทบทวนและฝึกฝน", topics: [24, 25, 26, 27, 28, 29] }
    ],

    /* CN-specific keys — ใส่ array ว่างเพื่อกัน init เรียกฟังก์ชัน CN */
    layers: [],
    architectures: [],
    httpModes: [],
    methods: [],
    ports: [],

    /* โจทย์โปรแกรมที่ใช้ในข้อสอบ (code.ref ชี้มาที่นี่) */
    programs: {
      bitwise: {
        lines: [
          "li $s0,0x12345678",
          "li $s1,0xabcd1234",
          "and $t0,$s0,$s1",
          "or $t1,$s0,$s1",
          "xor $t2,$s0,$s1",
          "nor $t3,$s0,$s1",
          "sll $t4,$s0,5",
          "srl $t5,$s0,5",
          "sra $t6,$s0,5",
          "ori $t7,$s0,15",
          "andi $t8,$s0,15",
          "slt $t9,$s0,$s1",
          "sltu $s3,$s0,$s1",
          "sltiu $s4,$s1,9",
          "sltiu $s5,$s1,9",
          "sltiu $s6,$s0,9"
        ]
      }
    },

    /* Quiz — แบบทดสอบบท 3 (10 ข้อ) — สลับตำแหน่งคำตอบ + ตัวหลอกสมจริง */
    quiz: [
      {
        q: "lw หมายถึงอะไร?",
        options: ["โหลดจาก Memory → Register", "เก็บจาก Register → Memory", "โหลดจาก Register → Register", "ล้างค่า Register"],
        correct: 0,
        explain: "lw = Load Word — เอาข้อมูลจาก Memory มาใส่ Register"
      },
      {
        q: "sw หมายถึงอะไร?",
        options: ["โหลดจาก Memory → Register", "เก็บจาก Register → Memory", "สลับค่า Register", "เก็บค่าลง Register"],
        correct: 1,
        explain: "sw = Store Word — เอาข้อมูลจาก Register ไปเก็บใน Memory"
      },
      {
        q: "lw $t0, 4($s1) หมายถึงอะไร?",
        options: [
          "เอา $s1 + 4 ไปใส่ $t0",
          "เก็บ $t0 ลง Memory ที่ $s1 + 4",
          "ใช้ $s1 เป็น Base + offset 4 → อ่านข้อมูลจาก Memory มาใส่ $t0",
          "ตั้งค่า $t0 = 4"
        ],
        correct: 2,
        steps: [
          "lw = Load Word → ทิศทาง Memory → Register",
          "ในวงเล็บ $s1 คือ Base (ตำแหน่งเริ่มต้น) เลข 4 คือ Offset",
          "ไปอ่าน Memory ที่ Address = $s1 + 4 แล้วใส่ผลลัพธ์ใน $t0"
        ],
        explain: "Memory Address = $s1 + 4 แล้ว lw อ่านข้อมูลจาก Address นั้นมาใส่ $t0 — อย่าอ่านว่าเอา $s1+4 ไปใส่ $t0!"
      },
      {
        q: "lb กับ lbu ต่างกันยังไง?",
        options: [
          "lb โหลด 4 bytes · lbu โหลด 1 byte",
          "lb = unsigned · lbu = signed",
          "ไม่ต่างกันเลย",
          "lb = signed (sign-extend) · lbu = unsigned (zero-extend)"
        ],
        correct: 3,
        steps: [
          "ทั้งคู่โหลดข้อมูล 1 byte เหมือนกัน",
          "ต่างกันที่การขยาย: lb เติมตามบิตเครื่องหมาย (sign-extend) → ค่าลบได้",
          "lbu เติม 0 เสมอ (zero-extend) → ค่าเป็นบวกเสมอ",
          "จำง่าย: u = Unsigned = เติม 0"
        ],
        explain: "ทั้งคู่โหลด 1 byte แต่ lb ขยายเครื่องหมาย ส่วน lbu เติม 0 เสมอ"
      },
      {
        q: "คำสั่งใดบ้างที่ตรวจ Overflow?",
        options: ["addu, addiu, subu", "add, addi, sub", "sll, srl, sra", "lw, sw, lb"],
        correct: 1,
        explain: "add / addi / sub ตรวจ Overflow — ถ้าเกินจะแจ้ง/จัดการ ส่วนตัว u ไม่ตรวจ"
      },
      {
        q: "คำสั่งใดบ้างที่ไม่ตรวจ Overflow?",
        options: ["add, addi, sub", "sll, srl", "addu, addiu, subu", "lb, lbu, sb"],
        correct: 2,
        explain: "addu / addiu / subu — ตัว u สื่อถึง Unsigned ไม่สร้าง Exception จาก Integer Overflow"
      },
      {
        q: "sll 1 ตำแหน่ง ≈ ?",
        options: ["คูณ 2", "หาร 2", "บวก 2", "ลบ 2"],
        correct: 0,
        steps: [
          "sll = Shift Left Logical — เลื่อนบิตไปทางซ้าย",
          "ตัวอย่าง: 0010 (2) เลื่อนซ้าย 1 → 0100 (4)",
          "ดังนั้น sll 1 ตำแหน่ง ≈ คูณ 2"
        ],
        explain: "Shift Left 1 ตำแหน่ง ≈ คูณ 2 เช่น 0010 → 0100 = 2 → 4"
      },
      {
        q: "srl 1 ตำแหน่ง ≈ ?",
        options: ["คูณ 2", "หาร 2", "หาร 4", "บวก 2"],
        correct: 1,
        steps: [
          "srl = Shift Right Logical — เลื่อนบิตไปทางขวา",
          "ตัวอย่าง: 1000 (8) เลื่อนขวา 1 → 0100 (4)",
          "ดังนั้น srl 1 ตำแหน่ง ≈ หาร 2"
        ],
        explain: "Shift Right 1 ตำแหน่ง ≈ หาร 2 เช่น 1000 → 0100 = 8 → 4"
      },
      {
        q: "0x12345678 AND 0x0000000f = ?",
        options: ["0x12345678", "0x0000000f", "0x00000008", "0x00000000"],
        correct: 2,
        steps: [
          "0x0000000f มีบิต 1 เฉพาะ 4 ตัวล่าง (f = 1111)",
          "AND เอาเฉพาะบิตที่ทั้งสองฝั่งเป็น 1 → เอาเฉพาะ 4 บิตล่างของ 0x12345678",
          "4 บิตล่างของ ...78 คือ 8 → คำตอบ 0x00000008"
        ],
        explain: "AND ทีละบิต — เอาเฉพาะ 4 บิตล่างของ 0x12345678 → 0x8 → 0x00000008"
      },
      {
        q: "0x12345678 OR 0x0000000f = ?",
        options: ["0x1234567f", "0x12345678", "0x0000000f", "0x00000000"],
        correct: 0,
        steps: [
          "0x0000000f = 0000 0000 0000 0000 0000 0000 0000 1111",
          "OR: บิตไหนฝั่งใดเป็น 1 ก็เป็น 1 → บิตบน 28 ตัวเหมือนเดิม, 4 บิตล่างกลายเป็น f",
          "0x12345678 → 0x1234567f"
        ],
        explain: "OR ทีละบิต — 4 บิตล่างกลายเป็น f → 0x1234567f"
      }
    ],

    /* ข้อสอบหลังเรียน — 17 ข้อ (trace bitwise.asm + เขียนคำสั่ง) */
    exam: [
      {
        q: "ข้อ 1 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t0 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q1 — from the program (highlighted line): $t0 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["and = bitwise AND — compare 4 bits at a time (1 hex digit): 0x12345678 vs 0xabcd1234", "Digit by digit: 1&a=0, 2&b=2, 3&c=0, 4&d=4, 5&1=1, 6&2=2, 7&3=3, 8&4=0", "Result: 0x02041230"], explain: "and $t0,$s0,$s1 — bitwise AND: 0x12345678 & 0xabcd1234 = 0x02041230", hint: "AND 4 bits at a time: 1&a=0, 2&b=2, 3&c=0, 4&d=4, 5&1=1, 6&2=2, 7&3=3, 8&4=0" },
        type: "text",
        code: { ref: "bitwise", hl: 2 },
        answers: ["0x02041230"],
        steps: [
          "and = AND ทีละบิต — จับคู่ทีละ 4 บิต (1 หลัก hex): 0x12345678 กับ 0xabcd1234",
          "ไล่ทีละหลัก: 1&a=0, 2&b=2, 3&c=0, 4&d=4, 5&1=1, 6&2=2, 7&3=3, 8&4=0",
          "รวมเป็น 0x02041230"
        ],
        explain: "and $t0,$s0,$s1 — AND ทีละบิต: 0x12345678 & 0xabcd1234 = 0x02041230",
        hint: "AND ทีละ 4 บิต: 1&a=0, 2&b=2, 3&c=0, 4&d=4, 5&1=1, 6&2=2, 7&3=3, 8&4=0"
      },
      {
        q: "ข้อ 2 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t1 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q2 — from the program (highlighted line): $t1 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["or = bitwise OR — a bit is 1 if either side is 1", "Digit by digit: 1|a=b, 2|b=b, 3|c=f, 4|d=d, 5|1=5, 6|2=6, 7|3=7, 8|4=c", "Result: 0xbbfd567c"], explain: "or $t1,$s0,$s1 — bitwise OR: 0x12345678 | 0xabcd1234 = 0xbbfd567c", hint: "OR 4 bits at a time: 1|a=b, 2|b=b, 3|c=f, 4|d=d, 5|1=5, 6|2=6, 7|3=7, 8|4=c" },
        type: "text",
        code: { ref: "bitwise", hl: 3 },
        answers: ["0xbbfd567c"],
        steps: [
          "or = OR ทีละบิต — บิตไหนฝั่งใดเป็น 1 ก็เป็น 1",
          "ไล่ทีละหลัก: 1|a=b, 2|b=b, 3|c=f, 4|d=d, 5|1=5, 6|2=6, 7|3=7, 8|4=c",
          "รวมเป็น 0xbbfd567c"
        ],
        explain: "or $t1,$s0,$s1 — OR ทีละบิต: 0x12345678 | 0xabcd1234 = 0xbbfd567c",
        hint: "OR ทีละ 4 บิต: 1|a=b, 2|b=b, 3|c=f, 4|d=d, 5|1=5, 6|2=6, 7|3=7, 8|4=c"
      },
      {
        q: "ข้อ 3 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t2 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q3 — from the program (highlighted line): $t2 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["xor = bitwise XOR — 1 only when the two bits differ", "Digit by digit: 1^a=b, 2^b=9, 3^c=f, 4^d=9, 5^1=4, 6^2=4, 7^3=4, 8^4=c", "Result: 0xb9f9444c"], explain: "xor $t2,$s0,$s1 — bitwise XOR: 0x12345678 ^ 0xabcd1234 = 0xb9f9444c", hint: "XOR 4 bits at a time: 1^a=b, 2^b=9, 3^c=f, 4^d=9, 5^1=4, 6^2=4, 7^3=4, 8^4=c" },
        type: "text",
        code: { ref: "bitwise", hl: 4 },
        answers: ["0xb9f9444c"],
        steps: [
          "xor = XOR ทีละบิต — 1 เฉพาะเมื่อค่าต่างกัน",
          "ไล่ทีละหลัก: 1^a=b, 2^b=9, 3^c=f, 4^d=9, 5^1=4, 6^2=4, 7^3=4, 8^4=c",
          "รวมเป็น 0xb9f9444c"
        ],
        explain: "xor $t2,$s0,$s1 — XOR ทีละบิต: 0x12345678 ^ 0xabcd1234 = 0xb9f9444c",
        hint: "XOR ทีละ 4 บิต: 1^a=b, 2^b=9, 3^c=f, 4^d=9, 5^1=4, 6^2=4, 7^3=4, 8^4=c"
      },
      {
        q: "ข้อ 4 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t3 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q4 — from the program (highlighted line): $t3 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["nor = NOT(or) — first compute the or", "or gives 0xbbfd567c (from Q2)", "Flip every bit (0↔f, 1↔e, ...): 0xbbfd567c → 0x4402a983"], explain: "nor $t3,$s0,$s1 — NOT($s0 OR $s1) = NOT(0xbbfd567c) = 0x4402a983", hint: "nor = NOT(or) — compute or first, then flip the bits: NOT(0xbbfd567c) = 0x4402a983" },
        type: "text",
        code: { ref: "bitwise", hl: 5 },
        answers: ["0x4402a983"],
        steps: [
          "nor = NOT(or) — ต้องทำ or ก่อน",
          "or ได้ 0xbbfd567c (จากข้อ 2)",
          "กลับบิตทุกตัว (0↔f, 1↔e, ...): 0xbbfd567c → 0x4402a983"
        ],
        explain: "nor $t3,$s0,$s1 — NOT($s0 OR $s1) = NOT(0xbbfd567c) = 0x4402a983",
        hint: "nor = NOT(or) — คำนวณ or ก่อนแล้วกลับบิต: NOT(0xbbfd567c) = 0x4402a983"
      },
      {
        q: "ข้อ 5 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t4 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q5 — from the program (highlighted line): $t4 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["sll 5 = shift left 5 bits = multiply by 2^5 = 32", "0x12345678 × 32 = 9,773,436,672 → over 32 bits (max 4,294,967,295)", "Drop the overflow bits (mod 2^32) → 9,773,436,672 - 2×4,294,967,296 = 1,183,502,080", "= 0x468acf00"], explain: "sll $t4,$s0,5 — shift left 5 positions ≈ multiply by 32: 0x12345678 << 5 = 0x468acf00", hint: "sll 5 = multiply by 2^5 = 32 — 0x12345678 × 32, then drop the bits over 32 bits" },
        type: "text",
        code: { ref: "bitwise", hl: 6 },
        answers: ["0x468acf00"],
        steps: [
          "sll 5 = เลื่อนซ้าย 5 บิต = คูณ 2^5 = 32",
          "0x12345678 × 32 = 9,773,436,672 → เกิน 32 บิต (สูงสุด 4,294,967,295)",
          "ตัดบิตเกินทิ้ง (mod 2^32) → 9,773,436,672 - 2×4,294,967,296 = 1,183,502,080",
          "= 0x468acf00"
        ],
        explain: "sll $t4,$s0,5 — เลื่อนซ้าย 5 ตำแหน่ง ≈ คูณ 32: 0x12345678 << 5 = 0x468acf00",
        hint: "sll 5 = คูณ 2^5 = 32 — 0x12345678 × 32 แล้วตัดบิตเกิน 32 บิตทิ้ง"
      },
      {
        q: "ข้อ 6 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t5 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q6 — from the program (highlighted line): $t5 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["srl 5 = shift right 5 bits = divide by 2^5 = 32 (round down)", "0x12345678 ÷ 32 = 305,419,896 ÷ 32 = 9,544,371", "Fill with 0 in front to make 8 hex digits → 0x0091a2b3"], explain: "srl $t5,$s0,5 — logical shift right 5 positions ≈ divide by 32: 0x12345678 >> 5 = 0x0091a2b3", hint: "srl 5 = divide by 2^5 = 32 — 0x12345678 ÷ 32 = 0x0091a2b3 (fill 0 in front)" },
        type: "text",
        code: { ref: "bitwise", hl: 7 },
        answers: ["0x0091a2b3"],
        steps: [
          "srl 5 = เลื่อนขวา 5 บิต = หาร 2^5 = 32 (ปัดเศษลง)",
          "0x12345678 ÷ 32 = 305,419,896 ÷ 32 = 9,544,371",
          "เติม 0 ด้านหน้าให้ครบ 8 หลัก hex → 0x0091a2b3"
        ],
        explain: "srl $t5,$s0,5 — เลื่อนขวาแบบ logical 5 ตำแหน่ง ≈ หาร 32: 0x12345678 >> 5 = 0x0091a2b3",
        hint: "srl 5 = หาร 2^5 = 32 — 0x12345678 ÷ 32 = 0x0091a2b3 (เติม 0 หน้า)"
      },
      {
        q: "ข้อ 7 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t6 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q7 — from the program (highlighted line): $t6 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["sra shifts right arithmetically — fills with the sign bit (MSB)", "$s0 = 0x12345678 → MSB = 0 (positive) → fills with 0, same as srl", "So the result is the same as Q6 → 0x0091a2b3"], explain: "sra $t6,$s0,5 — $s0 is positive (MSB=0), so it equals srl: 0x0091a2b3", hint: "sra shifts right arithmetically — fills with the sign bit, but $s0 is positive, so it matches srl" },
        type: "text",
        code: { ref: "bitwise", hl: 8 },
        answers: ["0x0091a2b3"],
        steps: [
          "sra เลื่อนขวาแบบ arithmetic — เติมตามบิตเครื่องหมาย (MSB)",
          "$s0 = 0x12345678 → MSB = 0 (ค่าบวก) → เติม 0 เหมือน srl",
          "จึงได้ค่าเดียวกับข้อ 6 → 0x0091a2b3"
        ],
        explain: "sra $t6,$s0,5 — $s0 เป็นบวก (MSB=0) จึงเท่ากับ srl: 0x0091a2b3",
        hint: "sra เลื่อนขวาแบบ arithmetic — เติมตาม bit เครื่องหมาย แต่ $s0 เป็นบวก จึงได้เท่า srl"
      },
      {
        q: "ข้อ 8 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t7 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q8 — from the program (highlighted line): $t7 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["15 in hex = 0xf = 0000 0000 0000 1111", "OR: any bit that is 1 stays 1 → the lowest 4 bits become f, the rest stay the same", "0x12345678 → 0x1234567f"], explain: "ori $t7,$s0,15 — OR with 0xf: 0x12345678 | 0xf = 0x1234567f", hint: "ori uses immediate 15 = 0xf — the lowest 4 bits become f" },
        type: "text",
        code: { ref: "bitwise", hl: 9 },
        answers: ["0x1234567f"],
        steps: [
          "15 ในเลขฐาน 16 = 0xf = 0000 0000 0000 1111",
          "OR: บิตไหนเป็น 1 ก็เป็น 1 → 4 บิตล่างกลายเป็น f ส่วนบนเหมือนเดิม",
          "0x12345678 → 0x1234567f"
        ],
        explain: "ori $t7,$s0,15 — OR กับ 0xf: 0x12345678 | 0xf = 0x1234567f",
        hint: "ori ใช้ immediate 15 = 0xf — 4 บิตล่างกลายเป็น f"
      },
      {
        q: "ข้อ 9 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t8 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q9 — from the program (highlighted line): $t8 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["15 = 0xf = 0000 1111 → AND keeps only the lowest 4 bits of $s0", "The last hex digit of 0x12345678 is 8 (1000)", "The upper bits are cleared → 0x00000008"], explain: "andi $t8,$s0,15 — AND with 0xf: 0x12345678 & 0xf = 0x00000008", hint: "andi uses immediate 15 = 0xf — keep only the lowest 4 bits of $s0 = 8" },
        type: "text",
        code: { ref: "bitwise", hl: 10 },
        answers: ["0x00000008"],
        steps: [
          "15 = 0xf = 0000 1111 → AND เอาเฉพาะ 4 บิตล่างของ $s0",
          "เลขท้ายสุดของ 0x12345678 คือ 8 (1000)",
          "บิตบนถูกปิดหมด → 0x00000008"
        ],
        explain: "andi $t8,$s0,15 — AND กับ 0xf: 0x12345678 & 0xf = 0x00000008",
        hint: "andi ใช้ immediate 15 = 0xf — เอาเฉพาะ 4 บิตล่างของ $s0 = 8"
      },
      {
        q: "ข้อ 10 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $t9 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q10 — from the program (highlighted line): $t9 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["slt compares as signed (negatives are allowed)", "0x12345678 → MSB = 0 → positive (305 million)", "0xabcd1234 → MSB = 1 → negative (-1.4 billion)", "Positive < negative? No → result 0x00000000"], explain: "slt $t9,$s0,$s1 — signed: 0x12345678 (positive) < 0xabcd1234 (negative)? No → 0", hint: "slt compares as signed — 0xabcd1234 is negative (MSB=1), and a positive is never less than a negative" },
        type: "text",
        code: { ref: "bitwise", hl: 11 },
        answers: ["0x00000000"],
        steps: [
          "slt = เปรียบเทียบแบบ signed (มีค่าลบ)",
          "0x12345678 → MSB = 0 → ค่าบวก (305 ล้าน)",
          "0xabcd1234 → MSB = 1 → ค่าลบ (-1.4 พันล้าน)",
          "บวก < ลบ? ไม่จริง → ผลลัพธ์ 0x00000000"
        ],
        explain: "slt $t9,$s0,$s1 — signed: 0x12345678 (บวก) < 0xabcd1234 (ลบ)? ไม่ → 0",
        hint: "slt เปรียบเทียบ signed — 0xabcd1234 เป็นค่าลบ (MSB=1) ค่าบวกย่อมไม่น้อยกว่าค่าลบ"
      },
      {
        q: "ข้อ 11 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $s3 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q11 — from the program (highlighted line): $s3 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["sltu compares as unsigned (no negatives)", "0x12345678 = 305,419,896 and 0xabcd1234 = 2,882,343,476", "305M < 2.88B? Yes → result 1 → 0x00000001"], explain: "sltu $s3,$s0,$s1 — unsigned: 0x12345678 (305M) < 0xabcd1234 (2.88B)? Yes → 1", hint: "sltu compares as unsigned — treat 0xabcd1234 as 2,882,343,476, which is greater than 305,419,896" },
        type: "text",
        code: { ref: "bitwise", hl: 12 },
        answers: ["0x00000001"],
        steps: [
          "sltu = เปรียบเทียบแบบ unsigned (ไม่มีค่าลบ)",
          "0x12345678 = 305,419,896 และ 0xabcd1234 = 2,882,343,476",
          "305M < 2.88B? ใช่ → ผลลัพธ์ 1 → 0x00000001"
        ],
        explain: "sltu $s3,$s0,$s1 — unsigned: 0x12345678 (305M) < 0xabcd1234 (2.88B)? ใช่ → 1",
        hint: "sltu เปรียบเทียบ unsigned — มอง 0xabcd1234 เป็น 2,882,343,476 ซึ่งมากกว่า 305,419,896"
      },
      {
        q: "ข้อ 12 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $s4 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q12 — from the program (highlighted line): $s4 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["sltiu compares $s1 with the constant 9 as unsigned", "$s1 = 0xabcd1234 = 2,882,343,476", "2.88 billion < 9? No → 0x00000000"], explain: "sltiu $s4,$s1,9 — 0xabcd1234 < 9 (unsigned)? No → 0", hint: "sltiu compares as unsigned — 0xabcd1234 is much greater than 9, so the result is 0" },
        type: "text",
        code: { ref: "bitwise", hl: 13 },
        answers: ["0x00000000"],
        steps: [
          "sltiu = เปรียบเทียบ unsigned ระหว่าง $s1 กับค่าคงที่ 9",
          "$s1 = 0xabcd1234 = 2,882,343,476",
          "2.88 พันล้าน < 9? ไม่จริง → 0x00000000"
        ],
        explain: "sltiu $s4,$s1,9 — 0xabcd1234 < 9 (unsigned)? ไม่ → 0",
        hint: "sltiu เปรียบเทียบ unsigned — 0xabcd1234 มีค่ามากกว่า 9 มาก จึงเป็น 0"
      },
      {
        q: "ข้อ 13 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $s5 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q13 — from the program (highlighted line): $s5 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["Same instruction as Q12: sltiu $s5,$s1,9 (the question repeats)", "2,882,343,476 < 9? No", "→ 0x00000000"], explain: "sltiu $s5,$s1,9 — same as $s4: 0xabcd1234 < 9? No → 0", hint: "The question repeats — 0xabcd1234 < 9 is false → 0" },
        type: "text",
        code: { ref: "bitwise", hl: 14 },
        answers: ["0x00000000"],
        steps: [
          "คำสั่งเดียวกับข้อ 12: sltiu $s5,$s1,9 (โจทย์เดิมซ้ำกัน)",
          "2,882,343,476 < 9? ไม่จริง",
          "→ 0x00000000"
        ],
        explain: "sltiu $s5,$s1,9 — เช่นเดียวกับ $s4: 0xabcd1234 < 9? ไม่ → 0",
        hint: "โจทย์เดิมซ้ำกัน — 0xabcd1234 < 9 เป็นเท็จ → 0"
      },
      {
        q: "ข้อ 14 — จากโปรแกรม (บรรทัดที่ไฮไลต์): $s6 = ................. (ตอบเลขฐาน 16 นำหน้าด้วย 0x ตัวพิมพ์เล็ก)",
        en: { q: "Q14 — from the program (highlighted line): $s6 = ................. (answer in hex, lowercase, starting with 0x)", steps: ["sltiu $s6,$s0,9 — compare $s0 = 0x12345678 with 9", "0x12345678 = 305,419,896", "305 million < 9? No → 0x00000000"], explain: "sltiu $s6,$s0,9 — 0x12345678 < 9 (unsigned)? No → 0", hint: "0x12345678 = 305,419,896 is greater than 9 → false → 0" },
        type: "text",
        code: { ref: "bitwise", hl: 15 },
        answers: ["0x00000000"],
        steps: [
          "sltiu $s6,$s0,9 — เปรียบเทียบ $s0 = 0x12345678 กับ 9",
          "0x12345678 = 305,419,896",
          "305 ล้าน < 9? ไม่จริง → 0x00000000"
        ],
        explain: "sltiu $s6,$s0,9 — 0x12345678 < 9 (unsigned)? ไม่ → 0",
        hint: "0x12345678 = 305,419,896 มากกว่า 9 → เป็นเท็จ → 0"
      },
      {
        q: "ข้อ 15 — จากโปรแกรม: ให้เขียนคำสั่งเพียงคำสั่งเดียว เพื่อหาค่า complement ของ $s0 โดยผลลัพธ์เก็บใน $s2 (ไม่เว้นวรรค ยกเว้นจุดที่ต้องเว้น 1 ช่อง)",
        en: { q: "Q15 — from the program: write just ONE instruction to find the complement (NOT) of $s0, storing the result in $s2 (no spaces except where one space is required)", steps: ["complement = NOT of every bit", "nor $s2,$s0,$zero → NOT($s0 OR 0)", "$x OR 0 = $x always (OR with 0 changes nothing) → NOT($s0)", "So the instruction is: nor $s2,$s0,$zero"], explain: "nor $s2,$s0,$zero — NOT($s0 OR 0) = NOT($s0) = complement of $s0", hint: "complement = NOT — use nor with $zero because $x OR 0 = $x, then nor flips the bits for you" },
        type: "text",
        code: { ref: "bitwise", hl: 0 },
        answers: ["nor $s2,$s0,$zero", "nor $s2, $s0, $zero"],
        steps: [
          "complement = NOT ของทุกบิต",
          "nor $s2,$s0,$zero → NOT($s0 OR 0)",
          "$x OR 0 = $x เสมอ (OR กับ 0 ไม่เปลี่ยนค่า) → NOT($s0)",
          "ดังนั้นคำสั่งคือ nor $s2,$s0,$zero"
        ],
        explain: "nor $s2,$s0,$zero — NOT($s0 OR 0) = NOT($s0) = complement ของ $s0",
        hint: "complement = NOT — ใช้ nor กับ $zero เพราะ $x OR 0 = $x แล้ว nor จะกลับบิตให้"
      },
      {
        q: "ข้อ 16 — จากข้อ 15 ($s2 = complement ของ $s0 แล้ว): ให้เขียนคำสั่งเดียวหาค่า 2's complement ของ $s0 โดยผลลัพธ์เก็บใน $s3 (ต่อเนื่องจากข้อ 15)",
        en: { q: "Q16 — after Q15 ($s2 = complement of $s0 already): write ONE instruction to get the 2's complement of $s0, storing the result in $s3 (continuing from Q15)", steps: ["2's complement = complement + 1 (remember this formula)", "Q15 did nor $s2,$s0,$zero → $s2 = NOT($s0) = complement already", "Just add 1: addi $s3,$s2,1 (addiu also works because the value won't overflow)"], explain: "2's complement = complement + 1 — from Q15 we have $s2 = NOT($s0) → addi $s3,$s2,1 (addiu also accepted since it won't overflow)", hint: "2's complement = NOT(x) + 1 — $s2 from Q15 is already NOT($s0), just add 1" },
        type: "text",
        code: {
          lines: ["nor $s2,$s0,$zero", "# ตอนนี้ $s2 = NOT($s0) = complement แล้ว", "# ต้องการ 2's complement = complement + 1"],
          hl: 0
        },
        answers: ["addi $s3,$s2,1", "addiu $s3,$s2,1", "addi $s3, $s2, 1", "addiu $s3, $s2, 1"],
        steps: [
          "2's complement = complement + 1 (สูตรต้องจำ)",
          "ข้อ 15 ทำ nor $s2,$s0,$zero → $s2 = NOT($s0) = complement อยู่แล้ว",
          "เหลือแค่บวก 1: addi $s3,$s2,1 (หรือ addiu ก็ได้ เพราะค่าไม่ล้น)"
        ],
        explain: "2's complement = complement + 1 — จากข้อ 15 ได้ $s2 = NOT($s0) แล้ว → addi $s3,$s2,1 (รับ addiu ด้วย เนื่องจากค่าไม่ล้น)",
        hint: "2's complement = NOT(x) + 1 — $s2 จากข้อ 15 คือ NOT($s0) อยู่แล้ว แค่บวก 1"
      },
      {
        q: "ข้อ 17 — จากโปรแกรม: ให้เขียนคำสั่งเดียวทำให้ $s0 บิตที่ 14-31 มีค่าเป็น 0 ส่วนบิตที่เหลือ (0-13) คงเดิม (เช่น ใช้ mask 0x3fff)",
        en: { q: "Q17 — from the program: write ONE instruction so that bits 14-31 of $s0 become 0 while the remaining bits (0-13) stay the same (e.g. use the mask 0x3fff)", steps: ["AND with 1 keeps the bit; AND with 0 clears the bit", "To keep bits 0-13 → the mask must have 1 in bits 0-13 and 0 in bits 14-31", "mask = 2^14 - 1 = 16383 = 0x3fff", "Instruction: andi $s0,$s0,0x3fff"], explain: "andi $s0,$s0,0x3fff — 0x3fff has bits 0-13 = 1 and bits 14-31 = 0 → AND clears the high bits and keeps the low bits", hint: "You must keep bits 0-13 → mask = 2^14 - 1 = 0x3fff = 16383, then use andi" },
        type: "text",
        code: { ref: "bitwise", hl: 0 },
        answers: ["andi $s0,$s0,0x3fff", "andi $s0, $s0, 0x3fff", "andi $s0,$s0,16383", "andi $s0, $s0, 16383"],
        steps: [
          "AND กับ 1 = คงค่าเดิม, AND กับ 0 = ปิดบิต",
          "ต้องเก็บบิต 0-13 → mask ตรงบิต 0-13 ต้องเป็น 1, บิต 14-31 เป็น 0",
          "mask = 2^14 - 1 = 16383 = 0x3fff",
          "คำสั่ง: andi $s0,$s0,0x3fff"
        ],
        explain: "andi $s0,$s0,0x3fff — 0x3fff = บิต 0-13 เป็น 1, บิต 14-31 เป็น 0 → AND แล้วบิตสูงหาย บิตต่ำคงเดิม",
        hint: "ต้องเก็บบิต 0-13 → mask = 2^14 - 1 = 0x3fff = 16383 แล้วใช้ andi"
      }
    ],

    /* Flashcards — การ์ดทบทวน */
    flashcards: [
      { q: "lw หมายถึงอะไร?", a: "Load Word — Memory → Register" },
      { q: "sw หมายถึงอะไร?", a: "Store Word — Register → Memory" },
      { q: "lw $t0, 4($s1) หมายถึงอะไร?", a: "Memory Address = $s1 + 4 → อ่านมาใส่ $t0" },
      { q: "lb / lbu / sb คืออะไร?", a: "lb = Load Byte (signed) · lbu = Load Byte Unsigned · sb = Store Byte" },
      { q: "Word กับ Byte ต่างกันยังไง?", a: "Word = 4 Bytes → lw/sw 4 bytes · lb/lbu/sb 1 byte" },
      { q: "add / sub / addi ใช้ยังไง?", a: "add $t0,$t1,$t2 → $t0=$t1+$t2 · sub → ลบ · addi → บวก immediate" },
      { q: "Overflow คืออะไร?", a: "ผลลัพธ์เกินกว่าที่จำนวนบิตกำหนดเก็บได้ เช่น 15+3 ใน 4 บิต" },
      { q: "คำสั่งที่ตรวจ Overflow?", a: "add, addi, sub" },
      { q: "คำสั่งที่ไม่ตรวจ Overflow?", a: "addu, addiu, subu — ตัว u = Unsigned" },
      { q: "sll คืออะไร?", a: "Shift Left Logical — เลื่อนซ้าย 1 ตำแหน่ง ≈ คูณ 2" },
      { q: "srl คืออะไร?", a: "Shift Right Logical — เลื่อนขวา 1 ตำแหน่ง ≈ หาร 2" },
      { q: "sra ต่างจาก srl ยังไง?", a: "sra เลื่อนขวาแบบ arithmetic — เติมตาม bit เครื่องหมาย" },
      { q: "and / or / xor / nor ทำอะไร?", a: "AND/OR/XOR/NOT(OR) ทีละบิตของ Register 2 ตัว" },
      { q: "andi / ori คืออะไร?", a: "AND/OR กับ immediate เช่น andi $t8,$s0,15 → เอา 4 บิตล่าง" },
      { q: "li คืออะไร?", a: "Load Immediate — ใส่ค่าคงที่ลง Register เช่น li $s0,0x12345678" },
      { q: "slt / sltu / sltiu ต่างกันยังไง?", a: "slt = signed · sltu = unsigned · sltiu = กับ immediate (unsigned)" }
    ],

    /* Glossary — คำศัพท์ */
    glossary: [
      { term: "lw", def: "Load Word — โหลด 4 bytes จาก Memory เข้า Register" },
      { term: "sw", def: "Store Word — เก็บ 4 bytes จาก Register ลง Memory" },
      { term: "lb", def: "Load Byte — โหลด 1 byte แบบ signed (sign-extend)" },
      { term: "lbu", def: "Load Byte Unsigned — โหลด 1 byte แบบ unsigned (zero-extend)" },
      { term: "sb", def: "Store Byte — เก็บ 1 byte จาก Register ลง Memory" },
      { term: "Word", def: "หน่วยข้อมูล 4 bytes (32 bits) ของ MIPS" },
      { term: "Byte", def: "หน่วยข้อมูล 1 byte (8 bits)" },
      { term: "Base Address", def: "ตำแหน่งเริ่มต้นที่ใช้ใน lw/sw เช่น $s1 ใน lw $t0,4($s1)" },
      { term: "Offset", def: "ค่าคงที่ที่บวกกับ Base Address เพื่อหาตำแหน่ง Memory" },
      { term: "add", def: "Add — $rd = $rs + $rt (ตรวจ Overflow)" },
      { term: "sub", def: "Subtract — $rd = $rs - $rt (ตรวจ Overflow)" },
      { term: "addi", def: "Add Immediate — $rt = $rs + immediate (ตรวจ Overflow)" },
      { term: "addu", def: "Add Unsigned — ไม่ตรวจ Overflow" },
      { term: "addiu", def: "Add Immediate Unsigned — ไม่ตรวจ Overflow" },
      { term: "subu", def: "Subtract Unsigned — ไม่ตรวจ Overflow" },
      { term: "Overflow", def: "ผลลัพธ์เกินกว่าที่จำนวนบิตกำหนดเก็บได้" },
      { term: "Exception", def: "การแจ้งเตือนเมื่อเกิดปัญหา เช่น Integer Overflow" },
      { term: "sll", def: "Shift Left Logical — เลื่อนซ้าย เติม 0 (คูณ 2)" },
      { term: "srl", def: "Shift Right Logical — เลื่อนขวา เติม 0 (หาร 2)" },
      { term: "sra", def: "Shift Right Arithmetic — เลื่อนขวา เติมตาม bit เครื่องหมาย" },
      { term: "Shamt", def: "Shift Amount — จำนวนตำแหน่งที่จะ shift ในคำสั่ง sll/srl/sra" },
      { term: "and", def: "AND ทีละบิตของ Register 2 ตัว" },
      { term: "or", def: "OR ทีละบิตของ Register 2 ตัว" },
      { term: "xor", def: "XOR ทีละบิต — 1 เฉพาะเมื่อค่าต่างกัน" },
      { term: "nor", def: "NOT(OR) — กลับบิตของผล OR เช่น nor $s2,$s0,$zero = NOT($s0)" },
      { term: "andi", def: "AND กับ immediate เช่น andi $t8,$s0,15" },
      { term: "ori", def: "OR กับ immediate เช่น ori $t7,$s0,15" },
      { term: "li", def: "Load Immediate — ใส่ค่าคงที่ลง Register" },
      { term: "slt", def: "Set Less Than — เปรียบเทียบ signed: 1 ถ้า $rs < $rt" },
      { term: "sltu", def: "Set Less Than Unsigned — เปรียบเทียบแบบ unsigned" },
      { term: "sltiu", def: "Set Less Than Immediate Unsigned — เปรียบเทียบ $rs กับ immediate" },
      { term: "Signed", def: "มีค่าติดลบได้ เช่น -10, 0, 10 (ใช้ MSB เป็นเครื่องหมาย)" },
      { term: "Unsigned", def: "ไม่มีค่าติดลบ เช่น 0, 1, 2, ... (ใช้บิตทั้งหมดแทนค่า)" },
      { term: "Mask", def: "ค่า 0/1 ที่ใช้ AND/OR เพื่อเลือกบิต เช่น 0x3fff เก็บบิต 0-13" }
    ],

    /* Cheat sheet (ใช้สำหรับพิมพ์การ์ดสรุป) */
    cheat: [
      { term: "lw", def: "Memory → Register (โหลด 4 bytes)" },
      { term: "sw", def: "Register → Memory (เก็บ 4 bytes)" },
      { term: "lb / lbu / sb", def: "โหลด 1 byte signed / unsigned · เก็บ 1 byte" },
      { term: "Word = 4 Bytes", def: "lw/sw 4 bytes · lb/lbu/sb 1 byte" },
      { term: "add / sub / addi", def: "ตรวจ Overflow" },
      { term: "addu / addiu / subu", def: "ไม่ตรวจ Overflow (u = Unsigned)" },
      { term: "sll 1", def: "≈ คูณ 2 (Shift Left)" },
      { term: "srl 1", def: "≈ หาร 2 (Shift Right Logical)" },
      { term: "sra", def: "เลื่อนขวา เติมตาม bit เครื่องหมาย" },
      { term: "and / or / xor / nor", def: "ทีละบิต · nor = NOT(or)" },
      { term: "andi / ori", def: "AND / OR กับ immediate" },
      { term: "li", def: "Load Immediate — ใส่ค่าคงที่ลง Register" },
      { term: "slt / sltu / sltiu", def: "signed / unsigned / immediate-unsigned เปรียบเทียบ" },
      { term: "0x12345678 & 0xf", def: "0x00000008 (เอา 4 บิตล่าง)" },
      { term: "0x12345678 | 0xf", def: "0x1234567f (4 บิตล่างเป็น f)" },
      { term: "nor $s2,$s0,$zero", def: "complement ของ $s0 (NOT)" },
      { term: "2's complement", def: "NOT(x) + 1 เช่น addi $s3,$s2,1" },
      { term: "mask 0x3fff", def: "เก็บบิต 0-13, ล้างบิต 14-31" }
    ]
  },
  /* ==========================================================================
     CHAPTER 4 — MIPS INSTRUCTION REPRESENTATION (การแทนคำสั่งของ MIPS)
     ========================================================================== */
  ch4: {
    title: "MIPS Instruction Representation",
    thai: "MIPS Instruction Representation",
    slides: [
      { title: "Cover — บทที่ 4: MIPS Instruction Representation", short: "เปิดบทเรียน" },
      { title: "ภาพรวม — ทำไมต้องเรียนเรื่องนี้", short: "ภาพรวมบทเรียน" },
      { title: "Stored-Program Concept", short: "Stored-Program" },
      { title: "ผลที่ตามมา (Consequences)", short: "ผลที่ตามมา" },
      { title: "คำสั่งกลายเป็นตัวเลขได้อย่างไร", short: "คำสั่ง = ตัวเลข" },
      { title: "R-Format — โครงสร้างและความหมาย", short: "R-Format" },
      { title: "ตัวอย่าง R-Format — add $8,$9,$10 → 0x012A4020", short: "ตัวอย่าง R-Format" },
      { title: "I-Format — โครงสร้าง", short: "I-Format" },
      { title: "ตัวอย่าง I-Format — addi $21,$22,-50", short: "ตัวอย่าง I-Format" },
      { title: "J-Format — โครงสร้าง", short: "J-Format" },
      { title: "Branch — PC-Relative Addressing", short: "Branch ญาติ PC" },
      { title: "Jump — Absolute Addressing", short: "Jump สัมบูรณ์" },
      { title: "Disassembly — ถอดรหัสย้อนกลับ", short: "Disassembly" },
      { title: "Pseudoinstructions — MAL vs TAL", short: "MAL vs TAL" },
      { title: "สรุปตาราง 3 Formats + ใจความสำคัญ", short: "สรุป 3 Formats" },
      { title: "เรื่องที่น่าจะออกสอบ", short: "เรื่องออกสอบ" },
      { title: "โปรแกรมข้อสอบ — fib.asm", short: "fib.asm" },
      { title: "fib.asm — ไล่ทีละคำสั่ง (Stack & Recursion)", short: "trace fib" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz — แบบทดสอบบท 4 (10 ข้อ)", short: "แบบทดสอบ" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — พิมพ์คำตอบ 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. Stored-Program Concept", topics: [3, 4] },
      { label: "2. R / I / J Format", topics: [5, 6, 7, 8, 9, 10] },
      { label: "3. Branch & Jump Addressing", topics: [11, 12] },
      { label: "4. Disassembly & Pseudoinstructions", topics: [13, 14] },
      { label: "5. สรุป + เตรียมตัวสอบ", topics: [15, 16] },
      { label: "6. โปรแกรมข้อสอบ (fib.asm)", topics: [17, 18] },
      { label: "ทบทวนและฝึกฝน", topics: [19, 20, 21, 22, 23, 24] }
    ],

    /* CN-specific keys — กันฟังก์ชัน CN ที่ init เรียก (ไม่มี DOM ในหน้าใหม่) */
    udpFields: [],
    handshake: [],

    /* โจทย์โปรแกรมที่ใช้ในข้อสอบ — fib.asm พร้อม address ของทุกคำสั่ง (MARS: text เริ่ม 0x00400000, sp เริ่ม 0x7fffeffc) */
    programs: {
      fib: {
        lines: [
          ".text",
          "0x00400000  main: addi $a0,$zero,7",
          "0x00400004        jal fib",
          "0x00400008        add $s5,$v0,$zero",
          "0x0040000c        j exit",
          "0x00400010  fib:  addi $sp,$sp,-12",
          "0x00400014        sw $ra,8($sp)",
          "0x00400018        sw $s0,4($sp)",
          "0x0040001c        addi $v0,$zero,1",
          "0x00400020        beq $a0,$zero,fin",
          "0x00400024        addi $t0,$zero,1",
          "0x00400028        beq $a0,$t0,fin",
          "0x0040002c        addi $a0,$a0,-1",
          "0x00400030        sw $a0,0($sp)",
          "0x00400034        jal fib",
          "0x00400038        lw $a0,0($sp)",
          "0x0040003c        addi $a0,$a0,-1",
          "0x00400040        add $s0,$v0,$zero",
          "0x00400044        jal fib",
          "0x00400048        add $v0,$v0,$s0",
          "0x0040004c  fin:  lw $s0,4($sp)",
          "0x00400050        lw $ra,8($sp)",
          "0x00400054        addi $sp,$sp,12",
          "0x00400058        jr $ra",
          "0x0040005c  exit: add $zero,$zero,$zero",
          "# fib(7) = 21 → เก็บที่ $v0 และคัดลอกไป $s5"
        ]
      }
    },

    /* Quiz — แบบทดสอบบท 4 (10 ข้อ) — สลับตำแหน่ง + ตัวหลอกสมจริง */
    quiz: [
      {
        q: "Stored-Program Concept คืออะไร?",
        options: ["ต้องมีหน่วยความจำแยกสำหรับโปรแกรมและข้อมูล", "ทั้งข้อมูลและคำสั่งโปรแกรมเก็บใน Memory เดียวกันได้", "โปรแกรมต้องเก็บใน ROM เท่านั้น", "คำสั่ง CPU ไม่ใช่ตัวเลข"],
        correct: 1,
        explain: "ทั้งข้อมูลและคำสั่งเป็นแค่ตัวเลข จึงเก็บใน RAM ตัวเดียวกันได้ — ไม่ต้องแยกหน่วยความจำ"
      },
      {
        q: "PC (Program Counter) เก็บอะไร?",
        options: ["ผลลัพธ์ของการคำนวณ", "ค่าที่มากที่สุดในโปรแกรม", "Address ของคำสั่งที่กำลังจะรัน", "จำนวนคำสั่งทั้งหมด"],
        correct: 2,
        explain: "PC = Program Counter — register ที่จำว่าตอนนี้กำลังรันคำสั่งอยู่ที่ address ไหน"
      },
      {
        q: "MIPS Instruction มีขนาดเท่าไร?",
        options: ["16 bits", "32 bits = 4 bytes", "64 bits", "8 bits"],
        correct: 1,
        explain: "MIPS กำหนดให้ instruction ทุกคำสั่งมีขนาด 32 bits (4 bytes) คงที่เสมอ"
      },
      {
        q: "R-Format ประกอบด้วยช่องอะไรบ้าง?",
        options: ["opcode, rs, rt, immediate", "opcode, target address", "opcode, rs, rt, rd, shamt, funct", "rs, rt, rd, shamt"],
        correct: 2,
        explain: "R = Register — opcode(6) + rs(5) + rt(5) + rd(5) + shamt(5) + funct(6) = 32 bits"
      },
      {
        q: "I-Format ประกอบด้วยช่องอะไรบ้าง?",
        options: ["opcode, rs, rt, immediate", "opcode, rs, rt, rd", "opcode, target address", "rs, rt, immediate, funct"],
        correct: 0,
        explain: "I = Immediate — opcode(6) + rs(5) + rt(5) + immediate(16) = 32 bits"
      },
      {
        q: "J-Format ประกอบด้วยช่องอะไรบ้าง?",
        options: ["opcode, rs, rt, immediate", "opcode, target address (26 bits)", "opcode, funct, immediate", "target address 32 bits ล้วน"],
        correct: 1,
        explain: "J = Jump — opcode(6) + target address(26) = 32 bits ใช้กับ j, jal"
      },
      {
        q: "beq เกิด branch จริง — PC ใหม่คำนวณยังไง?",
        options: ["PC + immediate", "PC + 4 + immediate", "(PC + 4) + immediate × 4", "PC × immediate"],
        correct: 2,
        steps: [
          "ไม่ branch: PC ใหม่ = PC + 4 (ไปคำสั่งถัดไป)",
          "branch: PC ใหม่ = (PC + 4) + (immediate × 4)",
          "immediate เก็บเป็น 'จำนวนคำสั่ง' จึงต้องคูณ 4 เพราะแต่ละคำสั่งห่างกัน 4 bytes"
        ],
        explain: "PC ใหม่ = (PC + 4) + immediate × 4 — immediate เก็บจำนวนคำสั่ง ไม่ใช่จำนวน bytes"
      },
      {
        q: "ทำไม immediate ใน branch ต้องคูณ 4?",
        options: ["เพื่อให้เป็นเลขคู่เสมอ", "เพราะคำสั่งแต่ละตัวห่างกัน 4 bytes (word-aligned)", "เพราะ branch ต้องกระโดด 4 ครั้ง", "เพราะ immediate เก็บได้แค่ 4 บิต"],
        correct: 1,
        steps: [
          "ทุกคำสั่ง MIPS มีขนาด 4 bytes เท่ากัน",
          "จึงเก็บ immediate เป็น 'จำนวนคำสั่ง' แทนจำนวน bytes",
          "เวลาคำนวณต้องคูณ 4 → กระโดดได้ไกลขึ้น 4 เท่าโดยใช้บิตเท่าเดิม"
        ],
        explain: "คำสั่งห่างกัน 4 bytes เสมอ (word-aligned) → เก็บเป็นจำนวนคำสั่ง แล้วคูณ 4 ตอนคำนวณ"
      },
      {
        q: "j (Jump) ระบุ target address กี่บิต?",
        options: ["16 บิต", "26 บิต (รวมกับ PC บน 4 บิต + 00)", "32 บิตเต็ม", "6 บิต"],
        correct: 1,
        explain: "target 26 บิต + PC บน 4 บิต + 2 บิตท้าย 00 = ครบ 32 บิต (คำสั่งอยู่ที่ address หาร 4 ลงตัวเสมอ)"
      },
      {
        q: "move $t0,$t1 เป็น pseudoinstruction — Assembler แปลงเป็นอะไร?",
        options: ["add $t0,$zero,$t1", "lw $t0,0($t1)", "sub $t0,$t0,$t0", "j $t1"],
        correct: 0,
        steps: [
          "move ไม่มีอยู่ในฮาร์ดแวร์จริง — เป็นคำสั่งลวงตา (pseudoinstruction)",
          "$zero มีค่า 0 เสมอ → $t0 = $t1 + 0 = $t1",
          "Assembler จึงแปลงเป็น add $t0,$zero,$t1"
        ],
        explain: "move rd,rs → add rd,$zero,rs — เพราะ $t1 + 0 = $t1"
      }
    ],
    /* ข้อสอบหลังเรียน — 20 ข้อ (trace fib.asm + คำนวณ) พิมพ์คำตอบเอง */
    exam: [
      {
        q: "ข้อ 1 — หลังจากรันโปรแกรมเสร็จ คำตอบสุดท้ายถูกเก็บใน register กี่ตัว? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q1 — after the program finishes, in how many registers is the final answer stored? (answer in decimal)", steps: ["fib(7) = 21 is computed in $v0 (instruction add $v0,$v0,$s0 at 0x00400048)", "Back in main: add $s5,$v0,$zero (0x00400008) copies 21 into $s5 as well", "So the final answer is in 2 registers: $v0 and $s5"], explain: "The final answer (21) is stored in both $v0 and $s5 → 2 registers", hint: "Follow main: the result of jal fib is in $v0, then main copies it to $s5" },
        type: "text",
        code: { ref: "fib", hl: 3 },
        answers: ["2"],
        steps: [
          "fib(7) = 21 ถูกคำนวณไว้ที่ $v0 (คำสั่ง add $v0,$v0,$s0 ที่ 0x00400048)",
          "กลับมาที่ main: add $s5,$v0,$zero (0x00400008) คัดลอก 21 ไปยัง $s5 อีกตัว",
          "ดังนั้นคำตอบสุดท้ายอยู่ใน register 2 ตัว: $v0 และ $s5"
        ],
        explain: "คำตอบสุดท้าย (21) เก็บทั้งใน $v0 และ $s5 → 2 register",
        hint: "ไล่ main กลับมาดู: ผลลัพธ์ของ jal fib อยู่ที่ $v0 แล้ว main ก็คัดลอกไป $s5"
      },
      {
        q: "ข้อ 2 — ค่าคำตอบสุดท้ายมีค่าเท่าไร? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q2 — what is the final answer? (answer in decimal)", steps: ["This program gives fib(0) = 1 and fib(1) = 1 (both base cases return 1)", "Build up: fib(2) = 2, fib(3) = 3, fib(4) = 5, fib(5) = 8, fib(6) = 13", "fib(7) = fib(6) + fib(5) = 13 + 8 = 21"], explain: "The sequence this program computes: 1, 1, 2, 3, 5, 8, 13, 21 → fib(7) = 21", hint: "The question calls fib(7): 13 + 8 = ... try continuing the sequence 1,1,2,3,5,8,13" },
        type: "text",
        code: { ref: "fib", hl: 3 },
        answers: ["21"],
        steps: [
          "โปรแกรมนี้ให้ fib(0) = 1 และ fib(1) = 1 (ทั้งสอง base case คืนค่า 1)",
          "ไล่ขึ้นไป: fib(2) = 2, fib(3) = 3, fib(4) = 5, fib(5) = 8, fib(6) = 13",
          "fib(7) = fib(6) + fib(5) = 13 + 8 = 21"
        ],
        explain: "ลำดับที่โปรแกรมนี้คำนวณ: 1, 1, 2, 3, 5, 8, 13, 21 → fib(7) = 21",
        hint: "โจทย์เรียก fib(7): 21 + 8 = ... ลองเขียนลำดับ 1,1,2,3,5,8,13 ต่อ",
      },
      {
        q: "ข้อ 3 — ค่า $ra ที่มากที่สุดขณะที่รันโปรแกรมมีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q3 — what is the largest value of $ra while the program runs? (answer in hex, starting with 0x)", steps: ["$ra is set by jal — it stores the address of the instruction right after the jal", "jal at 0x00400004 (in main) → $ra = 0x00400008", "jal at 0x00400034 (left call) → $ra = 0x00400038", "jal at 0x00400044 (right call) → $ra = 0x00400048 ← largest"], explain: "$ra can only be {0x00400008, 0x00400038, 0x00400048} → largest = 0x00400048", hint: "$ra = the address after a jal — jal at 0x00400044 gives 0x00400048" },
        type: "text",
        code: { ref: "fib", hl: 18 },
        answers: ["0x00400048", "00400048"],
        steps: [
          "$ra ถูกตั้งโดย jal — เก็บ address ของคำสั่งถัดไปจาก jal",
          "jal ที่ 0x00400004 (ใน main) → $ra = 0x00400008",
          "jal ที่ 0x00400034 (เรียกซ้าย) → $ra = 0x00400038",
          "jal ที่ 0x00400044 (เรียกขวา) → $ra = 0x00400048 ← มากที่สุด"
        ],
        explain: "$ra มีค่าได้แค่ {0x00400008, 0x00400038, 0x00400048} → มากที่สุด = 0x00400048",
        hint: "$ra = address ถัดจาก jal — jal ที่ 0x00400044 ให้ 0x00400048"
      },
      {
        q: "ข้อ 4 — ค่า $ra ที่น้อยที่สุดขณะที่รันโปรแกรมมีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q4 — what is the smallest value of $ra while the program runs? (answer in hex, starting with 0x)", steps: ["$ra is first set by jal fib in main (0x00400004)", "jal stores the address of the next instruction = 0x00400008", "The other values (0x00400038, 0x00400048) are larger → smallest = 0x00400008"], explain: "Smallest $ra = 0x00400008 — from the first jal fib in main", hint: "The first jal of the program (in main) stores the next address = 0x00400008" },
        type: "text",
        code: { ref: "fib", hl: 2 },
        answers: ["0x00400008", "00400008"],
        steps: [
          "$ra ถูกตั้งครั้งแรกโดย jal fib ใน main (0x00400004)",
          "jal เก็บ address ของคำสั่งถัดไป = 0x00400008",
          "ค่าอื่น ๆ (0x00400038, 0x00400048) มากกว่านี้ → น้อยที่สุด = 0x00400008"
        ],
        explain: "$ra น้อยสุด = 0x00400008 — เกิดจาก jal fib ตัวแรกใน main",
        hint: "jal ตัวแรกของโปรแกรม (ใน main) เก็บ address ถัดไป = 0x00400008"
      },
      {
        q: "ข้อ 5 — ค่า $sp ที่มากที่สุดขณะที่รันโปรแกรมมีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q5 — what is the largest value of $sp while the program runs? (answer in hex, starting with 0x)", steps: ["$sp starts at 0x7fffeffc (before calling fib)", "Each time we enter fib: addi $sp,$sp,-12 → $sp decreases by 12", "Each time we exit fib: addi $sp,$sp,12 → $sp comes back", "So the largest value is the starting value = 0x7fffeffc"], explain: "$sp never goes above the starting value → largest = 0x7fffeffc", hint: "$sp starts at 0x7fffeffc and only goes down → the largest value is the starting value" },
        type: "text",
        code: { ref: "fib", hl: 5 },
        answers: ["0x7fffeffc", "7fffeffc"],
        steps: [
          "$sp เริ่มต้นที่ 0x7fffeffc (ก่อนเรียก fib)",
          "ทุกครั้งเข้า fib: addi $sp,$sp,-12 → $sp ลดลง 12",
          "ทุกครั้งออก fib: addi $sp,$sp,12 → $sp กลับคืนเดิม",
          "ดังนั้นค่ามากที่สุดคือค่าเริ่มต้น = 0x7fffeffc"
        ],
        explain: "$sp ไม่เคยเพิ่มเกินค่าเริ่มต้น → มากสุด = 0x7fffeffc",
        hint: "$sp เริ่มที่ 0x7fffeffc แล้วลดลงเรื่อย ๆ → ค่ามากสุดคือค่าเริ่มต้น"
      },
      {
        q: "ข้อ 6 — ค่า $sp ที่น้อยที่สุดขณะที่รันโปรแกรมมีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q6 — what is the smallest value of $sp while the program runs? (answer in hex, starting with 0x)", steps: ["Find the maximum recursion depth: fib(7)→fib(6)→fib(5)→fib(4)→fib(3)→fib(2)→fib(1) = 7 stacked frames", "Each frame uses 12 bytes → total drop = 7 × 12 = 84 = 0x54", "0x7fffeffc − 0x54 = 0x7fffefa8 ← smallest value"], explain: "Max depth 7 frames → sp = 0x7fffeffc − 84 = 0x7fffefa8", hint: "Max depth 7 frames × 12 bytes = 84 = 0x54 → 0x7fffeffc − 0x54" },
        type: "text",
        code: { ref: "fib", hl: 5 },
        answers: ["0x7fffefa8", "7fffefa8"],
        steps: [
          "หาความลึกสูงสุดของ recursion: fib(7)→fib(6)→fib(5)→fib(4)→fib(3)→fib(2)→fib(1) = 7 เฟรมซ้อนกัน",
          "แต่ละเฟรมใช้ 12 bytes → ลดลงทั้งหมด 7 × 12 = 84 = 0x54",
          "0x7fffeffc − 0x54 = 0x7fffefa8 ← ค่าน้อยที่สุด"
        ],
        explain: "ลึกสุด 7 เฟรม → sp = 0x7fffeffc − 84 = 0x7fffefa8",
        hint: "ลึกสุด 7 เฟรม × 12 bytes = 84 = 0x54 → 0x7fffeffc − 0x54",
      },
      {
        q: "ข้อ 7 — ค่า $pc ที่มากที่สุดขณะที่รันโปรแกรมมีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q7 — what is the largest value of $pc while the program runs? (answer in hex, starting with 0x)", steps: ["PC goes from 0x00400000 (first instruction of main) up by 4 each step", "fib ends → jr $ra returns → main continues at 0x00400008 → j exit", "j exit jumps to 0x0040005c (nop) — the last instruction of the program", "The program ends here → max PC = 0x0040005c"], explain: "The last instruction (exit) is at 0x0040005c → max PC = 0x0040005c", hint: "The last instruction of the program is exit (0x0040005c) — j exit ends there" },
        type: "text",
        code: { ref: "fib", hl: 24 },
        answers: ["0x0040005c", "0040005c"],
        steps: [
          "PC ไล่จาก 0x00400000 (คำสั่งแรกของ main) ไปทีละ 4 bytes",
          "fib จบ → jr $ra กลับ → main ต่อที่ 0x00400008 → j exit",
          "j exit กระโดดไป 0x0040005c (nop) — เป็นคำสั่งสุดท้ายของโปรแกรม",
          "โปรแกรมจบที่ตรงนี้ → PC มากสุด = 0x0040005c"
        ],
        explain: "คำสั่งสุดท้าย exit อยู่ที่ 0x0040005c → PC สูงสุด = 0x0040005c",
        hint: "คำสั่งสุดท้ายของโปรแกรมคือ exit (0x0040005c) — j exit ไปจบตรงนั้น"
      },
      {
        q: "ข้อ 8 — ค่า $pc ที่น้อยที่สุดขณะที่รันโปรแกรมมีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q8 — what is the smallest value of $pc while the program runs? (answer in hex, starting with 0x)", steps: ["The program starts at the first instruction of main = addi $a0,$zero,7", "main is at the very first address of the text segment = 0x00400000", "PC never goes below this → smallest = 0x00400000"], explain: "The first instruction of the program is at 0x00400000 → min PC = 0x00400000", hint: "The first instruction of main (addi $a0,$zero,7) is at 0x00400000" },
        type: "text",
        code: { ref: "fib", hl: 1 },
        answers: ["0x00400000", "00400000"],
        steps: [
          "โปรแกรมเริ่มรันที่คำสั่งแรกของ main = addi $a0,$zero,7",
          "main อยู่ที่ address แรกสุดของ text segment = 0x00400000",
          "PC ไม่เคยต่ำกว่านี้ → น้อยที่สุด = 0x00400000"
        ],
        explain: "คำสั่งแรกของโปรแกรมอยู่ที่ 0x00400000 → PC ต่ำสุด = 0x00400000",
        hint: "คำสั่งแรกของ main (addi $a0,$zero,7) อยู่ที่ 0x00400000"
      },
      {
        q: "ข้อ 9 — ค่าตำแหน่งที่เก็บใน $ra ที่มีค่ามากที่สุดขณะที่รันโปรแกรมมีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q9 — what is the largest value stored in $ra while the program runs? (answer in hex, starting with 0x)", steps: ["'The value stored in $ra' is the same set as Q3: {0x00400008, 0x00400038, 0x00400048}", "jal at 0x00400044 (the 2nd call — right branch) gives $ra = 0x00400048", "Largest = 0x00400048"], explain: "Largest $ra = 0x00400048 (same as Q3)", hint: "jal at 0x00400044 gives $ra = 0x00400048 — the largest value" },
        type: "text",
        code: { ref: "fib", hl: 18 },
        answers: ["0x00400048", "00400048"],
        steps: [
          "'ค่าที่เก็บใน $ra' คือชุดเดียวกับข้อ 3: {0x00400008, 0x00400038, 0x00400048}",
          "jal ที่ 0x00400044 (เรียก fib ตัวที่ 2 — branch ขวา) ให้ $ra = 0x00400048",
          "มากที่สุด = 0x00400048"
        ],
        explain: "$ra ที่มากสุด = 0x00400048 (เหมือนข้อ 3)",
        hint: "jal ที่ 0x00400044 ให้ $ra = 0x00400048 — ค่ามากที่สุด"
      },
      {
        q: "ข้อ 10 — ค่าตำแหน่งที่เก็บใน $ra ที่มีค่าน้อยที่สุดขณะที่รันโปรแกรมมีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q10 — what is the smallest value stored in $ra while the program runs? (answer in hex, starting with 0x)", steps: ["Values in $ra = {0x00400008, 0x00400038, 0x00400048}", "0x00400008 comes from jal fib in main (0x00400004)", "Smallest = 0x00400008"], explain: "Smallest $ra = 0x00400008 (same as Q4)", hint: "The first jal in main gives $ra = 0x00400008" },
        type: "text",
        code: { ref: "fib", hl: 2 },
        answers: ["0x00400008", "00400008"],
        steps: [
          "ค่าที่เก็บใน $ra = {0x00400008, 0x00400038, 0x00400048}",
          "0x00400008 เกิดจาก jal fib ใน main (0x00400004)",
          "น้อยที่สุด = 0x00400008"
        ],
        explain: "$ra ที่น้อยสุด = 0x00400008 (เหมือนข้อ 4)",
        hint: "jal ตัวแรกใน main ให้ $ra = 0x00400008",
      },
      {
        q: "ข้อ 11 — จำนวนหน่วยความจำที่ใช้ในการเก็บข้อมูลแบบ stack มีจำนวนทั้งสิ้นกี่ byte? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q11 — how many bytes of stack memory are used in total? (answer in decimal)", steps: ["Count every call of fib: C(7) where C(0)=C(1)=1, C(n)=1+C(n-1)+C(n-2)", "C(2)=3, C(3)=5, C(4)=9, C(5)=15, C(6)=25, C(7)=41 → 41 calls in total", "Each call reserves 12 bytes of stack (addi $sp,$sp,-12)", "Total = 41 × 12 = 492 bytes", "(If asked for the max at one moment = 7 frames × 12 = 84 bytes)"], explain: "41 calls × 12 bytes = 492 bytes (over the whole program) — at once the max is only 84 bytes", hint: "Count all fib calls = 41 → 41 × 12 = 492" },
        type: "text",
        code: { ref: "fib", hl: 5 },
        answers: ["492"],
        steps: [
          "นับจำนวนครั้งที่ fib ถูกเรียกทั้งหมด: C(7) โดย C(0)=C(1)=1, C(n)=1+C(n-1)+C(n-2)",
          "C(2)=3, C(3)=5, C(4)=9, C(5)=15, C(6)=25, C(7)=41 → เรียกทั้งหมด 41 ครั้ง",
          "แต่ละครั้งจอง stack 12 bytes (addi $sp,$sp,-12)",
          "รวมทั้งสิ้น = 41 × 12 = 492 bytes",
          "(ถ้าถามสูงสุดพร้อมกัน = 7 เฟรม × 12 = 84 bytes)"
        ],
        explain: "41 ครั้ง × 12 bytes = 492 bytes (รวมทั้งโปรแกรม) — สูงสุดพร้อมกันแค่ 84 bytes",
        hint: "นับจำนวนการเรียก fib ทั้งหมด = 41 → 41 × 12 = 492"
      },
      {
        q: "ข้อ 12 — ขณะที่ $a0 มีค่าเป็น 4 ครั้งแรก ค่า $pc มีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q12 — the first time $a0 equals 4, what is the value of $pc? (answer in hex, starting with 0x)", steps: ["Follow the first descent: main sets a0 = 7 → fib(7) reduces to 6 → fib(6) to 5 → fib(5) to 4", "a0 = 4 first happens at addi $a0,$a0,-1 inside fib(5) (5 − 1 = 4)", "That instruction is at address 0x0040002c → PC = 0x0040002c"], explain: "The instruction addi $a0,$a0,-1 (0x0040002c) in fib(5) makes a0 become 4 for the first time", hint: "a0 decreases by 1 along the recursion: 7→6→5→4 — the addi $a0,$a0,-1 instruction is at 0x0040002c" },
        type: "text",
        code: { ref: "fib", hl: 12 },
        answers: ["0x0040002c", "0040002c"],
        steps: [
          "ไล่การลงลึกครั้งแรก: main ตั้ง a0 = 7 → fib(7) ลดเหลือ 6 → fib(6) ลดเหลือ 5 → fib(5) ลดเหลือ 4",
          "a0 = 4 เกิดขึ้นครั้งแรกที่คำสั่ง addi $a0,$a0,-1 ใน fib(5) (5 − 1 = 4)",
          "คำสั่ง addi $a0,$a0,-1 อยู่ที่ address 0x0040002c → PC = 0x0040002c"
        ],
        explain: "คำสั่ง addi $a0,$a0,-1 (0x0040002c) ใน fib(5) ทำให้ a0 เป็น 4 เป็นครั้งแรก",
        hint: "a0 ลดลงทีละ 1 ตาม recursion: 7→6→5→4 — คำสั่ง addi $a0,$a0,-1 อยู่ที่ 0x0040002c",
      },
      {
        q: "ข้อ 13 — ขณะที่ $a0 มีค่าเป็น 4 ครั้งแรก ค่า $sp มีค่าเท่าไร? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q13 — the first time $a0 equals 4, what is the value of $sp? (answer in hex, starting with 0x)", steps: ["a0 = 4 first happens in fib(5) — the 3rd frame on the stack", "fib(7) frame 1: 0x7fffeff0 · fib(6) frame 2: 0x7fffefe4 · fib(5) frame 3: 0x7fffefd8", "0x7fffeffc − 3×12 = 0x7fffeffc − 0x24 = 0x7fffefd8", "→ $sp = 0x7fffefd8"], explain: "fib(5) = the 3rd frame → sp = 0x7fffeffc − 36 = 0x7fffefd8", hint: "a0=4 is inside fib(5) (frame 3) → 0x7fffeffc − 3×12 = 0x7fffefd8" },
        type: "text",
        code: { ref: "fib", hl: 12 },
        answers: ["0x7fffefd8", "7fffefd8"],
        steps: [
          "a0 = 4 ครั้งแรกเกิดใน fib(5) — เป็นเฟรมที่ 3 ของ stack",
          "fib(7) เฟรม 1: 0x7fffeff0 · fib(6) เฟรม 2: 0x7fffefe4 · fib(5) เฟรม 3: 0x7fffefd8",
          "0x7fffeffc − 3×12 = 0x7fffeffc − 0x24 = 0x7fffefd8",
          "→ $sp = 0x7fffefd8"
        ],
        explain: "fib(5) = เฟรมที่ 3 → sp = 0x7fffeffc − 36 = 0x7fffefd8",
        hint: "a0=4 อยู่ใน fib(5) (เฟรม 3) → 0x7fffeffc − 3×12 = 0x7fffefd8"
      },
      {
        q: "ข้อ 14 — ขณะที่ $a0 มีค่าเป็น 4 ครั้งแรก ค่า $a0 ถูกเก็บไว้ที่หน่วยความจำตำแหน่งใด? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q14 — the first time $a0 equals 4, at which memory address is $a0 stored? (answer in hex, starting with 0x)", steps: ["After addi $a0,$a0,-1 (a0=4) the next instruction is sw $a0,0($sp)", "sw stores a0 at address = sp + 0 = 0x7fffefd8", "→ a0 = 4 is stored at 0x7fffefd8"], explain: "sw $a0,0($sp) in fib(5) stores 4 at sp+0 = 0x7fffefd8", hint: "sw $a0,0($sp) stores at sp+0 — fib(5)'s sp = 0x7fffefd8" },
        type: "text",
        code: { ref: "fib", hl: 13 },
        answers: ["0x7fffefd8", "7fffefd8"],
        steps: [
          "หลัง addi $a0,$a0,-1 (a0=4) คำสั่งถัดไปคือ sw $a0,0($sp)",
          "sw เก็บ a0 ที่ address = sp + 0 = 0x7fffefd8",
          "→ a0 = 4 ถูกเก็บที่ 0x7fffefd8"
        ],
        explain: "sw $a0,0($sp) ใน fib(5) เก็บ 4 ที่ sp+0 = 0x7fffefd8",
        hint: "sw $a0,0($sp) เก็บที่ sp+0 — sp ของ fib(5) = 0x7fffefd8",
      },
      {
        q: "ข้อ 15 — หลังจากที่ $sp มีค่า 0x7fffefcc แล้ว ตำแหน่ง address ใดใช้เก็บค่า $ra ในลำดับต่อไป? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q15 — after $sp reaches 0x7fffefcc, at which address will $ra be stored next? (answer in hex, starting with 0x)", steps: ["sp = 0x7fffefcc is fib(4)'s frame (frame 4: 0x7fffeffc − 4×12 = 0x7fffefcc)", "In this frame $ra is stored by sw $ra,8($sp)", "address = sp + 8 = 0x7fffefcc + 8 = 0x7fffefd4", "→ the next $ra is stored at 0x7fffefd4"], explain: "fib(4) stores $ra at sp+8 = 0x7fffefcc + 8 = 0x7fffefd4", hint: "$ra is always stored at 8($sp) → 0x7fffefcc + 8 = 0x7fffefd4" },
        type: "text",
        code: { ref: "fib", hl: 6 },
        answers: ["0x7fffefd4", "7fffefd4"],
        steps: [
          "sp = 0x7fffefcc คือเฟรมของ fib(4) (เฟรมที่ 4: 0x7fffeffc − 4×12 = 0x7fffefcc)",
          "ในเฟรมนี้ $ra จะถูกเก็บที่ sw $ra,8($sp)",
          "address = sp + 8 = 0x7fffefcc + 8 = 0x7fffefd4",
          "→ ตำแหน่งที่เก็บ $ra ถัดไป = 0x7fffefd4"
        ],
        explain: "fib(4) เก็บ $ra ที่ sp+8 = 0x7fffefcc + 8 = 0x7fffefd4",
        hint: "$ra ถูกเก็บที่ 8($sp) เสมอ → 0x7fffefcc + 8 = 0x7fffefd4"
      },
      {
        q: "ข้อ 16 — จากข้อ 15 ค่า $ra ที่ถูกเก็บคือค่าใด? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q16 — from Q15, what is the value of $ra that is stored? (answer in hex, starting with 0x)", steps: ["fib(4) is called from fib(5) by the jal at 0x00400034", "jal stores the address of the next instruction into $ra", "The instruction after 0x00400034 is 0x00400038 → $ra = 0x00400038"], explain: "fib(4) is called by jal from fib(5) (0x00400034) → $ra = 0x00400038", hint: "jal at 0x00400034 → $ra = 0x00400038" },
        type: "text",
        code: { ref: "fib", hl: 6 },
        answers: ["0x00400038", "00400038"],
        steps: [
          "fib(4) ถูกเรียกจาก fib(5) ด้วย jal ที่ 0x00400034",
          "jal เก็บ address ของคำสั่งถัดไปเป็น $ra",
          "คำสั่งถัดจาก 0x00400034 คือ 0x00400038 → $ra = 0x00400038"
        ],
        explain: "fib(4) ถูก jal จาก fib(5) (0x00400034) → $ra = 0x00400038",
        hint: "jal ที่ 0x00400034 → $ra = 0x00400038",
      },
      {
        q: "ข้อ 17 — ค่า $a0 = 6 ถูกเก็บไว้ในหน่วยความจำตำแหน่งใด? (ตอบเลขฐาน 16 นำหน้าด้วย 0x)",
        en: { q: "Q17 — at which memory address is the value $a0 = 6 stored? (answer in hex, starting with 0x)", steps: ["a0 = 6 happens in the first fib(7) frame (7 − 1 = 6)", "fib(7) has sp = 0x7fffeffc − 12 = 0x7fffeff0", "sw $a0,0($sp) stores 6 at sp+0 = 0x7fffeff0", "→ a0 = 6 is stored at 0x7fffeff0"], explain: "fib(7) (frame 1) stores a0=6 at 0x7fffeff0", hint: "fib(7) sp = 0x7fffeff0 → sw $a0,0($sp) stores at 0x7fffeff0" },
        type: "text",
        code: { ref: "fib", hl: 13 },
        answers: ["0x7fffeff0", "7fffeff0"],
        steps: [
          "a0 = 6 เกิดใน fib(7) เฟรมแรก (7 − 1 = 6)",
          "fib(7) มี sp = 0x7fffeffc − 12 = 0x7fffeff0",
          "sw $a0,0($sp) เก็บ 6 ที่ sp+0 = 0x7fffeff0",
          "→ a0 = 6 ถูกเก็บที่ 0x7fffeff0"
        ],
        explain: "fib(7) (เฟรม 1) เก็บ a0=6 ที่ 0x7fffeff0",
        hint: "fib(7) sp = 0x7fffeff0 → sw $a0,0($sp) เก็บที่ 0x7fffeff0",
      },
      {
        q: "ข้อ 18 — ค่า $ra ที่น้อยที่สุด ถูกเก็บไว้ในหน่วยความจำที่ชี้โดย $sp กี่ครั้ง? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q18 — how many times is the smallest $ra value stored in the memory pointed by $sp? (answer in decimal)", steps: ["Smallest $ra = 0x00400008 — only from the jal fib in main", "fib(7) is the only frame that stores 0x00400008 at 8($sp)", "All the inner recursion gets $ra = 0x00400038 or 0x00400048", "→ 0x00400008 is stored 1 time"], explain: "0x00400008 comes only from the jal in main → stored 1 time", hint: "$ra = 0x00400008 happens only for the first jal in main → 1 time" },
        type: "text",
        code: { ref: "fib", hl: 6 },
        answers: ["1"],
        steps: [
          "$ra น้อยสุด = 0x00400008 — เกิดจาก jal fib ใน main เท่านั้น",
          "fib(7) เป็นเฟรมเดียวที่เก็บ 0x00400008 ที่ 8($sp)",
          "recursion ด้านในทั้งหมดได้ $ra = 0x00400038 หรือ 0x00400048",
          "→ เก็บ 0x00400008 ทั้งหมด 1 ครั้ง"
        ],
        explain: "0x00400008 เกิดจาก jal ใน main ครั้งเดียว → เก็บ 1 ครั้ง",
        hint: "$ra = 0x00400008 เกิดเฉพาะ jal ตัวแรกใน main → 1 ครั้ง"
      },
      {
        q: "ข้อ 19 — ค่า $ra ที่มากที่สุด ถูกเก็บไว้ในหน่วยความจำที่ชี้โดย $sp กี่ครั้ง? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q19 — how many times is the largest $ra value stored in the memory pointed by $sp? (answer in decimal)", steps: ["Largest $ra = 0x00400048 — from the jal at 0x00400044 (the 2nd fib call)", "Every fib with n ≥ 2 runs this jal at 0x00400044 once", "Count fib calls with n ≥ 2: fib(7)=1, fib(6)=1, fib(5)=2, fib(4)=3, fib(3)=5, fib(2)=8", "Total = 1+1+2+3+5+8 = 20 → 0x00400048 is stored 20 times"], explain: "fib(n≥2) is called 20 times, each time the right jal gives $ra=0x00400048 → 20 times", hint: "Count the fib calls with n ≥ 2 = 20 → the jal at 0x00400044 runs 20 times" },
        type: "text",
        code: { ref: "fib", hl: 6 },
        answers: ["20"],
        steps: [
          "$ra มากสุด = 0x00400048 — เกิดจาก jal ที่ 0x00400044 (เรียก fib ตัวที่ 2)",
          "fib ทุกครั้งที่ n ≥ 2 จะรัน jal ที่ 0x00400044 นี้ 1 ครั้ง",
          "นับจำนวนการเรียก fib ที่ n ≥ 2: fib(7)=1, fib(6)=1, fib(5)=2, fib(4)=3, fib(3)=5, fib(2)=8",
          "รวม = 1+1+2+3+5+8 = 20 ครั้ง → เก็บ 0x00400048 ทั้งหมด 20 ครั้ง"
        ],
        explain: "fib(n≥2) ถูกเรียก 20 ครั้ง แต่ละครั้ง jal ตัวขวาให้ $ra=0x00400048 → 20 ครั้ง",
        hint: "นับจำนวน fib ที่ n ≥ 2 = 20 → jal ที่ 0x00400044 เกิด 20 ครั้ง"
      },
      {
        q: "ข้อ 20 — ถ้าต้องการปรับโปรแกรมเป็น Fibonacci มาตรฐาน (fib(0) = 0, fib(1) = 1) ค่าคำตอบสุดท้าย fib(7) จะเป็นเท่าใด? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q20 — if we change the program to the standard Fibonacci (fib(0) = 0, fib(1) = 1), what will the final answer fib(7) be? (answer in decimal)", steps: ["Standard Fibonacci: fib(0) = 0, fib(1) = 1", "Write the sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...", "fib(7) = 13 (the original program uses fib(0)=1, fib(1)=1, so it got 21)", "→ the final answer changes to 13"], explain: "Standard fib(7) = 13 — different from the original program's 21 because the original uses fib(0)=1", hint: "Standard sequence 0,1,1,2,3,5,8,13 → fib(7) = 13" },
        type: "text",
        code: { ref: "fib", hl: 8 },
        answers: ["13"],
        steps: [
          "Fibonacci มาตรฐาน: fib(0) = 0, fib(1) = 1",
          "เขียนลำดับ: 0, 1, 1, 2, 3, 5, 8, 13, ...",
          "fib(7) = 13 (โปรแกรมเดิมให้ fib(0)=1, fib(1)=1 จึงได้ 21)",
          "→ คำตอบสุดท้ายจะเปลี่ยนเป็น 13"
        ],
        explain: "มาตรฐาน fib(7) = 13 — ต่างจากโปรแกรมเดิมที่ให้ 21 เพราะเดิม fib(0)=1",
        hint: "ลำดับมาตรฐาน 0,1,1,2,3,5,8,13 → fib(7) = 13"
      }
    ],

    /* Flashcards — การ์ดทบทวน */
    flashcards: [
      { q: "Stored-Program Concept คืออะไร?", a: "ทั้งข้อมูลและคำสั่งโปรแกรมเป็นตัวเลข เก็บใน Memory เดียวกันได้" },
      { q: "PC คืออะไร?", a: "Program Counter — register จำ address ของคำสั่งที่กำลังจะรัน" },
      { q: "Levels of Representation?", a: "ภาษา C → Assembly → Machine Language (0/1) → ฮาร์ดแวร์" },
      { q: "MIPS Instruction มีขนาดเท่าไร?", a: "32 bits = 4 bytes คงที่ทุกคำสั่ง" },
      { q: "Word ใน MIPS คืออะไร?", a: "ข้อมูลก้อนละ 32 บิต — lw/sw อ่าน-เขียนทีละ 1 word" },
      { q: "R-Format มีช่องอะไรบ้าง?", a: "opcode(6) + rs(5) + rt(5) + rd(5) + shamt(5) + funct(6)" },
      { q: "I-Format มีช่องอะไรบ้าง?", a: "opcode(6) + rs(5) + rt(5) + immediate(16)" },
      { q: "J-Format มีช่องอะไรบ้าง?", a: "opcode(6) + target address(26)" },
      { q: "opcode ใช้บอกอะไร?", a: "บอกกลุ่ม/ประเภทของคำสั่ง — R-format มี opcode = 0" },
      { q: "funct ใช้ทำอะไร?", a: "ใช้ร่วมกับ opcode ระบุคำสั่งที่แน่นอน เช่น add, sub (R-format)" },
      { q: "ทำไม rs/rt/rd เป็น 5 บิต?", a: "5 บิตแทน 0–31 ได้พอดี — MIPS มี register 32 ตัว" },
      { q: "immediate คืออะไร?", a: "เลขคงที่ที่ฝังอยู่ในคำสั่ง เช่น 10 ใน addi $t0,$t1,10" },
      { q: "beq คำนวณ PC ใหม่ยังไง?", a: "PC ใหม่ = (PC + 4) + immediate × 4" },
      { q: "j ใช้ address กี่บิต?", a: "26 บิต + PC บน 4 บิต + 00 ท้าย = ครบ 32 บิต" },
      { q: "move $t0,$t1 แปลงเป็นอะไร?", a: "add $t0,$zero,$t1 (pseudoinstruction → TAL)" },
      { q: "MAL กับ TAL ต่างกันยังไง?", a: "MAL = ภาษาที่คนเขียน (มี pseudoinstruction) · TAL = ภาษาจริงที่แปลงเป็น 0/1 ได้" },
      { q: "$at คืออะไร?", a: "Assembler Temporary — register ที่ Assembler ใช้ชั่วคราว ห้ามคนเขียนใช้เอง" },
      { q: "add $8,$9,$10 → เลขฐาน 16?", a: "0x012A4020 (opcode 0, rs 9, rt 10, rd 8, shamt 0, funct 32)" }
    ],

    /* Glossary — คำศัพท์ */
    glossary: [
      { term: "Stored-Program Concept", def: "แนวคิดที่ว่าทั้งข้อมูลและคำสั่งเป็นตัวเลข — เก็บใน Memory เดียวกันได้" },
      { term: "Program Counter (PC)", def: "Register ที่เก็บ address ของคำสั่งที่กำลังจะรัน" },
      { term: "Compiler", def: "โปรแกรมแปลงภาษา C → Assembly" },
      { term: "Assembler", def: "โปรแกรมแปลง Assembly → Machine Language (เลข 0/1)" },
      { term: "Machine Language", def: "ภาษาเครื่อง — ตัวเลข 0 กับ 1 ล้วน ๆ ที่ CPU เข้าใจ" },
      { term: "Word", def: "ข้อมูลก้อนละ 32 bits ใน MIPS — lw/sw อ่าน-เขียนทีละ 1 word" },
      { term: "Field", def: "ช่องของ 32 bits ที่บอกข้อมูลคนละอย่าง เช่น opcode, rs, immediate" },
      { term: "opcode", def: "Operation Code — บอกกลุ่มคำสั่ง (R-format = 0, J = 2/3, นอกนั้น I)" },
      { term: "funct", def: "Function — ใช้ร่วมกับ opcode ระบุคำสั่ง R-format เช่น add=32" },
      { term: "rs", def: "Register ต้นทางตัวแรก (operand แรก)" },
      { term: "rt", def: "Register ตัวที่สอง (operand ที่สอง / ปลายทางของ I-format)" },
      { term: "rd", def: "Register ปลายทางที่เก็บผลลัพธ์ (R-format)" },
      { term: "shamt", def: "Shift Amount — ใช้กับคำสั่ง shift เช่น sll, srl" },
      { term: "Immediate", def: "เลขคงที่ที่ฝังในคำสั่ง (16 บิตใน I-format)" },
      { term: "R-Format", def: "opcode|rs|rt|rd|shamt|funct — add, sub, slt, sll, ..." },
      { term: "I-Format", def: "opcode|rs|rt|immediate — addi, lw, sw, beq, bne, ..." },
      { term: "J-Format", def: "opcode|target address — j, jal" },
      { term: "PC-Relative", def: "branch เก็บ offset เป็นจำนวนคำสั่ง — PC ใหม่ = (PC+4) + imm×4" },
      { term: "Absolute Addressing", def: "jump ระบุ address ตรง ๆ — target 26 บิต + PC บน 4 บิต + 00" },
      { term: "Word-Aligned", def: "คำสั่งอยู่ที่ address หาร 4 ลงตัวเสมอ → 2 บิตท้ายเป็น 00" },
      { term: "Disassembly", def: "ถอดรหัสย้อนกลับจากเลขฐาน 2 → Assembly โดยดู opcode ก่อน" },
      { term: "Pseudoinstruction", def: "คำสั่งลวงตา เช่น move, li, la — Assembler แปลงให้เป็นคำสั่งจริง" },
      { term: "MAL", def: "MIPS Assembly Language — ภาษาที่คนเขียน (มี pseudoinstruction)" },
      { term: "TAL", def: "True Assembly Language — คำสั่งจริงที่แปลงเป็นเลขฐาน 2 ได้โดยตรง" },
      { term: "$at", def: "Assembler Temporary — register ที่ Assembler ใช้ชั่วคราว ห้ามใช้เอง" }
    ],

    /* Cheat sheet (ใช้สำหรับพิมพ์การ์ดสรุป) */
    cheat: [
      { term: "MIPS Instruction", def: "32 bits = 4 bytes คงที่ทุกคำสั่ง" },
      { term: "R-Format", def: "opcode|rs|rt|rd|shamt|funct" },
      { term: "I-Format", def: "opcode|rs|rt|immediate" },
      { term: "J-Format", def: "opcode|target address (26)" },
      { term: "add $8,$9,$10", def: "0x012A4020 (rs 9 · rt 10 · rd 8 · funct 32)" },
      { term: "branch (beq/bne)", def: "PC ใหม่ = (PC + 4) + immediate × 4" },
      { term: "jump (j/jal)", def: "{PC บน 4 บิต, target 26, 00} = 32 บิต" },
      { term: "opcode = 0", def: "R-format · opcode 2/3 = J · นอกนั้น = I" },
      { term: "rs/rt/rd = 5 บิต", def: "register 32 ตัว (0–31)" },
      { term: "move rd,rs", def: "→ add rd,$zero,rs" },
      { term: "li ค่าใหญ่", def: "→ lui + ori (2 คำสั่ง)" },
      { term: "MAL → TAL → 0/1", def: "Assembler แปลง pseudoinstruction ก่อน" },
      { term: "$at", def: "register ชั่วคราวของ Assembler — ห้ามใช้เอง" },
      { term: "fib: jal", def: "jal เก็บ $ra = address ถัดไป แล้วกระโดด" },
      { term: "fib: stack", def: "12 bytes/เฟรม · เก็บ $ra ที่ 8($sp), $s0 ที่ 4($sp), $a0 ที่ 0($sp)" },
      { term: "fib(7) โปรแกรมนี้", def: "21 (fib(0)=1, fib(1)=1) · มาตรฐาน = 13" },
      { term: "$sp เริ่มต้น (MARS)", def: "0x7fffeffc — ลด 12 ทุกครั้งเข้า fib" }
    ]
  },

  /* ==========================================================================
     CHAPTER 5 — PERFORMANCE (การวัดประสิทธิภาพของคอมพิวเตอร์)
     ========================================================================== */
  ch5: {
    title: "Performance",
    thai: "Performance (การวัดประสิทธิภาพ)",
    slides: [
      { title: "Cover — บทที่ 5: Performance", short: "เปิดบทเรียน" },
      { title: "ภาพรวม — ทำไมต้องวัดประสิทธิภาพ", short: "ภาพรวมบทเรียน" },
      { title: "ประสิทธิภาพมี 2 แบบ (เครื่องบิน)", short: "2 แบบของ Performance" },
      { title: "นิยาม Performance แบบคณิตศาสตร์", short: "นิยาม Performance" },
      { title: "ตัวอย่างเครื่องบิน — เร็วกว่ากี่เท่า", short: "ตัวอย่างเครื่องบิน" },
      { title: "เวลาในคอมพิวเตอร์ — หลายความหมาย", short: "เวลา 4 แบบ" },
      { title: "หน่วยวัดเวลาใน CPU — Clock Cycle", short: "Clock Cycle" },
      { title: "สูตรหัวใจ — CPU time = Cycles × CT", short: "ขั้นที่ 1: Cycles × CT" },
      { title: "สูตรหัวใจ — CPU time = IC × CPI × CT", short: "ขั้นที่ 2: IC × CPI" },
      { title: "Megahertz Myth — GHz เยอะไม่เสมอไป", short: "Megahertz Myth" },
      { title: "แต่ละตัวเลขวัดยังไง", short: "วัดค่าแต่ละตัว" },
      { title: "CPI ถัวเฉลี่ยถ่วงน้ำหนัก", short: "Weighted CPI" },
      { title: "ใช้บ่อย ≠ กินเวลาเยอะ", short: "ใช้บ่อย vs กินเวลา" },
      { title: "Benchmark คืออะไร", short: "Benchmark" },
      { title: "SPEC CPU2006", short: "SPEC CPU2006" },
      { title: "คำถามฝึกคิด — Peer Instruction", short: "คำถามฝึกคิด" },
      { title: "Amdahl's Law — เพดานของการเร่งความเร็ว", short: "Amdahl's Law" },
      { title: "โจทย์คำนวณจับมือทำ", short: "โจทย์คำนวณ" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz — แบบทดสอบบท 5 (10 ข้อ)", short: "แบบทดสอบ" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — พิมพ์คำตอบ 15 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. Performance คืออะไร", topics: [3, 4, 5] },
      { label: "2. เวลา & Clock Cycle", topics: [6, 7] },
      { label: "3. สูตรหัวใจ CPU time", topics: [8, 9, 10] },
      { label: "4. วัดค่า & Weighted CPI", topics: [11, 12, 13] },
      { label: "5. Benchmark", topics: [14, 15] },
      { label: "6. Amdahl's Law", topics: [16, 17] },
      { label: "7. เตรียมตัวสอบ", topics: [18] },
      { label: "ทบทวนและฝึกฝน", topics: [19, 20, 21, 22, 23, 24] }
    ],

    /* Quiz — แบบทดสอบบท 5 (10 ข้อ) — สลับตำแหน่ง + ตัวหลอกสมจริง */
    quiz: [
      {
        q: "Performance (โฟกัส Response Time) คำนวณยังไง?",
        options: ["1 / execution time", "execution time × 2", "execution time − idle", "clock rate × CPI"],
        correct: 0,
        explain: "performance(x) = 1 / execution_time(x) — เครื่องที่ใช้เวลาน้อย = performance สูง (กลับเศษกลับส่วน)"
      },
      {
        q: "Response Time กับ Throughput ต่างกันยังไง?",
        options: [
          "เหมือนกันเป๊ะ",
          "Response = จำนวนงานต่อเวลา · Throughput = เวลาต่องาน",
          "Response = เวลาทำงานเดียวให้เสร็จ · Throughput = จำนวนงานที่เสร็จต่อหน่วยเวลา",
          "ทั้งคู่คือความเร็วสูงสุดของ CPU"
        ],
        correct: 2,
        explain: "Response Time (Latency) = เวลาทำงานเดียวให้เสร็จ · Throughput (Bandwidth) = จำนวนงานที่เสร็จต่อหน่วยเวลา — ไม่ใช่สิ่งเดียวกัน"
      },
      {
        q: "Clock rate 500 MHz — clock cycle time เท่ากับกี่นาโนวินาที (ns)?",
        options: ["2", "0.5", "500", "5"],
        correct: 0,
        steps: [
          "clock rate เป็นส่วนกลับของ cycle time: CT = 1 / rate",
          "500 MHz = 500 ล้านรอบ/วินาที = 5×10^8",
          "CT = 1 ÷ (5×10^8) = 2×10^-9 วินาที = 2 ns"
        ],
        explain: "CT = 1/rate = 1/(500×10^6) = 2 ns"
      },
      {
        q: "CPU time = ?",
        options: ["IC × CPI × Clock Cycle Time", "IC + CPI + Clock Cycle Time", "IC ÷ CPI × Clock Cycle Time", "clock rate × CPI"],
        correct: 0,
        explain: "CPU time = Instruction Count × CPI × Clock Cycle Time — สูตรที่สำคัญที่สุดของบทนี้"
      },
      {
        q: "CPI ย่อมาจากอะไร?",
        options: ["Central Processing Instruction", "Cycles Per Instruction", "Clock Performance Index", "Cycles Per Integer"],
        correct: 1,
        explain: "CPI = Cycles Per Instruction — โดยเฉลี่ย 1 คำสั่งใช้กี่ clock cycle (ขึ้นกับฝีมือการออกแบบ CPU)"
      },
      {
        q: "Megahertz Myth คืออะไร?",
        options: [
          "GHz เยอะ = เร็วเสมอ (ความเข้าใจผิด)",
          "clock rate ไม่สำคัญเลย",
          "ทุก CPU มีความเร็ว 1 GHz เท่ากัน",
          "CPI ไม่มีผลต่อความเร็ว"
        ],
        correct: 0,
        steps: [
          "CPU time = IC × CPI × CT — มี 3 ปัจจัย",
          "clock rate (GHz) เป็นแค่ 1 ใน 3 ตัว",
          "CPU ที่ GHz เยอะอาจช้ากว่า ถ้า CPI แย่หรือ IC เยอะกว่า → อย่าดูแต่เลข GHz"
        ],
        explain: "Megahertz Myth = ความเข้าใจผิดที่ว่า GHz เยอะ = เร็วเสมอ ทั้งที่ต้องดู IC และ CPI ด้วย"
      },
      {
        q: "Load ใช้แค่ 20% ของคำสั่ง แต่กินเวลาถึง 45% เพราะอะไร?",
        options: ["เพราะ Load ถูกใช้บ่อยที่สุด", "เพราะ CPI ของ Load สูง (5)", "เพราะ Load มี Instruction Count เยอะ", "เพราะ Branch ทำให้ Load ช้าลง"],
        correct: 1,
        steps: [
          "สัดส่วนเวลา = ความถี่ × CPI",
          "Load: 20% × 5 = 1.0 ในขณะที่ ALU: 50% × 1 = 0.5",
          "'ใช้บ่อย' กับ 'กินเวลาเยอะ' เป็นคนละเรื่อง — ต้องดูทั้งสองอย่างประกอบกัน"
        ],
        explain: "Load 20% × CPI 5 = 1.0 → กินเวลา 45% ขณะที่ ALU 50% × CPI 1 = 0.5 → แค่ 23%",
      },
      {
        q: "ทำไม Benchmark ต้องอัปเดตทุก ~5 ปี?",
        options: [
          "ผู้ผลิต CPU อาจออกแบบชิปให้ทำคะแนน benchmark เก่าได้ดีเป็นพิเศษ (โกงทางอ้อม)",
          "คอมพิวเตอร์เก่าเกินกว่าจะรันได้",
          "ผู้ใช้เริ่มเบื่อ benchmark เดิม",
          "โปรแกรมทดสอบใหญ่เกินไป"
        ],
        correct: 0,
        explain: "บริษัทอาจปรับฮาร์ดแวร์ให้ทำคะแนน benchmark เก่าได้ดีโดยไม่ได้เร็วขึ้นจริงในงานทั่วไป — จึงต้องอัปเดตชุดทดสอบทุก ~5 ปี"
      },
      {
        q: "โปรแกรมรัน 100 วินาที ในนั้น mult กิน 80 วินาที — ถ้าเร่ง mult เร็วขึ้นไม่มีที่สิ้นสุด (เหลือ 0) เวลารวมต่ำสุดจะเป็นเท่าไร?",
        options: ["0 วินาที", "20 วินาที", "80 วินาที", "16.7 วินาที"],
        correct: 1,
        steps: [
          "ส่วนที่ไม่ใช่ mult = 100 − 80 = 20 วินาที ไม่ถูกเร่งเลย",
          "ต่อให้ mult เหลือ 0 วินาที เวลารวมก็ยังเป็น 20 วินาที",
          "→ เพดานของการเร่ง = ส่วนที่ไม่ได้เร่ง (แนวคิดเดียวกับ Amdahl's Law)"
        ],
        explain: "mult เร่งให้เหลือ 0 ได้เวลารวมก็ยังเหลือ 20 วินาทีจากส่วนอื่น — เร่งส่วนเดียวมีเพดานเสมอ",
      },
      {
        q: "SPEC CPU2006 — คะแนนของเครื่องฐาน (base machine) กำหนดไว้เท่าไร?",
        options: ["100", "0", "1000", "1"],
        correct: 0,
        explain: "คะแนนทั้งหมดเทียบกับเครื่องฐานที่กำหนดให้ = 100"
      }
    ],
    /* ข้อสอบหลังเรียน — 15 ข้อ (พิมพ์คำตอบ) */
    exam: [
      {
        q: "ข้อ 1 — เครื่อง A ทำงานเสร็จใน 10 วินาที เครื่อง B เสร็จใน 5 วินาที — B เร็วกว่า A กี่เท่า? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q1 — machine A finishes in 10 seconds, machine B in 5 seconds — how many times faster is B than A? (answer in decimal)", steps: ["How many times faster = performance(B) / performance(A)", "performance = 1/time → = time(A) / time(B)", "= 10 / 5 = 2 → B is 2× faster than A"], explain: "n times = time(S) / time(F) = 10/5 = 2", hint: "n = execution_time(slow) ÷ execution_time(fast) = 10 ÷ 5" },
        type: "text",
        answers: ["2"],
        steps: [
          "เร็วกว่ากี่เท่า = performance(B) / performance(A)",
          "performance = 1/time → = time(A) / time(B)",
          "= 10 / 5 = 2 → B เร็วกว่า A 2 เท่า"
        ],
        explain: "n เท่า = time(S) / time(F) = 10/5 = 2",
        hint: "n = execution_time(ช้า) ÷ execution_time(เร็ว) = 10 ÷ 5"
      },
      {
        q: "ข้อ 2 — CPU มี clock rate 500 MHz — clock cycle time เท่ากับกี่นาโนวินาที (ns)? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q2 — a CPU has a clock rate of 500 MHz — what is its clock cycle time in nanoseconds (ns)? (answer in decimal)", steps: ["Cycle time is the inverse of clock rate: CT = 1 / rate", "500 MHz = 500 million cycles/second = 5×10^8 cycles/s", "CT = 1 ÷ (5×10^8) = 2×10^-9 seconds", "= 2 nanoseconds (ns)"], explain: "CT = 1/rate = 1/(500×10^6) = 2 ns", hint: "500 MHz = 5×10^8 → 1 ÷ (5×10^8) = 2×10^-9 = 2 ns" },
        type: "text",
        answers: ["2"],
        steps: [
          "clock cycle time เป็นส่วนกลับของ clock rate: CT = 1 / rate",
          "500 MHz = 500 ล้านรอบ/วินาที = 5×10^8 รอบ/วินาที",
          "CT = 1 ÷ (5×10^8) = 2×10^-9 วินาที",
          "= 2 นาโนวินาที (ns)"
        ],
        explain: "CT = 1/rate = 1/(500×10^6) = 2 ns",
        hint: "500 MHz = 5×10^8 → 1 ÷ (5×10^8) = 2×10^-9 = 2 ns",
      },
      {
        q: "ข้อ 3 — clock cycle time = 2 ns — clock rate เท่ากับกี่ MHz? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q3 — clock cycle time = 2 ns — what is the clock rate in MHz? (answer in decimal)", steps: ["rate = 1 / CT = 1 ÷ (2×10^-9)", "= 5×10^8 cycles/second", "= 500 MHz (1 MHz = 10^6)"], explain: "rate = 1/CT = 1/(2 ns) = 500 MHz — the inverse of Q2", hint: "1 ÷ (2×10^-9) = 5×10^8 = 500 MHz" },
        type: "text",
        answers: ["500"],
        steps: [
          "rate = 1 / CT = 1 ÷ (2×10^-9)",
          "= 5×10^8 รอบ/วินาที",
          "= 500 MHz (1 MHz = 10^6)"
        ],
        explain: "rate = 1/CT = 1/(2 ns) = 500 MHz — เป็นส่วนกลับของข้อ 2",
        hint: "1 ÷ (2×10^-9) = 5×10^8 = 500 MHz",
      },
      {
        q: "ข้อ 4 — โปรแกรมมี 10,000 คำสั่ง (IC) CPI = 2 clock cycle time = 1 ns — CPU time เท่ากับกี่ไมโครวินาที (µs)? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q4 — a program has 10,000 instructions (IC), CPI = 2, clock cycle time = 1 ns — what is the CPU time in microseconds (µs)? (answer in decimal)", steps: ["Formula: CPU time = IC × CPI × CT", "= 10,000 × 2 × 1 ns", "= 20,000 ns", "1 µs = 1,000 ns → 20,000 ÷ 1,000 = 20 µs"], explain: "CPU time = 10,000 × 2 × 1 ns = 20,000 ns = 20 µs", hint: "10,000 × 2 = 20,000 ns = 20 µs" },
        type: "text",
        answers: ["20"],
        steps: [
          "สูตร: CPU time = IC × CPI × CT",
          "= 10,000 × 2 × 1 ns",
          "= 20,000 ns",
          "1 µs = 1,000 ns → 20,000 ÷ 1,000 = 20 µs"
        ],
        explain: "CPU time = 10,000 × 2 × 1 ns = 20,000 ns = 20 µs",
        hint: "10,000 × 2 = 20,000 ns = 20 µs",
      },
      {
        q: "ข้อ 5 — CPU time = 30 วินาที, clock rate = 1 GHz, CPI = 1.5 — Instruction Count เท่ากับเท่าไร (ตอบในรูป ×10^9 เช่น 20×10^9 ตอบ 20)?",
        en: { q: "Q5 — CPU time = 30 seconds, clock rate = 1 GHz, CPI = 1.5 — what is the Instruction Count? (answer in ×10^9 form, e.g. for 20×10^9 type 20)", steps: ["1 GHz → CT = 1 ns = 10^-9 seconds", "CPU time = IC × CPI × CT → IC = time ÷ (CPI × CT)", "= 30 ÷ (1.5 × 10^-9) = 2×10^10", "= 20 × 10^9 → answer 20"], explain: "IC = 30 / (1.5 × 10^-9) = 2×10^10 = 20×10^9", hint: "IC = time ÷ (CPI × CT) = 30 ÷ (1.5 × 10^-9) = 20×10^9" },
        type: "text",
        answers: ["20"],
        steps: [
          "1 GHz → CT = 1 ns = 10^-9 วินาที",
          "CPU time = IC × CPI × CT → IC = time ÷ (CPI × CT)",
          "= 30 ÷ (1.5 × 10^-9) = 2×10^10",
          "= 20 × 10^9 → ตอบ 20"
        ],
        explain: "IC = 30 / (1.5 × 10^-9) = 2×10^10 = 20×10^9",
        hint: "IC = time ÷ (CPI × CT) = 30 ÷ (1.5 × 10^-9) = 20×10^9",
      },
      {
        q: "ข้อ 6 — โปรแกรมรัน 100 วินาที ในนั้น mult กิน 80 วินาที — ถ้าเร่งให้ mult เร็วขึ้น 4 เท่า โปรแกรมรวมจะเร็วขึ้นกี่เท่า? (ตอบทศนิยม 1 ตำแหน่ง)",
        en: { q: "Q6 — a program runs in 100 seconds; mult takes 80 seconds of that — if we make mult 4× faster, how many times faster does the whole program get? (answer with 1 decimal place)", steps: ["mult 4× faster → 80 ÷ 4 = 20 seconds", "The other part (not mult) = 100 − 80 = 20 seconds, unchanged", "New total time = 20 + 20 = 40 seconds", "Speedup = 100 ÷ 40 = 2.5×"], explain: "New time = (80/4) + 20 = 40 s → 100/40 = 2.5×", hint: "80÷4 = 20 + other part 20 = 40 → 100 ÷ 40 = 2.5" },
        type: "text",
        answers: ["2.5"],
        steps: [
          "mult เร็ว 4 เท่า → 80 ÷ 4 = 20 วินาที",
          "ส่วนอื่น (ไม่ใช่ mult) = 100 − 80 = 20 วินาที ไม่เปลี่ยน",
          "เวลารวมใหม่ = 20 + 20 = 40 วินาที",
          "เร็วขึ้น = 100 ÷ 40 = 2.5 เท่า"
        ],
        explain: "เวลาใหม่ = (80/4) + 20 = 40 วินาที → 100/40 = 2.5 เท่า",
        hint: "80÷4 = 20 + ส่วนอื่น 20 = 40 → 100 ÷ 40 = 2.5",
      },
      {
        q: "ข้อ 7 — โปรแกรมรัน 100 วินาที mult กิน 80 วินาที — อยากให้โปรแกรมทั้งหมดเร็วขึ้น 6 เท่า เป็นไปได้หรือไม่? (ตอบ: ใช่ หรือ ไม่ใช่)",
        en: { q: "Q7 — a program runs in 100 seconds; mult takes 80 seconds — is it possible to make the whole program 6× faster? (answer: ใช่ (yes) or ไม่ใช่ (no))", steps: ["6× faster → the total time must drop to 100 ÷ 6 ≈ 16.7 seconds", "The non-mult part = 20 seconds, never sped up", "Even if mult takes 0 seconds, the total is still 20 seconds", "20 > 16.7 → impossible (a negative time is impossible)"], explain: "The ceiling = the part that is not sped up (20s), which is already more than the 16.7s target → impossible", hint: "Even speeding mult to 0 gives 20 s total — but the target is 16.7 → not enough" },
        type: "text",
        answers: ["ไม่ใช่", "เท็จ", "ไมใช่"],
        steps: [
          "เร็ว 6 เท่า → เวลารวมต้องเหลือ 100 ÷ 6 ≈ 16.7 วินาที",
          "ส่วนที่ไม่ใช่ mult = 20 วินาที ไม่ถูกเร่งเลย",
          "ต่อให้ mult เหลือ 0 วินาที เวลารวมก็ยังเหลือ 20 วินาที",
          "20 > 16.7 → ไม่มีทางเป็นไปได้ (ค่าติดลบเป็นไปไม่ได้)"
        ],
        explain: "เพดาน = ส่วนที่ไม่ได้เร่ง (20s) ซึ่งมากกว่าเป้า 16.7s → เป็นไปไม่ได้",
        hint: "เร่ง mult จนเหลือ 0 ก็ยังได้เวลารวม 20 วินาที — แต่เป้าคือ 16.7 → ไม่พอ",
      },
      {
        q: "ข้อ 8 — จากตาราง: ALU 50% (CPI 1) · Load 20% (CPI 5) · Store 10% (CPI 3) · Branch 20% (CPI 2) — CPI รวมเท่ากับเท่าไร? (ตอบทศนิยม 1 ตำแหน่ง)",
        en: { q: "Q8 — from the table: ALU 50% (CPI 1) · Load 20% (CPI 5) · Store 10% (CPI 3) · Branch 20% (CPI 2) — what is the overall CPI? (answer with 1 decimal place)", steps: ["Weighted CPI = sum of (frequency × CPI) for every type", "ALU: 0.5×1 = 0.5 · Load: 0.2×5 = 1.0 · Store: 0.1×3 = 0.3 · Branch: 0.2×2 = 0.4", "Total = 0.5 + 1.0 + 0.3 + 0.4 = 2.2"], explain: "CPI = Σ(freq × CPI) = 0.5+1.0+0.3+0.4 = 2.2", hint: "0.5×1 + 0.2×5 + 0.1×3 + 0.2×2 = 0.5+1.0+0.3+0.4 = 2.2" },
        type: "text",
        answers: ["2.2"],
        steps: [
          "Weighted CPI = ผลรวมของ (ความถี่ × CPI) ของทุกประเภท",
          "ALU: 0.5×1 = 0.5 · Load: 0.2×5 = 1.0 · Store: 0.1×3 = 0.3 · Branch: 0.2×2 = 0.4",
          "รวม = 0.5 + 1.0 + 0.3 + 0.4 = 2.2"
        ],
        explain: "CPI = Σ(freq × CPI) = 0.5+1.0+0.3+0.4 = 2.2",
        hint: "0.5×1 + 0.2×5 + 0.1×3 + 0.2×2 = 0.5+1.0+0.3+0.4 = 2.2",
      },
      {
        q: "ข้อ 9 — จากตารางข้อ 8 — คำสั่ง Load กินเวลารวมประมาณกี่เปอร์เซ็นต์? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q9 — from the table in Q8 — about what percentage of the total time does Load take? (answer in decimal)", steps: ["Time share = (freq × CPI) ÷ total CPI × 100", "Load: 0.2×5 = 1.0 · total CPI = 2.2", "1.0 ÷ 2.2 = 0.4545 → ≈ 45%"], explain: "Load takes 1.0/2.2 ≈ 45% — even though it is only 20% of the instructions, because its CPI is high", hint: "(0.2×5) ÷ 2.2 = 1.0/2.2 ≈ 45%" },
        type: "text",
        answers: ["45"],
        steps: [
          "สัดส่วนเวลา = (freq × CPI) ÷ CPI รวม × 100",
          "Load: 0.2×5 = 1.0 · CPI รวม = 2.2",
          "1.0 ÷ 2.2 = 0.4545 → ≈ 45%"
        ],
        explain: "Load กินเวลา 1.0/2.2 ≈ 45% — แม้ใช้แค่ 20% ของคำสั่ง เพราะ CPI สูง",
        hint: "(0.2×5) ÷ 2.2 = 1.0/2.2 ≈ 45%",
      },
      {
        q: "ข้อ 10 — จากตารางข้อ 8 — คำสั่ง ALU กินเวลารวมประมาณกี่เปอร์เซ็นต์? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q10 — from the table in Q8 — about what percentage of the total time does ALU take? (answer in decimal)", steps: ["ALU: 0.5×1 = 0.5 · total CPI = 2.2", "0.5 ÷ 2.2 = 0.227 → ≈ 23%", "Even though ALU is the most used (50%), it takes only 23% because CPI = 1"], explain: "ALU takes 0.5/2.2 ≈ 23% — 'used often' ≠ 'takes a lot of time'", hint: "(0.5×1) ÷ 2.2 = 0.5/2.2 ≈ 23%" },
        type: "text",
        answers: ["23"],
        steps: [
          "ALU: 0.5×1 = 0.5 · CPI รวม = 2.2",
          "0.5 ÷ 2.2 = 0.227 → ≈ 23%",
          "แม้ ALU ถูกใช้บ่อยที่สุด (50%) แต่กินเวลาแค่ 23% เพราะ CPI = 1"
        ],
        explain: "ALU กินเวลา 0.5/2.2 ≈ 23% — 'ใช้บ่อย' ≠ 'กินเวลาเยอะ'",
        hint: "(0.5×1) ÷ 2.2 = 0.5/2.2 ≈ 23%",
      },
      {
        q: "ข้อ 11 — clock rate = 2 GHz, CPI = 2, Instruction Count = 5×10^9 — CPU time เท่ากับกี่วินาที? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q11 — clock rate = 2 GHz, CPI = 2, Instruction Count = 5×10^9 — what is the CPU time in seconds? (answer in decimal)", steps: ["2 GHz → CT = 0.5 ns = 0.5×10^-9 seconds", "CPU time = IC × CPI × CT = 5×10^9 × 2 × 0.5×10^-9", "= 5×10^9 × 10^-9 = 5 seconds"], explain: "5×10^9 × 2 × 0.5 ns = 5 s", hint: "IC×CPI = 10^10 cycles × 0.5 ns = 5 seconds" },
        type: "text",
        answers: ["5"],
        steps: [
          "2 GHz → CT = 0.5 ns = 0.5×10^-9 วินาที",
          "CPU time = IC × CPI × CT = 5×10^9 × 2 × 0.5×10^-9",
          "= 5×10^9 × 10^-9 = 5 วินาที"
        ],
        explain: "5×10^9 × 2 × 0.5 ns = 5 s",
        hint: "IC×CPI = 10^10 รอบ × 0.5 ns = 5 วินาที",
      },
      {
        q: "ข้อ 12 — เครื่อง F ทำงานเสร็จใน 8 วินาที เครื่อง S เสร็จใน 20 วินาที — F เร็วกว่า S กี่เท่า? (ตอบทศนิยม 1 ตำแหน่ง)",
        en: { q: "Q12 — machine F finishes in 8 seconds, machine S in 20 seconds — how many times faster is F than S? (answer with 1 decimal place)", steps: ["n times = time(S) ÷ time(F) = 20 ÷ 8", "= 2.5 → F is 2.5× faster than S", "(or performance(F)/performance(S) = (1/8)/(1/20) = 20/8 = 2.5)"], explain: "n = 20/8 = 2.5×", hint: "time(slow) ÷ time(fast) = 20 ÷ 8 = 2.5" },
        type: "text",
        answers: ["2.5"],
        steps: [
          "n เท่า = time(S) ÷ time(F) = 20 ÷ 8",
          "= 2.5 → F เร็วกว่า S 2.5 เท่า",
          "(หรือ performance(F)/performance(S) = (1/8)/(1/20) = 20/8 = 2.5)"
        ],
        explain: "n = 20/8 = 2.5 เท่า",
        hint: "เวลา(ช้า) ÷ เวลา(เร็ว) = 20 ÷ 8 = 2.5",
      },
      {
        q: "ข้อ 13 — CPU A: 3 GHz, CPI 2 · CPU B: 2 GHz, CPI 1 — ถ้า IC เท่ากัน เครื่องไหน CPU time น้อยกว่า? (ตอบ A หรือ B)",
        en: { q: "Q13 — CPU A: 3 GHz, CPI 2 · CPU B: 2 GHz, CPI 1 — with the same IC, which machine has the smaller CPU time? (answer A or B)", steps: ["CPU time per instruction = CPI × CT = CPI ÷ rate", "A: 2 ÷ 3 GHz = 0.667 ns/instruction", "B: 1 ÷ 2 GHz = 0.5 ns/instruction", "0.5 < 0.667 → B is faster — even with a lower GHz! (Megahertz Myth)"], explain: "A: 0.667 ns/instruction vs B: 0.5 ns/instruction → B is faster even with a lower clock rate", hint: "Look at CPI ÷ rate: A = 2/3, B = 1/2 → B is smaller" },
        type: "text",
        answers: ["B", "b"],
        steps: [
          "CPU time ต่อคำสั่ง = CPI × CT = CPI ÷ rate",
          "A: 2 ÷ 3 GHz = 0.667 ns/คำสั่ง",
          "B: 1 ÷ 2 GHz = 0.5 ns/คำสั่ง",
          "0.5 < 0.667 → B เร็วว่า — แม้ GHz จะน้อยกว่า! (Megahertz Myth)"
        ],
        explain: "A: 0.667 ns/คำสั่ง vs B: 0.5 ns/คำสั่ง → B เร็วกว่า แม้ clock rate ต่ำกว่า",
        hint: "ดู CPI ÷ rate: A = 2/3, B = 1/2 → B น้อยกว่า",
      },
      {
        q: "ข้อ 14 — SPEC CPU2006 กำหนดคะแนนของเครื่องฐาน (base machine) ไว้เท่าไร? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q14 — what score does SPEC CPU2006 give to the base machine? (answer in decimal)", steps: ["SPEC uses a base machine as the reference", "All scores are computed relative to the base machine", "The base machine is set to 100 points"], explain: "SPEC CPU2006 gives the base machine a score of 100", hint: "Scores are compared to the base machine, which is set to 100" },
        type: "text",
        answers: ["100"],
        steps: [
          "SPEC ใช้เครื่องฐาน (base machine) เป็นตัวเทียบ",
          "คะแนนทั้งหมดคิดเทียบกับเครื่องฐาน",
          "เครื่องฐานกำหนดไว้ = 100 คะแนน"
        ],
        explain: "SPEC CPU2006 ให้คะแนนเครื่องฐาน = 100",
        hint: "คะแนนเทียบกับเครื่องฐานที่กำหนด = 100",
      },
      {
        q: "ข้อ 15 — โปรแกรมรัน 100 วินาที mult กิน 80 วินาที — ถ้าเร่ง mult เร็วขึ้นไม่มีที่สิ้นสุด (เหลือ 0 วินาที) เวลารวมต่ำสุดที่เป็นไปได้คือกี่วินาที? (ตอบเป็นเลขฐาน 10)",
        en: { q: "Q15 — a program runs in 100 seconds; mult takes 80 seconds — if we speed up mult infinitely (down to 0 seconds), what is the smallest possible total time? (answer in decimal)", steps: ["The non-mult part = 100 − 80 = 20 seconds, never sped up", "mult can be sped up until it takes 0 seconds", "The smallest total time = 20 seconds (the Amdahl's Law ceiling)"], explain: "The ceiling = the part that is not sped up = 20 seconds — speeding up one part always has a limit", hint: "Even if mult = 0, there are still 20 seconds left from the other part" },
        type: "text",
        answers: ["20"],
        steps: [
          "ส่วนที่ไม่ใช่ mult = 100 − 80 = 20 วินาที ไม่ถูกเร่งเลย",
          "mult เร่งจนเหลือ 0 วินาทีได้",
          "เวลารวมต่ำสุด = 20 วินาที (เพดานจาก Amdahl's Law)"
        ],
        explain: "เพดาน = ส่วนที่ไม่ได้เร่ง = 20 วินาที — เร่งส่วนเดียวมีขีดจำกัดเสมอ",
        hint: "ต่อให้ mult = 0 ก็ยังเหลือ 20 วินาทีจากส่วนอื่น",
      }
    ],
    /* Flashcards — การ์ดทบทวน */
    flashcards: [
      { q: "Performance (โฟกัส Response Time) คือ?", a: "performance(x) = 1 / execution_time(x)" },
      { q: "Response Time คืออะไร?", a: "เวลาที่ใช้ทำงานเดียวให้เสร็จ (Latency) — เหมือนผู้โดยสาร 1 คน" },
      { q: "Throughput คืออะไร?", a: "จำนวนงานที่เสร็จต่อหน่วยเวลา (Bandwidth) — เหมือนสายการบินขนคนต่อวัน" },
      { q: "พูดว่า 'F เร็วกว่า S n เท่า' แปลว่าอะไร?", a: "n = time(S) / time(F) = performance(F) / performance(S)" },
      { q: "Real time / Elapsed time คืออะไร?", a: "เวลาทั้งหมดที่ผ่านไปจริง รวมรอ disk, I/O, OS จัดคิว" },
      { q: "CPU time คืออะไร?", a: "เฉพาะเวลาที่ CPU ทำงานให้โปรแกรมจริง ๆ — แบ่งเป็น system time กับ user time" },
      { q: "Clock cycle time คืออะไร?", a: "เวลาต่อ 1 จังหวะของนาฬิกา CPU เช่น 2 ns" },
      { q: "Clock rate คืออะไร?", a: "จำนวนจังหวะต่อวินาที เช่น 500 MHz — เป็นส่วนกลับของ cycle time" },
      { q: "CPI คืออะไร?", a: "Cycles Per Instruction — โดยเฉลี่ย 1 คำสั่งใช้กี่ clock cycle" },
      { q: "Instruction Count คืออะไร?", a: "จำนวนคำสั่งทั้งหมดของโปรแกรม — ขึ้นกับโค้ดและการคอมไพล์" },
      { q: "สูตร CPU time?", a: "CPU time = Instruction Count × CPI × Clock Cycle Time" },
      { q: "Megahertz Myth คืออะไร?", a: "ความเชื่อผิดว่า GHz เยอะ = เร็วเสมอ — จริง ๆ ต้องดู IC และ CPI ด้วย" },
      { q: "Weighted CPI คำนวณยังไง?", a: "Σ (ความถี่ × CPI) ของคำสั่งแต่ละประเภท" },
      { q: "'ใช้บ่อย' กับ 'กินเวลาเยอะ' ต่างกันยังไง?", a: "ALU ใช้ 50% แต่กินเวลา 23% (CPI=1) · Load ใช้ 20% แต่กิน 45% (CPI=5)" },
      { q: "Benchmark คืออะไร?", a: "ชุดโปรแกรมมาตรฐานที่ทุกคนใช้ทดสอบเหมือนกัน เพื่อเทียบ CPU อย่างยุติธรรม" },
      { q: "Amdahl's Law คืออะไร?", a: "การเร่งส่วนหนึ่งมีเพดานจำกัด = ส่วนที่ไม่ได้เร่ง — เช่น mult 80% เร่ง ∞ เหลือแค่ 20s" }
    ],

    /* Glossary — คำศัพท์ */
    glossary: [
      { term: "Performance", def: "ตัวชี้วัดความเร็ว — โฟกัส response time: performance = 1/execution_time" },
      { term: "Response Time", def: "เวลาที่ใช้ทำงานเดียวให้เสร็จ (Latency)" },
      { term: "Execution Time", def: "เวลารันงานให้เสร็จ — อีกชื่อของ response time" },
      { term: "Throughput", def: "จำนวนงานที่เสร็จต่อหน่วยเวลา (Bandwidth)" },
      { term: "Bandwidth", def: "อีกชื่อของ throughput — จำนวนงานต่อหน่วยเวลา" },
      { term: "Elapsed Time", def: "เวลาทั้งหมดที่ผ่านไปจริง รวมการรอทุกอย่าง (Real time)" },
      { term: "CPU Time", def: "เฉพาะเวลาที่ CPU ทำงานให้โปรแกรม — วัดฝีมือ CPU โดยตรง" },
      { term: "User Time", def: "เวลาที่โปรแกรมของคุณทำงานเองบน CPU" },
      { term: "System Time", def: "เวลาที่ OS ทำงานแทนโปรแกรม (เรียก kernel)" },
      { term: "Clock Cycle", def: "หนึ่งจังหวะของนาฬิกา CPU — ฮาร์ดแวร์ขยับตามจังหวะนี้" },
      { term: "Clock Cycle Time", def: "เวลาต่อ 1 จังหวะ เช่น 2 ns — CT = 1/clock rate" },
      { term: "Clock Rate", def: "จำนวนจังหวะต่อวินาที เช่น 500 MHz, 3 GHz — เลขบนกล่อง CPU" },
      { term: "Instruction Count (IC)", def: "จำนวนคำสั่งทั้งหมดของโปรแกรม" },
      { term: "CPI", def: "Cycles Per Instruction — เฉลี่ย 1 คำสั่งใช้กี่ cycle" },
      { term: "Weighted CPI", def: "CPI รวม = Σ(ความถี่ × CPI) ของคำสั่งแต่ละประเภท" },
      { term: "Megahertz Myth", def: "ความเชื่อผิดว่า GHz เยอะ = เร็วเสมอ — ต้องดู IC + CPI ด้วย" },
      { term: "Benchmark", def: "ชุดโปรแกรมมาตรฐานใช้วัด performance เพื่อเทียบ CPU อย่างแฟร์" },
      { term: "Workload", def: "ชุดงาน/โปรแกรมที่ใช้ทดสอบ (เช่น benchmark)" },
      { term: "SPEC", def: "องค์กรกำหนดมาตรฐาน benchmark (SPEC CPU2006)" },
      { term: "CINT2006", def: "ชุดทดสอบงานจำนวนเต็ม 12 โปรแกรม (บีบอัดไฟล์, คอมไพเลอร์, AI)" },
      { term: "CFP2006", def: "ชุดทดสอบงานทศนิยม/วิทยาศาสตร์ 17 โปรแกรม" },
      { term: "Amdahl's Law", def: "การเร่งส่วนหนึ่งมีเพดานจำกัด = สัดส่วนที่ไม่ได้เร่ง" }
    ],

    /* Cheat sheet (ใช้สำหรับพิมพ์การ์ดสรุป) */
    cheat: [
      { term: "performance(x)", def: "1 / execution_time(x)" },
      { term: "F เร็วกว่า S", def: "n = time(S) / time(F)" },
      { term: "CPU time", def: "IC × CPI × Clock Cycle Time" },
      { term: "Clock cycle time", def: "1 / clock rate (เช่น 500 MHz → 2 ns)" },
      { term: "Clock rate", def: "1 / cycle time (เช่น 2 ns → 500 MHz)" },
      { term: "CPI", def: "Cycles Per Instruction — เฉลี่ยต่อ 1 คำสั่ง" },
      { term: "Weighted CPI", def: "Σ (freq × CPI) เช่น 0.5+1.0+0.3+0.4 = 2.2" },
      { term: "ALU 50% CPI 1", def: "กินเวลาแค่ 23% (ใช้บ่อย ≠ กินเวลาเยอะ)" },
      { term: "Load 20% CPI 5", def: "กินเวลาถึง 45% เพราะ CPI สูง" },
      { term: "Megahertz Myth", def: "GHz เยอะ ≠ เร็วเสมอ — ต้องดู IC + CPI ด้วย" },
      { term: "Benchmark", def: "ชุดทดสอบมาตรฐาน ต้องอัปเดตทุก ~5 ปี" },
      { term: "SPEC CPU2006", def: "CINT (จำนวนเต็ม 12) + CFP (ทศนิยม 17) · เครื่องฐาน = 100" },
      { term: "mult 80% เร่ง 4 เท่า", def: "เวลาใหม่ = 20+20 = 40 → เร็วขึ้น 2.5 เท่า" },
      { term: "mult 80% เร่ง ∞", def: "เพดาน = 20 วินาที (Amdahl)" },
      { term: "เร็ว 6 เท่าจาก 100s", def: "ต้องเหลือ 16.7s แต่เพดาน 20s → เป็นไปไม่ได้" }
    ]
  }
};