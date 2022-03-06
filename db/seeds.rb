# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.destroy_all
Product.destroy_all



## create 10 users
awesome_guest = User.create("fname"=> "Awesome Guest", "email"=> "awesomeguest@yahoo.com", "password": "123456")
mary = User.create("fname"=> "Mary", "email"=> "mary@yahoo.com", "password": "123456")
emma = User.create("fname"=> "Emma", "email"=> "emma@yahoo.com", "password": "123456")
ava = User.create("fname"=> "Ava", "email"=> "ava@yahoo.com", "password": "123456")
oliver = User.create("fname"=> "Oliver", "email"=> "oliver@yahoo.com", "password": "123456")
lucas = User.create("fname"=> "Lucas", "email"=> "lucas@yahoo.com", "password": "123456")
isabella = User.create("fname"=> "Isabella", "email"=> "isabella@yahoo.com", "password": "123456")
charlotte = User.create("fname"=> "Charlotte", "email"=> "charlotte@yahoo.com", "password": "123456")
noah = User.create("fname"=> "Noah", "email"=> "noah@yahoo.com", "password": "123456")
liam = User.create("fname"=> "Liam", "email"=> "Liam@yahoo.com", "password": "123456")





##category "Baby and Toddler Toys"
product1 = Product.create!(
    "name" => "Leaf puzzle montessori toy toddler gift for baby",
    "description" => "This beautiful leaf puzzle is designed to help with a lot of areas in.

🌿 The leaves are made of their respective woods (oak leaf in oak, Ash made of ash...) so you see how the wood looks like, the grain, the color and the hardness...
🌿 Front of the leaf is it's natural wood color (summer is all green, so I chose to leave them natural, but the veins are engraved)
🌿 Back of the leaves are its glorious fall colors. Learn about chlorophyll (green), carotenoids (yellow/orange), anthocyanins (reds) and their combination.
🌿 I have chosen trees found in North America (I will happily do other regions, ask away!) With a mix of different leaf shapes, vein structure, leaf arrangements and edges.",
    "price" => 23.99,
    "quantity" => 20,
    "category" => "Baby and Toddler Toys",
    "seller_id" => 1)
product_1_image = URI.open('https://toysy-seeds.s3.amazonaws.com/leaf_puzzle.jpg')
product1.image.attach(io: product_1_image, filename: "leaf_puzzle.jpg")



product2 = Product.create!(
    "name" => "Montessori wood pencil holder, crayon holder, color sorting, wood desc organizer, artist pencil organize",
    "description" => "We offer this small, very compact Montessori pencil holder. This is a perfect way to organize your pencils and it does look amazing on the desk. This is our BESSTSELLER for more than 6 years and people LOVE it! Many of them return even more than once to buy a new pencil holder as a gift to others.

It is ideal for home use where every inch of space counts.

Measures only 41 cm x 7 cm (15 x 2,75 inches). There is 11 holes and each one of them is 3 cm in diameter and are 6 cm deep.

The colored circles are made from hazel branches. They are sanded and colored with water based acrylic paint. These natural wooden circles with bark give the pencil holder a nice look.",
    "price" => 16.99,
    "quantity" => 200,
    "category" => "Baby and Toddler Toys",
    "seller_id" => 1)
product_2_image = URI.open('https://toysy-seeds.s3.amazonaws.com/color_pens.jpg')
product2.image.attach(io: product_2_image, filename: "color_pens.jpg")



product3 = Product.create!(
    "name" => "Super Mario Odyssey Figurines",
    "description" => "1) Red Mario with Cappy
2) Wedding Mario in tuxedo and top hat
3) Explorer Mario with Explorer hat and top hat
4) Luigi with Captain's hat
5) Gold Mario",
    "price" => 16.99,
    "quantity" => 220,
    "category" => "Baby and Toddler Toys",
    "seller_id" => 2)
product_3_image = URI.open('https://toysy-seeds.s3.amazonaws.com/mario.jpg')
product3.image.attach(io: product_3_image, filename: "mario.jpg")




