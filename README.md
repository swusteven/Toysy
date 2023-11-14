# Welcome to Toysy

[Check out the Live Site!](https://toysy.onrender.com/#/)

## Introduction

Toysy is a clone of the Etsy website at the time of creation. Etsy is e-commerce company focused on handmade or vintage items and craft supplies. I am inspired by their great UI design thus I decided to create this fullstack project to showcase some of my technical skills as well as having a lot of fun with currating contents.

### The technologies used in this project include:

- React
- Redux
- JavaScript
- Ruby on Rails
- Postgres
- Amazon S3
- HTML
- SCSS
- Heroku
- ... and many more!

Versions
Ruby v2.5.1 Node v14.19.0

## Toysy setup

To run this App locally:

1. Git clone this repo
2. Open up the App and in the root directory run: "bundle install" followed by "npm install"
3. Set up the database by running: "bundle exec rails db:setup"
4. Launch the App using "npm start" in one terminal and "bundle exec rails server" in another
5. Open up localhost:3000 in the browser of your choosing

## Code Highlights

I was inititially having an issue with search results returned duplicate items. This was an issue because the keywords matched multiple words of a product name. Initially, I created another iteratable loop to filter out duplicates. After further optimization, I decided to use a Set to store all the matched result that ensuring no duplication of the same item on search results.

```javascript
    export const searchQuery =(searchValue, products) =>{
        if (!searchValue) return [];

        let productsInArray = Array.from(Object.values(products));
        let searchValueInArray = searchValue.split(" ");

        const results = new Set();

        productsInArray.forEach(product=>{
            let productName = product.name.toLowerCase()
            for (let i = 0; i < searchValueInArray.length; i++) {
                if (productName.includes(searchValueInArray[i].toLowerCase())){
                    results.add(product)
                    continue
                }
            }
        });

  return Array.from(results)
```

The shopping cart model was built based on one-to-many associations that connected User, Shopping Cart and Product. The code snippet below illustrates how I used the current user's information to retrieve a list of all the products, and then retrieve associated details such as quantity, name, price etc. The list of items are placed in an array which can be utilized later in order to display the items on the shopping cart using React in the frontend.

```ruby
    def index
        @user = User.find(params[:user_id])
        @cartItems = @user.products_on_cart.all
    end


    @cartItems.each do |item|
        json.set! item.product_id do
        json.extract! item, :id, :cart_id, :product_id, :quantity

        json.name item.product.name
        json.description item.product.description
        json.price item.product.price
        json.category item.product.category
        json.seller_id item.product.seller_id
        json.seller item.product.seller.fname
        json.imageUrl url_for(item.product.image)
    end
end
```

One of the challenges to create a purchase order in the backend was to dissect the HTTP POST request that contained more than one product items. Typically, a POST request only contains data for one object/item that can be easily parsed. However, order purchases contain multiple items that need to be store in the database individually. Below snippet illustrate the steps that I've taken to store all items in the OrderItem model and linked to a unique record in the Order model for the current user.

1. find the current user in the User model,
2. create an new order/record in the Order model for this transaction,
3. parsed order details from the HTTP request.
4. iterate through all the items and store them individually in the OrderItem model along with all the relevant info such as quantity, product_id, and order_id that created in step 2.

```ruby
    def create
        @user = User.find(params[:user_id])
        @order = Order.create!('user_id' =>@user.id)
        @data = params[:itemsInArray]
        @data.each do |key, val|
            OrderItem.create!('product_id'=> val['product_id'].to_i, 'quantity' => val['quantity'].to_i, 'price' => val['price'].to_i, 'order_id' => @order.id)
        end
    end
```

## Licensing

Please note that none of these assets are mine. I do not claim any of the images featured on Toysy and I do not gain any monetary value from this application.
