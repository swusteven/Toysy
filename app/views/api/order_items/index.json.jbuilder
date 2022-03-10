@orderItems.each do |item|
    json.set! item.order_id do 
        json.set! item.product_id do 
            json.extract! item, :id, :order_id, :product_id, :quantity, :price, :created_at
            json.name item.product.name
            json.description item.product.description
            json.price item.product.price
            json.category item.product.category
            json.seller_id item.product.seller_id
            json.seller item.product.seller.fname
            json.imageUrl url_for(item.product.image)
        end
    end
end