product4 = Product.create!(
    "name" => "Personalized Gifts Baby Wooden Railway",
    "description" => "The beautiful pastel-colored railway offers a lot of fun. Due to the different wooden building blocks, new wagons can be put together again and again. The first shapes and colours can be familiarised and fine motor skills and dexterity are also trained.

Personalized wooden toys – A great gift for baptism, birth, first birthday or as a reminder of the magical day of birth

The wooden railway can be personalized with the dates of birth and/or the name of the child, so the railway always reminds of the magical and unique day of birth. But also as a gift for baptism, birth or first birthday, the personalized railway is a very personal gift, which is guaranteed to put a smile on the recipient's face.
The personalization takes place in our house with state-of-the-art printing technology.",
    "price" => 13.99,
    "quantity" => 200,
    "category" => "Baby and Toddler Toys",
    "seller_id" => 2)
product_4_image = URI.open('https://toysy-seeds.s3.amazonaws.com/4_wooden_train.jpg')
product4.image.attach(io: product_4_image, filename: "4_wooden_train.jpg")





product5 = Product.create!(
    "name" => "Silicone/Wood Baby Rattle Rings",
    "description" => "Handmade Silicone and Wood Baby Rattle Rings! Perfect for baby showers or new baby gifts!
Silicone beads are used for easy grasp and wood beads provide the rattle noise to catch baby's attention!
Silicone beads: 15mm or 19mm
Wood beads: 14mm-19mm
String: Nylon bead cord
All rings are 3.5-4 inches in diameter
Wooden ring is 2.5 inches

Wash with warm water and dish soap.",
    "price" => 11.99,
    "quantity" => 200,
    "category" => "Baby and Toddler Toys",
    "seller_id" => 3)
product_5_image = URI.open('https://toysy-seeds.s3.amazonaws.com/5_rattle_rings.jpg')
product5.image.attach(io: product_5_image, filename: "5_rattle_rings.jpg")



product6 = Product.create!(
    "name" => "Set of 3 patterns ELEPHANT, GIRAFFE and KOALA rattles",
    "description" => "It includes 3 PATTERNS to crochet your own cute ELEPHANT, GIRAFFE and KOALA rattles.

The final size of the rattles is about 12 - 13 cm!

These patterns include detailed instructions with a plenty of photo references to instruct you on how to crochet rattles step by step.",
    "price" => 7.99,
    "quantity" => 200,
    "category" => "Baby and Toddler Toys",
    "seller_id" => 3)
product_6_image = URI.open('https://toysy-seeds.s3.amazonaws.com/6_3_set_rattles.jpg')
product6.image.attach(io: product_6_image, filename: "6_3_set_rattles.jpg")




##category  "Stuffed Animals and Plushies"
product7 = Product.create!(
    "name" => "Amigurumi Monkey in Blue or Purple, Cute Crochet Toy Monkey",
    "description" => "This adorable personalized Elephant Birth Stat Gift Basket is the perfect gift for any new Baby Girl! Not only is this gift memorable but the new parents will love and cherish this keepsake for years to come!

Hazel, the Pink Elephant is so soft and cuddly! She stands 9 inches tall and is sure to be your Baby Girls' Bestie!

This beautiful basket can be made with a gray or Pink Elephant!",
    "price" => 57.99,
    "quantity" => 200,
    "category" => "Stuffed Animals and Plushies",
    "seller_id" => 4)
product_7_image = URI.open('https://toysy-seeds.s3.amazonaws.com/7_two_monkeys.jpg')
product7.image.attach(io: product_7_image, filename: "7_two_monkeys.jpg")



product8 = Product.create!(
    "name" => "Stuffed Animal, Baby Shower, Baby Girl Gift Basket, Birth Announcement",
    "description" => "Made to my own original design, this cute crochet monkey is hand made with soft acrylic yarn in a choice of purple or blue. Measuring approximately 16cm (6 3/4 inches) tall when sitting, or 24.5 cm (9 3/4 inches) including legs, she is an ideal size for little hands to play with, or to sit on a shelf or desk to keep you company.

**Not recommended for children under 3 as plastic eyes can be a choking hazard.
* Made with quality acrylic yarn (Allergy friendly and washable).
* Measures 16cm tall when sitting, or 24.5cm with legs.
* Hand made in a smoke free and pet free household.
* As with all of my amigurumi creations, she is made with care and attention to detail with tight, uniform crochet stitches which will keep her stuffing on the inside where it belongs.",
    "price" => 67.99,
    "quantity" => 200,
    "category" => "Stuffed Animals and Plushies",
    "seller_id" => 4)
product_8_image = URI.open('https://toysy-seeds.s3.amazonaws.com/8_stuff_animal_elephant.jpg')
product8.image.attach(io: product_8_image, filename: "8_stuff_animal_elephant.jpg")



