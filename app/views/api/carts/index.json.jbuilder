@cartItems.each do |item|
    json.set! item.product_id do 
        json.extract! item, :id, :cart_id, :product_id, :quantity

        json.name item.product.name
        json.description item.product.description
        json.price item.product.price
        json.category item.product.category
        json.seller_id item.product.seller_id
        json.imageUrl url_for(item.product.image)

    end
end