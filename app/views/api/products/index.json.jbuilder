json.array! @products do  |product|
    json.set! product.id do 
        json.extract! product, :id, :name, :description, :price, :quantity, :category, :seller_id
    end
end