product9 = Product.create!(
    "name" => "Corgi Plush Pups - 5in Plush - Realistic Colors ",
    "description" => "hese little cuties come in three color options and two facial expressions. They will make either the perfect little stocking stuffer for the holidays or a good gift for a friend's birthday.

These pups take about a week to make and process depending on the order frequency. ",
    "price" => 14.99,
    "quantity" => 200,
    "category" => "Stuffed Animals and Plushies",
    "seller_id" => 5)
product_9_image = URI.open('https://toysy-seeds.s3.amazonaws.com/9_corgis.jpg')
product9.image.attach(io: product_9_image, filename: "9_corgis.jpg")



product10 = Product.create!(
    "name" => "Cow amigurumi: animal crochet",
    "description" => "This cute cow amigurumi would like to be part of your home ♥

♥-------------------------------------♥
- Measures:

Crochet cow: 12 cm tall X 10 cm wide

- Materials:

Black and white wool and felt. ",
    "price" => 14.99,
    "quantity" => 200,
    "category" => "Stuffed Animals and Plushies",
    "seller_id" => 5)
product_10_image = URI.open('https://toysy-seeds.s3.amazonaws.com/10_cow.jpg')
product10.image.attach(io: product_10_image, filename: "10_cow.jpg")



##category "Learning and School"


product11 = Product.create!(
    "name" => "Child Gift Cupcake Count Sprinkles & match colors Learning set Busy Book Page Quiet",
    "description" => "This counting set can be used in many ways - Use your imagination. Count the sprinkles on the frosting and match it to the cupcake bottom numbered 1 thru 10. You can also match the color of the stitched number on the cupcake bottom and match it to the color of sprinkles on top of the frosting,

If you prefer to have assorted sprinkles on the cupcake instead of a specific color please let me know I will be glad to do that for you.

Tell your child to put 1 through all 10 together - then count backwards 10 to 1. ",
    "price" => 19.99,
    "quantity" => 200,
    "category" => "Learning and School",
    "seller_id" => 6)
product_11_image = URI.open('https://toysy-seeds.s3.amazonaws.com/11_cupcakes.jpg')
product11.image.attach(io: product_11_image, filename: "11_cupcakes.jpg")



product12 = Product.create!(
    "name" => "Wooden Puzzles For Toddlers And Kids 3D Montessori Game Toys Children wood jigsaw puzzle",
    "description" => "Jump start your little ones learning with chunky puzzles, while focusing on their fine motor skills! While playing with these puzzles children will develop cognition of the shapes of animals and vehicles. The bright colors will stimulate the brain and keep children engaged for hours of play.

Size:

Each puzzle is approximately 8.5 inches by 4 inches by .5 inches
This size allows for easy play just about anywhere. bring with you in the car, airplane, or just about anywhere else!",
    "price" => 12.99,
    "quantity" => 200,
    "category" => "Learning and School",
    "seller_id" => 6)
product_12_image = URI.open('https://toysy-seeds.s3.amazonaws.com/12_puzzle_dino.jpg')
product12.image.attach(io: product_12_image, filename: "12_puzzle_dino.jpg")



product13 = Product.create!(
    "name" => "Help your child express their feelings with sign language. Social Emotional. Children's sign language",
    "description" => "With the addition of social-emotional sign language tools you and the children can build communication skills that complement their facial expressions. Now you have a vocabulary to address emotions and feelings.

Every day is different and learning to share and express feelings with Emma and Egor couldn’t be more straightforward.

The 8.5” X 8.5” paperback book features 12 different scenarios and in each, the children are asked what they think the character is feeling, giving you a clue as to how the child themselves might feel.",
    "price" => 11.99,
    "quantity" => 200,
    "category" => "Learning and School",
    "seller_id" => 7)
product_13_image = URI.open('https://toysy-seeds.s3.amazonaws.com/13_feeling_book.jpg')
product13.image.attach(io: product_13_image, filename: "13_feeling_book.jpg")



product14 = Product.create!(
    "name" => "Animals Learning Board with Name Puzzle, Custom Matching Game, Preschool",
    "description" => "This toy never gets boring. It comes with 20 animal elements and helps children to develop their motor skills. Full-bodied animals with their names engraved at the bottom will keep your little one learning through play. What is more, kids would love gifts with their names on them!",
    "price" => 11.99,
    "quantity" => 200,
    "category" => "Learning and School",
    "seller_id" => 7)
