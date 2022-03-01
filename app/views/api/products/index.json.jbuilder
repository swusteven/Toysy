json.array! @products do  |product|
    
    json.extract! product, :id, :name, :description, :price, :quantity, :category, :seller_id
    
end
