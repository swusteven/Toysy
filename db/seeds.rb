# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

awesome_guest = User.create("fname"=> "Awesome Guest", "email"=> "awesomeguest@yahoo.com", "password": "123456")
mary = User.create("fname"=> "Mary", "email"=> "mary@yahoo.com", "password": "123456")

product1 = Product.create!(
    "name" => "Leaf puzzle montessori toy toddler gift for baby | Wooden Leaf Puzzle | Leaf puzzle",
    "description" => "<p>This listing is about our montessori toy puzzle Leaf. The toy is made from safe material, all protrusions and holes are thought out to the smallest detail and made conveniently so that the baby can play comfortably while exploring the present without distractions.<br><br>A unique educational toy from environmentally friendly materials - is the basis puzzle, you need for learning leaf trees. Your child will know leaf trees from childhood and may succeed in school :)<br><br>Material: high quality plywood. <br><br>The puzzle size is: 11.41 x 7.5 inches or 290 x 190 mm.</p>",
    "price" => 23.99,
    "quantity" => 20,
    "category" => "Learning and School",
    "seller_id" => 1
)

product1.image.attach(io: File.open('/Users/swusteven/Desktop/product_images/leaf_puzzle.jpg'), filename: 'leaf_puzzle.jpg')


product2 = Product.create!(
    "name" => "Montessori wood pencil holder, crayon holder, color sorting, wood desc organizer, artist pencil organize",
    "description" => "We offer this small, very compact Montessori pencil holder. This is a perfect way to organize your pencils and it does look amazing on the desk. This is our BESSTSELLER for more than 6 years and people LOVE it! Many of them return even more than once to buy a new pencil holder as a gift to others.

It is ideal for home use where every inch of space counts.

Measures only 41 cm x 7 cm (15 x 2,75 inches). There is 11 holes and each one of them is 3 cm in diameter and are 6 cm deep.

The colored circles are made from hazel branches. They are sanded and colored with water based acrylic paint. These natural wooden circles with bark give the pencil holder a nice look.",
    "price" => 16.99,
    "quantity" => 200,
    "category" => "Baby and Toddler Toys",
    "seller_id" => 2
)
product2.image.attach(io: File.open('/Users/swusteven/Desktop/product_images/color_pens.jpg'), filename: 'color_pens.jpg')


product3 = Product.create!(
    "name" => "Super Mario Odyssey Figurines",
    "description" => "1) Red Mario with Cappy
2) Wedding Mario in tuxedo and top hat
3) Explorer Mario with Explorer hat and top hat
4) Luigi with Captain's hat
5) Gold Mario",
    "price" => 16.99,
    "quantity" => 220,
    "category" => "Dolls and Action Figures",
    "seller_id" => 2
)
product3.image.attach(io: File.open('/Users/swusteven/Desktop/product_images/mario.jpg'), filename: 'mario.jpg')