product_14_image = URI.open('https://toysy-seeds.s3.amazonaws.com/14_animals_puzzle.jpg')
product14.image.attach(io: product_14_image, filename: "14_animals_puzzle.jpg")




product15 = Product.create!(
    "name" => "Mudpuppy Magnetic Pixels Figures Image Costume Match Play boards",
    "description" => "Mudpuppy Medieval Kingdom Magnetic Pixels Image Play-boards Game Toy-NEW
New in original package
Features Pixels magnetic Puzzles
Contain small parts, Adult supervised .
Recommended Aged 6 to 12 years",
    "price" => 15.99,
    "quantity" => 200,
    "category" => "Learning and School",
    "seller_id" => 8)
product_15_image = URI.open('https://toysy-seeds.s3.amazonaws.com/15_magnetic_pixels.jpg')
product15.image.attach(io: product_15_image, filename: "15_magnetic_pixels.jpg")


##category "Dolls and Action Figures"
product16 = Product.create!(
    "name" => "Fatal Fury 3D Printed Painted Action Figure 3D Character 3D Sculpture",
    "description" => "Fatal Fury 3D Printed Painted Action Figure 3D Character 3D Sculpture Anime Character

The Height of the Product is 25 Centimeters.",
    "price" => 11.99,
    "quantity" => 200,
    "category" => "Dolls and Action Figures",
    "seller_id" => 8)
product_16_image = URI.open('https://toysy-seeds.s3.amazonaws.com/16_fatal_fury.jpg')
product16.image.attach(io: product_16_image, filename: "16_fatal_fury.jpg")



product17 = Product.create!(
    "name" => "Godzilla King Of The Monsters Godzilla Force Fighter Easton Figure",
    "description" => "RELEASED IN: 1994

SERIES: GODZILLA

GODZILLA FORCE - ULTIMATE FIGHTER 

INCLUDES: FIGURE WITH ACCESSORIES

AGE: 4+

APPROX SIZE: 4",
    "price" => 11.99,
    "quantity" => 200,
    "category" => "Miniature Toys",
    "seller_id" => 9)
product_17_image = URI.open('https://toysy-seeds.s3.amazonaws.com/17_godzilla.jpg')
product17.image.attach(io: product_17_image, filename: "17_godzilla.jpg")



product18 = Product.create!(
    "name" => "Terry Bogard Fatal Fury made to order custom pop",
    "description" => "Rhis listing is for a Custom Handmade Funko Pop in a custom design and printed shiny metallic box made to order.

Please Allow up to four weeks for your funko pop to be made and shipped",
    "price" => 7.99,
    "quantity" => 200,
    "category" => "Dolls and Action Figures",
    "seller_id" => 9)
product_18_image = URI.open('https://toysy-seeds.s3.amazonaws.com/18_fatal_fury_terry.jpg')
product18.image.attach(io: product_18_image, filename: "18_fatal_fury_terry.jpg")




product19 = Product.create!(
    "name" => "Super Saiyan Rose Goku - Dragon Ball Z ",
    "description" => "Grandista comes one of Goku's greatest enemies, Goku Black, making his appearance in his ascended Rose form. at an implressive 11Inches tall it is incredibly sculped with detail and sure to intimidate other Dragon Ball Figures

Brand Name: Bandai / Grandista 
Model Number: BdP1a704d8",
    "price" => 17.99,
    "quantity" => 200,
    "category" => "Dolls and Action Figures",
    "seller_id" => 9)
product_19_image = URI.open('https://toysy-seeds.s3.amazonaws.com/19_dragonball_goku.jpg')
product19.image.attach(io: product_19_image, filename: "19_dragonball_goku.jpg")



product20 = Product.create!(
    "name" => "Prince Vegeta funko pop",
    "description" => "From Dragon ball Z, Child Vegetal, as a stylized Pop!
Stylized collectable stands 3 ¾ inches tall, perfect for any Dragon ball Z fan!
Collect and display all Dragon ball Z POP! Vinyl's!
Package Dimensions: 3.5 L x 6.25 H x 4.5 W (inches)",
    "price" => 17.99,
    "quantity" => 200,
    "category" => "Dolls and Action Figures",
    "seller_id" => 10)
product_20_image = URI.open('https://toysy-seeds.s3.amazonaws.com/20_Dragonball_pop.jpg')
product20.image.attach(io: product_20_image, filename: "20_Dragonball_pop.jpg")



