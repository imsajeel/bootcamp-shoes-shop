const products = [
  {
    id: "e1655c7c-1773-49ff-950c-6395d69bbe68",
    name: "Nike React Miler",
    price: "$130",
    category: "Men's Running Shoe",
    description:
      '<p>The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/Photo Blue/Black</li><li class="description-preview__style-color ncss-li">Style: CW1777-100</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-dcb8da19-e944-45c6-adcd-f07057920241/react-miler-mens-running-shoe-DgF6nr.jpg",
    ],
  },
  {
    id: "bef8b057-9fb2-4aab-8889-b2889f2a6b2d",
    name: "Nike React Infinity Run Flyknit",
    price: "$160",
    category: "Men's Running Shoe",
    description:
      '<p>The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: True White/White/Pure Platinum/Photo Blue</li><li class="description-preview__style-color ncss-li">Style: CD4371-101</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-56c262e8-c967-489b-b322-37e67304fdf0/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
    ],
  },
  {
    id: "193fd480-8d10-47be-bd14-3fea6a857d22",
    name: "Nike Air Force 1 '07",
    price: "$90",
    category: "Men's Shoe",
    description:
      '<p>Hoops in the park, Sunday BBQs and sunshine. The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: crisp leather, stitched overlays in classic all-white and the perfect amount of flash to make you shine.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/White</li><li class="description-preview__style-color ncss-li">Style: 315122-111</li></ul>',
    images: [
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/gsuin11ptg5qgktmzoat/air-force-1-07-mens-shoe-JkTGzADv.jpg",
      "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_4.8/fnpfrqywv44pehh8o1ug/air-force-1-07-mens-shoe-JkTGzADv.jpg",
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/s7b9hhnweke7btujcqgh/air-force-1-07-mens-shoe-JkTGzADv.jpg",
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ler6xnp35l9udmqjkhkc/air-force-1-07-mens-shoe-JkTGzADv.jpg",
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uzmzojffx41efevkvne0/air-force-1-07-mens-shoe-JkTGzADv.jpg",
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/z2augmvefzy62cbg7pxc/air-force-1-07-mens-shoe-JkTGzADv.jpg",
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/xvzphfehsvxzaaff8ve0/air-force-1-07-mens-shoe-JkTGzADv.jpg",
    ],
  },
  {
    id: "f456fa13-c33a-43f4-b0e4-8063ad1468aa",
    name: "Nike SB Nyjah Free 2",
    price: "$95",
    category: "Skate Shoe",
    description:
      '<p>The Nike SB Nyjah Free 2 is a sequel worthy of its predecessor. Inspired by the iconic Nike Air Zoom Spiridon, the original rubber design has been updated with mesh panels to help your feet stay cool through your hottest skate sessions.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Summit White/Summit White/Summit White/Black</li><li class="description-preview__style-color ncss-li">Style: BV2078-100</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/9d284f7c-8830-49bf-a9f5-fa68f7cfb9ed/sb-nyjah-free-2-skate-shoe-MNkJB3.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/480b4ebc-b590-4ff6-905d-e646cf656def/sb-nyjah-free-2-skate-shoe-MNkJB3.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2d6e0f0f-829a-4292-a8a6-08225a8a68ff/sb-nyjah-free-2-skate-shoe-MNkJB3.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b989235a-0572-4efb-8332-1f0c5fdc8e1f/sb-nyjah-free-2-skate-shoe-MNkJB3.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/0029fd6f-cae0-47e8-82ca-a857eeac1106/sb-nyjah-free-2-skate-shoe-MNkJB3.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b22bc9ca-fdec-47a0-ae0a-710ce8d8de85/sb-nyjah-free-2-skate-shoe-MNkJB3.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/7f05afce-c12b-49a5-9dac-f153827935a6/sb-nyjah-free-2-skate-shoe-MNkJB3.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/caa754e9-c536-463a-8350-857607d3b7b4/sb-nyjah-free-2-skate-shoe-MNkJB3.jpg",
    ],
  },
  {
    id: "e8ab8c84-3d58-4720-a155-3b54d57e8f64",
    name: "Nike Blazer Mid '77 Vintage",
    price: "$100",
    category: "Shoe",
    description:
      '<p>The Nike Blazer Mid \'77 Vintage harnesses the old-school look of Nike basketball with a vintage midsole finish, making it look like you\'ve been saving them for years.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/Black</li><li class="description-preview__style-color ncss-li">Style: BQ6806-100</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/kxmb3lab5dmy00qpoyul/blazer-mid-77-vintage-shoe-flCCX4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/u9ky0ah8uucbw4ctjubm/blazer-mid-77-vintage-shoe-flCCX4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/8bc7d689-de2c-4b49-986c-b42153895bc0/blazer-mid-77-vintage-shoe-flCCX4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ef4dbed6-c621-4879-8db3-f87296bfb570/blazer-mid-77-vintage-shoe-flCCX4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/y8r9gzzawwfshavf1jwj/blazer-mid-77-vintage-shoe-flCCX4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/adc43e71-ff78-4d39-a95f-ba86aa88565f/blazer-mid-77-vintage-shoe-flCCX4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/eb25805f-6064-42a1-aa7a-0e4c426bc374/blazer-mid-77-vintage-shoe-flCCX4.jpg",
    ],
  },
  {
    id: "c9f7cc8d-79e8-4418-921d-d8c18775d9c3",
    name: "Air Jordan 1 Low",
    price: "$90",
    category: "Shoe",
    description:
      '<p>Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that\'s familiar yet always fresh. It\'s made for casual mode, with an iconic design that goes with everything and never goes out of style.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Black/Light Smoke Grey/White/Black</li><li class="description-preview__style-color ncss-li">Style: 553558-039</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-483c83ff-0235-4aec-80b3-d30fdc942585/air-jordan-1-low-shoe-z3Tl2VeJ.jpg",
    ],
  },
  {
    id: "c3dd5bb5-642c-4c54-8d47-56954a63e07c",
    name: "Nike Air Max 2090",
    price: "$150",
    category: "Men's Shoe",
    description:
      '<p>Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent mesh and vibrantly colored textile on select colorways blend with timeless OG features for an edgy, modernized look.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/Chile Red/Deep Royal Blue/White</li><li class="description-preview__style-color ncss-li">Style: CT1091-101</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/14f8e01d-c78a-49f3-a393-22be8e9afe7d/air-max-2090-mens-shoe-3pVM46.jpg",
    ],
  },
  {
    id: "f358ae12-d091-412b-8403-ef2c9f93573d",
    name: "Nike Air VaporMax Plus",
    price: "$200",
    category: "Men's Shoe",
    description:
      '<p>The Nike Air VaporMax Plus looks to the past and propels you into the future. With a design that nods to the \'98 Air Max Plus, it adds revolutionary VaporMax Air technology to ramp up the comfort and modern look. Featuring a striking red palette and the OG\'s wavy design lines, it shows off your defiant style.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: University Red/University Red</li><li class="description-preview__style-color ncss-li">Style: CW6973-600</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/628c60b8-8ead-4a66-89f5-e8a1a740ac1e/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/044aa795-42e2-40cb-bdcf-2cf3252c58fe/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/487d951f-bd7b-4e80-9b68-927e50768348/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/afa315ff-3de2-40cf-9af3-6b33ad46dfb7/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/39ad1e6b-858d-4e87-abcc-1d7b753633ff/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/4d81b340-1094-478c-aeae-be7e44703d7a/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/579572e8-cd34-43fa-8c3c-9e654271461b/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/f2783a2b-f861-4c33-bebc-93cf095a95dd/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6bb8b667-f8f4-42a0-8e83-3ed44effdb34/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
    ],
  },
  {
    id: "5ea30208-3e57-4682-9124-714d8ce314ca",
    name: "Nike Air Vapormax 360",
    price: "$225",
    category: "Men's Shoe",
    description:
      '<p>Inspired by heritage running shoes like the 2006 Air Max 360, the Nike Air Vapormax 360 reimagines full-length Air with its lighter, more flexible design. The full-length foam midsole adds to the comfort while bold colors create a fresh, modern look.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Varsity Royal/Blue Fury/White/Black</li><li class="description-preview__style-color ncss-li">Style: CK9671-400</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-2c66495e-c351-4925-934c-3e4a096e9012/air-vapormax-360-mens-shoe-b09bdB.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-ee133e80-b996-4302-89f2-1259b6606d25/air-vapormax-360-mens-shoe-b09bdB.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-1991bc28-56d2-496f-ab48-53946d6d83e9/air-vapormax-360-mens-shoe-b09bdB.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-47b78a7b-7d71-4550-b345-c81c7faea962/air-vapormax-360-mens-shoe-b09bdB.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-c783ddec-3ad3-4df8-9001-1da7ca240f63/air-vapormax-360-mens-shoe-b09bdB.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-bf269b2e-ad7d-40ed-a9d3-b3ecf1972aff/air-vapormax-360-mens-shoe-b09bdB.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-8f2d1bf3-0b13-43bb-b7ba-c81bcfe92af2/air-vapormax-360-mens-shoe-b09bdB.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-effd3b49-81e0-40a9-a3c2-8e857d2edc3f/air-vapormax-360-mens-shoe-b09bdB.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-fe6aba93-43d7-498b-a435-f23715e458c6/air-vapormax-360-mens-shoe-b09bdB.jpg",
    ],
  },
  {
    id: "db80a8f9-451f-4b34-a63a-d4d528e2ea4e",
    name: "LeBron 17 Low",
    price: "$160",
    category: "Basketball Shoe",
    description:
      '<p>Fine-tuned for LeBron\'s ferocious game, the LeBron 17 Low gives the King another sensation to add to his arsenal. The combined cushioning platform provides a balanced mix of impact absorption and responsiveness. A precisely crafted low-top design offers a lightweight, conforming fit with ankle mobility and a look that resonates on the street.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Spruce Aura/Racer Blue/Sail/Black</li><li class="description-preview__style-color ncss-li">Style: CD5007-005</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/0b2ea20b-6da3-4948-8692-ac5ca5a4964f/lebron-17-low-basketball-shoe-fHcqqM.jpg",
    ],
  },
  {
    id: "65e2d99a-2618-4fe8-be48-69fe12f56062",
    name: "Nike Air VaporMax Flyknit 3",
    price: "$200",
    category: "Men's Shoe",
    description:
      '<p>Rebel against gravity in the Nike Air VaporMax Flyknit 3. A high-fashion inspired upper features flowing lines of breathable, stretchable Flyknit construction. The revolutionary VaporMax Air technology underfoot keeps a spring in your step from toe-to-heel.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Iron Grey/Particle Grey/Anthracite/Track Red</li><li class="description-preview__style-color ncss-li">Style: CT1270-001</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2d55da64-947d-4594-9aaf-2701da1175a7/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
    ],
  },
  {
    id: "d36663ba-f3c3-4b69-b8a3-e2f381f7682f",
    name: "Nike Air Max 90 N7",
    price: "$130",
    category: "Men's Shoe",
    description:
      '<p>Nothing as fly, nothing as comfortable, nothing as proven. Celebrate the proud history of Native Americans and Indigenous peoples in North America with the Nike Air Max 90 N7. Color reveal suedes let you create a 1-of-a-kind design that adds vibrancy and texture to your look while the Waffle outsole, stitched overlays and classic TPU accents stay true to its OG running roots. To finish it off, ultra-soft Nike Air cushioning adds comfort to your journey.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Spruce Aura/Ghost Green/Black/Flash Crimson</li><li class="description-preview__style-color ncss-li">Style: CV0264-001</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/92ca743d-c03d-4abb-9a5b-ed9a602a2f30/air-max-90-n7-mens-shoe-9qDv5V.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2bc02090-7d6f-46ad-944c-392da8f6092d/air-max-90-n7-mens-shoe-9qDv5V.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/4660e253-de90-408b-8854-1d2cf0b4770b/air-max-90-n7-mens-shoe-9qDv5V.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d9ea5366-76d4-4e32-b50a-c5e1c204f4c3/air-max-90-n7-mens-shoe-9qDv5V.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/08675ce1-8378-42ea-be08-d614a2527c39/air-max-90-n7-mens-shoe-9qDv5V.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d757e059-48d5-4f2f-bcb5-602e33184887/air-max-90-n7-mens-shoe-9qDv5V.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/aaf92d58-b0d1-46f5-80ea-e1579ffc2ad0/air-max-90-n7-mens-shoe-9qDv5V.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d300f5b6-6da6-47ae-879c-9fbc01bd23e0/air-max-90-n7-mens-shoe-9qDv5V.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/1fe69dd5-1118-4db4-858d-4a997c482114/air-max-90-n7-mens-shoe-9qDv5V.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5cd6933d-489d-4180-b6bb-517cd17c4591/air-max-90-n7-mens-shoe-9qDv5V.jpg",
    ],
  },
  {
    id: "533caf80-28e6-48e1-8b0c-a4c39f3f5ddb",
    name: "Kyrie 6 N7",
    price: "$130",
    category: "Basketball Shoe",
    description:
      '<p>We each have a story to tell. Distinct symbols on the Kyrie 6 N7 reflect Kyrie Irving’s personal journey and reconnection to his indigenous roots. A star representing his community is inspired by the long history of Lakota quilt design. The mountain stands for his Lakota name, Hela or Little Mountain—symbols of strength Kyrie carries with him on and off the court.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Light Cream/Sail/Electric Green/Flash Crimson</li><li class="description-preview__style-color ncss-li">Style: CW1785-200</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ad8adfc8-5dac-46a3-b9cf-1b943699913d/kyrie-6-n7-basketball-shoe-n61njg.jpg",
    ],
  },
  {
    id: "1aa73085-62d6-4514-8348-5b72c25f4f87",
    name: "Kyrie 6",
    price: "$130",
    category: "Basketball Shoe",
    description:
      '<p>Designed for Kyrie Irving\'s creative and unpredictable game, the Kyrie 6 focuses on comfort, control and energy return to help him go fast and stay fresh. Bouncy cushioning is paired with soft yet supportive foam for responsiveness and smooth heel-to-toe transitions, while the midfoot strap and plush, padded collar lock him in and help keep him a step ahead of the competition.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/White</li><li class="description-preview__style-color ncss-li">Style: BQ4630-102</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/90e66038-4e3d-4807-81a4-12d31c9fddb0/kyrie-6-basketball-shoe-TW3wsC.jpg",
    ],
  },
  {
    id: "49f086c4-0c6e-48a5-bcca-3cd8d261aaa0",
    name: "KD13",
    price: "$150",
    category: "Basketball Shoe",
    description:
      '<p>If you want to be a complete player, you have to make an impact on both ends of the floor, from tip-off to the final buzzer. The KD13—built with a full-length Zoom Air unit stitched directly to the upper and an additional Zoom Air unit in the forefoot—provides the responsiveness and optimal energy return to help you make big-time plays all game long.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/Obsidian/Sport Red</li><li class="description-preview__style-color ncss-li">Style: CI9948-101</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e091d282-f290-4155-bef1-b51a5f05fbbd/kd13-basketball-shoe-kbKpNV.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/48a607c0-6866-4624-bb2f-f6ea26665b9a/kd13-basketball-shoe-kbKpNV.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d002564d-e7f2-41c3-812a-332964d4a9b5/kd13-basketball-shoe-kbKpNV.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2f92d117-a404-4c68-9fed-dbe0854e4d2e/kd13-basketball-shoe-kbKpNV.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d659947e-072d-4cd1-b2f9-5a447fbcef96/kd13-basketball-shoe-kbKpNV.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ebdbc6b7-8a41-4b4f-b2e9-02e8dfd3453e/kd13-basketball-shoe-kbKpNV.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/aae4587f-3705-4c1f-acef-93f5b153c97e/kd13-basketball-shoe-kbKpNV.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/83b1a299-2be7-4884-9c3a-942212c655d9/kd13-basketball-shoe-kbKpNV.jpg",
    ],
  },
  {
    id: "4b9cf0f1-e15e-422b-a2d9-0884f29a85b2",
    name: "PG 4",
    price: "$110",
    category: "Basketball Shoe",
    description:
      '<p>Paul George is the rare high-percentage shooter who\'s also a coach\'s dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that\'s lightweight, articulated and responsive, ideal for players like PG who go hard every play.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/University Red/Obsidian</li><li class="description-preview__style-color ncss-li">Style: CD5079-101</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/0eda07da-6cc1-40bc-91a6-5ef93c1a012e/pg-4-basketball-shoe-tszRns.jpg",
    ],
  },
  {
    id: "5864692d-5aff-42be-b2a2-9ae0d143b799",
    name: "Nike Air Zoom UNVRS FlyEase",
    price: "$160",
    category: "Basketball Shoe",
    description:
      '<p>Built for all basketball players and inspired by Elena Delle Donne, the Nike Air Zoom UNVRS with FlyEase technology gives you a quick and easy way to get into your shoes and onto the court. The heel of the shoe folds down to let you slip in then a strap secures the fit.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: University Red/Midnight Navy/Game Royal/White</li><li class="description-preview__style-color ncss-li">Style: CQ6422-600</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/cc5ab342-de8d-4feb-accd-0e3f83f41e06/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/a1fc0018-5896-49e8-9765-8b33ca16c0e2/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c81b622b-2f39-4b1e-8d76-ded9caea683e/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c6dbc166-971a-4eed-a73b-a4a594b20b65/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/0c7aa05e-a04c-4b67-b508-56161d2f989a/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/3942d54d-bed4-4026-9982-dde8646c177f/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2067436b-b31c-4b20-8464-0825319687e2/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/cd7999dd-90c8-4c77-85da-9f1e983cf8a4/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6d6bbe96-2181-48d7-a7e9-d83917702e45/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/8eccd6e9-b3e4-4660-8b58-1690d0631d18/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b4f55085-63e4-4bf6-aeec-a5aade6189ee/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/cdb81319-7805-4429-991c-78d73a4f9e78/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/a6b9d48e-719a-40ee-ad42-ca2e135510af/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/dbbf9473-da39-4960-a1d1-b4fff702446b/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg",
    ],
  },
  {
    id: "67a18f4e-cfc0-4f3b-961c-d183312338a9",
    name: "Nike Air VaporMax FlyKnit 3 USA",
    price: "$200",
    category: "Men's Shoe",
    description:
      '<p>The Nike Air VaporMax Flyknit 3 USA is revolutionary in more ways than one. The upper features flowing, 2-tone lines of breathable, stretchable Flyknit construction that ramps up the heat while repping the red, white and blue. Plus, VaporMax Air technology keeps spring in your step with toe-to-heel cushioning.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/University Red/Metallic Silver/Deep Royal Blue</li><li class="description-preview__style-color ncss-li">Style: CW5585-100</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-edc5bfbc-b097-494a-a7cb-d4f6c8afa5ca/air-vapormax-flyknit-3-usa-mens-shoe-SKwDlj.jpg",
    ],
  },
  {
    id: "22de69f2-ace5-499b-8049-3b1d41b8320f",
    name: "Nike Air Max 2090 BETRUE",
    price: "$150",
    category: "Men's Shoe",
    description:
      '<p>March into the future in your Nike Air Max 2090 BETRUE, a bold new look inspired by the iconic Air Max 90. Celebrating the LGBTQIA+ community, the airy upper features translucent fabric to reveal a vibrant array of Pride colors beneath. Its asymmetrical design, decorative stitching and see-through TPU heel clip add an edgy, modernized look while super soft Nike Air cushions your journey.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Multi-Color/Black/Digital Pink</li><li class="description-preview__style-color ncss-li">Style: CZ4090-900</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b71918af-c3b5-4c14-ac35-6f9e8b80c9c7/air-max-2090-betrue-mens-shoe-vR9RlQ.jpg",
    ],
  },
  {
    id: "91be84a7-9d58-4a25-8d22-352fd9502186",
    name: "Nike Air Trainer 3",
    price: "$130",
    category: "Men's Shoe",
    description:
      '<p>The Nike Air Trainer 3 was an instant hit with its clean lines, visible Air cushioning in the heel and soft padding around the ankle. This remake combines retro colors, versatile styling options with its unique lacing system and stitched leather overlays, making it a go-to choice for off-court living.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Midnight Navy/White/Vast Grey/University Red</li><li class="description-preview__style-color ncss-li">Style: CN0923-400</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/0b9c53d8-2208-4c2b-abb5-41cc7acf76bc/air-trainer-3-mens-shoe-PMWWgS.jpg",
    ],
  },
  {
    id: "92362c87-7b83-42b3-bea5-ef934fb1262f",
    name: "Nike Air Max 90 Unlocked By You",
    price: "$160",
    category: "Custom Men's Lifestyle Shoe",
    description:
      '<p>The Nike Air Max 90 Premium By You builds on the appeal of the original while offering a whole new level of artistic independence. In the past, designers controlled the level of customization available for each Nike By You shoe. Now, nearly limitless combinations of colors, materials, and designs have been unlocked so you can create a shoe that is 100% your own.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Multi-Color/Multi-Color</li><li class="description-preview__style-color ncss-li">Style: DJ2660-991</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d3d78cb7-e242-4e56-b02e-3521c554a6ea/custom-nike-air-max-90-unlocked-by-you.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b4a15cdc-fff1-457a-ae9d-e48dde3d1d1a/custom-nike-air-max-90-unlocked-by-you.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b3927c0d-1fe1-4938-b901-f3b06733f175/custom-nike-air-max-90-unlocked-by-you.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/941037c8-02c7-4f5f-8454-29d027ff6109/custom-nike-air-max-90-unlocked-by-you.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/739c9067-18ba-4660-a3c8-7a215d1ad83d/custom-nike-air-max-90-unlocked-by-you.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/f371df13-2ca7-4a7c-9a94-0ec1236ebd98/custom-nike-air-max-90-unlocked-by-you.jpg",
    ],
  },
  {
    id: "319fc446-cef3-4816-9941-3a857c2e8fa8",
    name: "Nike Air Zoom Pegasus 37",
    price: "$120",
    category: "Men's Running Shoe",
    description:
      '<p>Reinvigorate your stride with the Nike Air Zoom Pegasus 37. Delivering the same fit and feel that runners love, the shoe has an all-new forefoot cushioning unit and foam for maximum responsiveness. The result is a durable, lightweight trainer designed for everyday running.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/Hyper Violet/Spruce Aura/Flash Crimson</li><li class="description-preview__style-color ncss-li">Style: BQ9646-103</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/44297225-bf4c-4dbb-8e8b-a7377b22d05b/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0/93a79a9a-1609-49ef-bef0-a9eb500fcca8/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/38b6e13b-7302-4f72-978c-9051953e6a05/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/8447e1f7-a024-4f1c-baf0-4f49d2e960e3/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ce6f78e2-2a81-4fe9-8e1e-a20f2a1197f9/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/cc4d1cbc-571e-483f-93fc-a4666e683341/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/0e4a33d5-a583-4d8d-9b62-e79961aebd51/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d8c75ced-8d47-413b-ad4d-256babcd82a7/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c7772698-1a89-479c-8b98-479e739aa3a9/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
    ],
  },
  {
    id: "c2dca5c1-78ea-41a5-b340-f6ad0fc6b002",
    name: "Nike Zoom Fly 3",
    price: "$160",
    category: "Men's Running Shoe",
    description:
      '<p>Inspired by the Vaporfly, the Nike Zoom Fly 3 gives distance runners race-day comfort and durability. The power of a carbon fiber plate keeps you in the running mile after mile.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: White/Spruce Aura/Hyper Violet/Flash Crimson</li><li class="description-preview__style-color ncss-li">Style: AT8240-103</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5cf59b09-3072-4b8e-a4a9-5b5faae745fa/zoom-fly-3-mens-running-shoe-XhzpPH.jpg",
      "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0/cc0986b8-bb82-4308-83d0-39b05c10ee71/zoom-fly-3-mens-running-shoe-XhzpPH.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6df15764-1338-4355-8b12-b72f02c5d348/zoom-fly-3-mens-running-shoe-XhzpPH.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fb768200-871b-4dcd-938d-6898640e70f3/zoom-fly-3-mens-running-shoe-XhzpPH.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/58a512bd-0833-4c89-8239-dc2fe7ab36b7/zoom-fly-3-mens-running-shoe-XhzpPH.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/974a1b6a-dfb3-4c17-b883-4621dfd25d6a/zoom-fly-3-mens-running-shoe-XhzpPH.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/026f1f35-abf7-45d5-b8bc-6b28a5241a2d/zoom-fly-3-mens-running-shoe-XhzpPH.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/42010e78-680a-41b4-94e1-0dc9dfa98356/zoom-fly-3-mens-running-shoe-XhzpPH.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/363ad3f9-ad0b-4dc0-8521-bc0ca55bc519/zoom-fly-3-mens-running-shoe-XhzpPH.jpg",
    ],
  },
  {
    id: "98b80f01-a683-4313-aabe-6c35e6f7f4e1",
    name: "Air Jordan 3 Retro SE",
    price: "$250",
    category: "Shoe",
    description:
      '<p>Go wild in the Air Jordan 3 Retro SE. Part of the "Animal Instinct" pack, it features a mix of animal-inspired materials that give fresh, new identity to the iconic shoe.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Shown: Black/White/Gorge Green/Black</li><li class="description-preview__style-color ncss-li">Style: CV3583-003</li></ul>',
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2ace6136-22d3-4b46-8816-66848f5086c8/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/07966571-a1df-4bf4-bebc-fdc2881b6fad/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/58dff225-0429-4e60-bc23-072934972d4b/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/99f0cd6b-6d1d-4313-8a1a-1ca3b64f4232/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5e6727fb-741a-48a4-8517-a7634893ff31/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/aafdd3f4-9021-45f9-a71f-32925f1efb6f/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/81c97366-c372-4c8b-94d8-f427bcfbb964/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/61d4db81-e626-47fe-9a8c-fd4869aad865/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b1635eeb-34d8-45d7-98e4-62524075e78d/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c8fb5233-9306-44d6-9f74-d209d41a2932/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
    ],
  },
];

export default products;