##Reviews



Review.create!(
        "comment"=>"They look exactly like in the picture. Good quality and amazing customer service! I will buy more on the future for sure! ",
        "rating" => 5,
        "user_id" => 2
        "product_id" => 1)


Review.create!(
        "comment"=>"This was done so quickly, while still being perfect! Perfect size for my newborn born just a few days ago",
        "rating" => 4,
        "user_id" => 9
        "product_id" => 1)


Review.create!(
    "comment"=>"LOVE LOVE LOVE! delivered so quick! I can't wait for our friend to have her baby so we can give it to her!! Would definitely recommend this shop and will be ordering again whenever any of our other friends have babies! Thank you!!",
    "rating" => 5,
    "user_id" => 7
    "product_id" => 2)

Review.create!(
    "comment"=>"Absolutely beautifully made! My friend loves it. Couldn’t be happier! Will be making more purchases in the future! Shipped quick as well!",
    "rating" => 5,
    "user_id" => 5
    "product_id" => 2)

Review.create!(
    "comment"=>"Absolutely loved it! So cute, great quality. I highly recommend!",
    "rating" => 5,
    "user_id" => 5
    "product_id" => 3)

Review.create!(
    "comment"=>"Absolutely beautifully made! My friend loves it. Couldn’t be happier! Will be making more purchases in the future! Shipped quick as well!",
    "rating" => 5,
    "user_id" => 4
    "product_id" => 3)    

Review.create!(
    "comment"=>"It was so cute, loved the small details on it!! For some reason I thought it would be bigger but the size is still good enough!! Recommend getting it again!! 10/10 :)",
    "rating" => 5,
    "user_id" => 9
    "product_id" => 4)    

Review.create!(
    "comment"=>"Second time I’ve ordered this block for my kids, they turn out beautifully. Very fast shipping too!",
    "rating" => 4,
    "user_id" => 1
    "product_id" => 4)    

Review.create!(
    "comment"=>"Second time I’ve ordered this block for my kids, they turn out beautifully. Very fast shipping too!",
    "rating" => 4,
    "user_id" => 7
    "product_id" => 5)    

Review.create!(
    "comment"=>"So cute and well made!",
    "rating" => 5,
    "user_id" => 2
    "product_id" => 5)    

Review.create!(
    "comment"=>"So cute and well made!",
    "rating" => 5,
    "user_id" => 2
    "product_id" => 6)    

Review.create!(
    "comment"=>"Thank you I think this will be a fun gift.",
    "rating" => 3,
    "user_id" => 8
    "product_id" => 6)    

Review.create!(
    "comment"=>"So cute it makes my heart burst! I’m surprised this isn’t a well-known because the quality is amazing!!",
    "rating" => 3,
    "user_id" => 8
    "product_id" => 7)    

Review.create!(
    "comment"=>"I am so happy with this entire experience! The ordering process was straightforward and the seller was very friendly and helpful!",
    "rating" => 5,
    "user_id" => 9
    "product_id" => 7)    

Review.create!(
    "comment"=>"So cute it makes my heart burst! I’m surprised this isn’t a well-known because the quality is amazing!!",
    "rating" => 3,
    "user_id" => 5
    "product_id" => 8)    

Review.create!(
    "comment"=>"I am so happy with this entire experience! The ordering process was straightforward and the seller was very friendly and helpful!",
    "rating" => 5,
    "user_id" => 10
    "product_id" => 8)    

Review.create!(
    "comment"=>"So cute it makes my heart burst! I’m surprised this isn’t a well-known because the quality is amazing!!",
    "rating" => 3,
    "user_id" => 5
    "product_id" => 9)    

Review.create!(
    "comment"=>"Omg! This is the second baby I order from you and I'm in love. Sharing with all my friends. The perfect baby gift ever! Beautiful! My babies boy and girl love them",
    "rating" => 5,
    "user_id" => 1
    "product_id" => 9)    

Review.create!(
    "comment"=>"So cute it makes my heart burst! I’m surprised this isn’t a well-known because the quality is amazing!!",
    "rating" => 3,
    "user_id" => 5
    "product_id" => 10)    

Review.create!(
    "comment"=>"Omg! This is the second baby I order from you and I'm in love. Sharing with all my friends. The perfect baby gift ever! Beautiful! My babies boy and girl love them",
    "rating" => 5,
    "user_id" => 10
    "product_id" => 10)    




Review.create!(
        "comment"=>"They look exactly like in the picture. Good quality and amazing customer service! I will buy more on the future for sure! ",
        "rating" => 5,
        "user_id" => 2
        "product_id" => 11)


Review.create!(
        "comment"=>"This was done so quickly, while still being perfect! Perfect size for my newborn born just a few days ago",
        "rating" => 4,
        "user_id" => 9
        "product_id" => 11)


Review.create!(
    "comment"=>"LOVE LOVE LOVE! delivered so quick! I can't wait for our friend to have her baby so we can give it to her!! Would definitely recommend this shop and will be ordering again whenever any of our other friends have babies! Thank you!!",
    "rating" => 5,
    "user_id" => 7
    "product_id" => 12)

Review.create!(
    "comment"=>"Absolutely beautifully made! My friend loves it. Couldn’t be happier! Will be making more purchases in the future! Shipped quick as well!",
    "rating" => 5,
    "user_id" => 5
    "product_id" => 12)

Review.create!(
    "comment"=>"Absolutely loved it! So cute, great quality. I highly recommend!",
    "rating" => 5,
    "user_id" => 5
    "product_id" => 13)

Review.create!(
    "comment"=>"Absolutely beautifully made! My friend loves it. Couldn’t be happier! Will be making more purchases in the future! Shipped quick as well!",
    "rating" => 5,
    "user_id" => 4
    "product_id" => 13)    

Review.create!(
    "comment"=>"It was so cute, loved the small details on it!! For some reason I thought it would be bigger but the size is still good enough!! Recommend getting it again!! 10/10 :)",
    "rating" => 5,
    "user_id" => 9
    "product_id" => 14)    

Review.create!(
    "comment"=>"Second time I’ve ordered this block for my kids, they turn out beautifully. Very fast shipping too!",
    "rating" => 4,
    "user_id" => 1
    "product_id" => 14)    

Review.create!(
    "comment"=>"Second time I’ve ordered this block for my kids, they turn out beautifully. Very fast shipping too!",
    "rating" => 4,
    "user_id" => 7
    "product_id" => 15)    

Review.create!(
    "comment"=>"So cute and well made!",
    "rating" => 5,
    "user_id" => 2
    "product_id" => 15)    

Review.create!(
    "comment"=>"So cute and well made!",
    "rating" => 5,
    "user_id" => 2
    "product_id" => 16)    

Review.create!(
    "comment"=>"Thank you I think this will be a fun gift.",
    "rating" => 3,
    "user_id" => 8
    "product_id" => 16)    

Review.create!(
    "comment"=>"So cute it makes my heart burst! I’m surprised this isn’t a well-known because the quality is amazing!!",
    "rating" => 3,
    "user_id" => 8
    "product_id" => 17)    

Review.create!(
    "comment"=>"I am so happy with this entire experience! The ordering process was straightforward and the seller was very friendly and helpful!",
    "rating" => 5,
    "user_id" => 9
    "product_id" => 17)    

Review.create!(
    "comment"=>"So cute it makes my heart burst! I’m surprised this isn’t a well-known because the quality is amazing!!",
    "rating" => 3,
    "user_id" => 5
    "product_id" => 18)    

Review.create!(
    "comment"=>"I am so happy with this entire experience! The ordering process was straightforward and the seller was very friendly and helpful!",
    "rating" => 5,
    "user_id" => 10
    "product_id" => 18)    

Review.create!(
    "comment"=>"So cute it makes my heart burst! I’m surprised this isn’t a well-known because the quality is amazing!!",
    "rating" => 3,
    "user_id" => 5
    "product_id" => 19)    

Review.create!(
    "comment"=>"Omg! This is the second baby I order from you and I'm in love. Sharing with all my friends. The perfect baby gift ever! Beautiful! My babies boy and girl love them",
    "rating" => 5,
    "user_id" => 1
    "product_id" => 19)    

Review.create!(
    "comment"=>"So cute it makes my heart burst! I’m surprised this isn’t a well-known because the quality is amazing!!",
    "rating" => 3,
    "user_id" => 5
    "product_id" => 20)    

Review.create!(
    "comment"=>"Omg! This is the second baby I order from you and I'm in love. Sharing with all my friends. The perfect baby gift ever! Beautiful! My babies boy and girl love them",
    "rating" => 5,
    "user_id" => 10
    "product_id" => 20)    


